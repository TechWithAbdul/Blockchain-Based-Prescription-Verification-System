// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrescriptionSystem {
    address public admin;
    uint256 public prescriptionCount;

    enum PrescriptionStatus { Issued, Verified, Fulfilled, Expired, Modified }

    struct Prescription {
        uint256 id;
        address doctor;
        address patient;
        string medicineList;
        string notes;
        uint256 date;
        uint256 expiryDate;
        PrescriptionStatus status;
        address pharmacy;
        address[] emergencyAccess;
        bytes32 prescriptionHash; // New field for storing hash
    }

    mapping(address => bool) public doctors;
    mapping(address => bool) public pharmacies;
    mapping(address => bool) public emergencyPersonnel;
    mapping(uint256 => Prescription) public prescriptions;
    mapping(address => uint256[]) public patientPrescriptions;

    event DoctorRegistered(address doctor);
    event PharmacyRegistered(address pharmacy);
    event EmergencyPersonnelRegistered(address personnel);
    event PrescriptionIssued(uint256 id, address doctor, address patient, string medicineList, string notes, bytes32 prescriptionHash);
    event PrescriptionModified(uint256 id, address doctor, string medicineList, string notes, bytes32 prescriptionHash);
    event PrescriptionVerified(uint256 id, address pharmacy);
    event PrescriptionFulfilled(uint256 id, address pharmacy);
    event PrescriptionExpired(uint256 id);
    event EmergencyAccessGranted(uint256 id, address personnel);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyDoctor() {
        require(doctors[msg.sender], "Only registered doctors can perform this action");
        _;
    }

    modifier onlyPharmacy() {
        require(pharmacies[msg.sender], "Only registered pharmacies can perform this action");
        _;
    }

    modifier onlyEmergencyPersonnel() {
        require(emergencyPersonnel[msg.sender], "Only emergency personnel can perform this action");
        _;
    }

    modifier validAddress(address _addr) {
        require(_addr != address(0), "Invalid address");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerDoctor(address _doctor) public onlyAdmin validAddress(_doctor) {
        require(!doctors[_doctor], "Doctor already registered");
        doctors[_doctor] = true;
        emit DoctorRegistered(_doctor);
    }

    function registerPharmacy(address _pharmacy) public onlyAdmin validAddress(_pharmacy) {
        require(!pharmacies[_pharmacy], "Pharmacy already registered");
        pharmacies[_pharmacy] = true;
        emit PharmacyRegistered(_pharmacy);
    }

    function registerEmergencyPersonnel(address _personnel) public onlyAdmin validAddress(_personnel) {
        require(!emergencyPersonnel[_personnel], "Personnel already registered");
        emergencyPersonnel[_personnel] = true;
        emit EmergencyPersonnelRegistered(_personnel);
    }

    function issuePrescription(
        address _patient,
        string memory _medicineList,
        string memory _notes,
        uint256 _expiryDate,
        address[] memory _emergencyAccess
    ) public onlyDoctor validAddress(_patient) {
        require(bytes(_medicineList).length > 0, "Medicine list cannot be empty");
        require(_expiryDate > block.timestamp, "Expiry date must be in the future");
        for (uint i = 0; i < _emergencyAccess.length; i++) {
            require(_emergencyAccess[i] != address(0), "Invalid emergency access address");
        }

        // Generate hash of prescription details
        bytes32 hash = keccak256(abi.encodePacked(_patient, _medicineList, _notes, _expiryDate));

        prescriptionCount++;
        prescriptions[prescriptionCount] = Prescription(
            prescriptionCount,
            msg.sender,
            _patient,
            _medicineList,
            _notes,
            block.timestamp,
            _expiryDate,
            PrescriptionStatus.Issued,
            address(0),
            _emergencyAccess,
            hash
        );
        patientPrescriptions[_patient].push(prescriptionCount);
        emit PrescriptionIssued(prescriptionCount, msg.sender, _patient, _medicineList, _notes, hash);
    }

    function modifyPrescription(
        uint256 _id,
        string memory _medicineList,
        string memory _notes,
        uint256 _expiryDate
    ) public onlyDoctor {
        Prescription storage prescription = prescriptions[_id];
        require(prescription.id != 0, "Prescription does not exist");
        require(prescription.doctor == msg.sender, "Only issuing doctor can modify");
        require(prescription.status == PrescriptionStatus.Issued, "Prescription cannot be modified");
        require(bytes(_medicineList).length > 0, "Medicine list cannot be empty");
        require(_expiryDate > block.timestamp, "Expiry date must be in the future");

        // Generate new hash
        bytes32 hash = keccak256(abi.encodePacked(prescription.patient, _medicineList, _notes, _expiryDate));

        prescription.medicineList = _medicineList;
        prescription.notes = _notes;
        prescription.expiryDate = _expiryDate;
        prescription.status = PrescriptionStatus.Modified;
        prescription.prescriptionHash = hash;
        emit PrescriptionModified(_id, msg.sender, _medicineList, _notes, hash);
    }

    function verifyPrescription(uint256 _id) public onlyPharmacy {
        Prescription storage prescription = prescriptions[_id];
        require(prescription.id != 0, "Prescription does not exist");
        require(prescription.status == PrescriptionStatus.Issued || prescription.status == PrescriptionStatus.Modified, "Invalid prescription status");
        require(block.timestamp <= prescription.expiryDate, "Prescription expired");
        prescription.status = PrescriptionStatus.Verified;
        emit PrescriptionVerified(_id, msg.sender);
    }

    function fulfillPrescription(uint256 _id) public onlyPharmacy {
        Prescription storage prescription = prescriptions[_id];
        require(prescription.id != 0, "Prescription does not exist");
        require(prescription.status == PrescriptionStatus.Verified, "Prescription not verified");
        require(block.timestamp <= prescription.expiryDate, "Prescription expired");
        prescription.status = PrescriptionStatus.Fulfilled;
        prescription.pharmacy = msg.sender;
        emit PrescriptionFulfilled(_id, msg.sender);
    }

    function markExpired(uint256 _id) public onlyPharmacy {
        Prescription storage prescription = prescriptions[_id];
        require(prescription.id != 0, "Prescription does not exist");
        require(block.timestamp > prescription.expiryDate, "Prescription not expired");
        require(prescription.status != PrescriptionStatus.Fulfilled, "Prescription already fulfilled");
        prescription.status = PrescriptionStatus.Expired;
        emit PrescriptionExpired(_id);
    }

    function emergencyAccessPrescription(uint256 _id) public onlyEmergencyPersonnel {
        Prescription storage prescription = prescriptions[_id];
        require(prescription.id != 0, "Prescription does not exist");
        bool hasAccess = false;
        for (uint i = 0; i < prescription.emergencyAccess.length; i++) {
            if (prescription.emergencyAccess[i] == msg.sender) {
                hasAccess = true;
                break;
            }
        }
        require(hasAccess, "No emergency access granted");
        emit EmergencyAccessGranted(_id, msg.sender);
    }

    // New function to verify prescription hash
    function verifyPrescriptionHash(uint256 _id, bytes32 _hash) public view returns (bool) {
        Prescription memory prescription = prescriptions[_id];
        require(prescription.id != 0, "Prescription does not exist");
        return prescription.prescriptionHash == _hash;
    }

    function getPrescription(uint256 _id) public view returns (
        uint256 id,
        address doctor,
        address patient,
        string memory medicineList,
        string memory notes,
        uint256 date,
        uint256 expiryDate,
        PrescriptionStatus status,
        address pharmacy,
        address[] memory emergencyAccess,
        bytes32 prescriptionHash
    ) {
        Prescription memory p = prescriptions[_id];
        require(p.id != 0, "Prescription does not exist");
        require(
            msg.sender == p.doctor ||
            msg.sender == p.patient ||
            msg.sender == p.pharmacy ||
            pharmacies[msg.sender] ||
            emergencyPersonnel[msg.sender],
            "Unauthorized access"
        );
        if (emergencyPersonnel[msg.sender]) {
            bool hasAccess = false;
            for (uint i = 0; i < p.emergencyAccess.length; i++) {
                if (p.emergencyAccess[i] == msg.sender) {
                    hasAccess = true;
                    break;
                }
            }
            require(hasAccess, "No emergency access granted");
        }

        return (
            p.id,
            p.doctor,
            p.patient,
            p.medicineList,
            p.notes,
            p.date,
            p.expiryDate,
            p.status,
            p.pharmacy,
            p.emergencyAccess,
            p.prescriptionHash
        );
    }

    function getPatientPrescriptions(address _patient) public view returns (uint256[] memory) {
        require(msg.sender == _patient || doctors[msg.sender] || pharmacies[msg.sender] || emergencyPersonnel[msg.sender], "Unauthorized access");
        return patientPrescriptions[_patient];
    }
}