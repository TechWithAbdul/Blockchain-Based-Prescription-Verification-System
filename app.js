const contractAddress = "0x56865D12CE7315F4fc1eb96155548930d40fCc9b"; // Update with your deployed contract address
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			}
		],
		"name": "DoctorRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "personnel",
				"type": "address"
			}
		],
		"name": "EmergencyAccessGranted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "emergencyAccessPrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "personnel",
				"type": "address"
			}
		],
		"name": "EmergencyPersonnelRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "fulfillPrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_medicineList",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_notes",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expiryDate",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "_emergencyAccess",
				"type": "address[]"
			}
		],
		"name": "issuePrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "markExpired",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_medicineList",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_notes",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expiryDate",
				"type": "uint256"
			}
		],
		"name": "modifyPrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "pharmacy",
				"type": "address"
			}
		],
		"name": "PharmacyRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "PrescriptionExpired",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "pharmacy",
				"type": "address"
			}
		],
		"name": "PrescriptionFulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "medicineList",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "notes",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "prescriptionHash",
				"type": "bytes32"
			}
		],
		"name": "PrescriptionIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "medicineList",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "notes",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "prescriptionHash",
				"type": "bytes32"
			}
		],
		"name": "PrescriptionModified",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "pharmacy",
				"type": "address"
			}
		],
		"name": "PrescriptionVerified",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			}
		],
		"name": "registerDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_personnel",
				"type": "address"
			}
		],
		"name": "registerEmergencyPersonnel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pharmacy",
				"type": "address"
			}
		],
		"name": "registerPharmacy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "verifyPrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "emergencyPersonnel",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patient",
				"type": "address"
			}
		],
		"name": "getPatientPrescriptions",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getPrescription",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "medicineList",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "notes",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			},
			{
				"internalType": "enum PrescriptionSystem.PrescriptionStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "pharmacy",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "emergencyAccess",
				"type": "address[]"
			},
			{
				"internalType": "bytes32",
				"name": "prescriptionHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientPrescriptions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pharmacies",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "prescriptionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "prescriptions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "medicineList",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "notes",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			},
			{
				"internalType": "enum PrescriptionSystem.PrescriptionStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "pharmacy",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "prescriptionHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "verifyPrescriptionHash",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let contract;
let account;

// Debounce function to limit rapid calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(contractABI, contractAddress);
        document.getElementById('connectWallet').onclick = connectWallet;
        window.ethereum.on('accountsChanged', () => {
            connectWallet();
        });
    } else {
        alert('Please install MetaMask!');
    }
};

function isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

function isFutureDate(dateStr) {
    const date = new Date(dateStr).getTime();
    return date > Date.now();
}

function toggleLoading(show) {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.toggle('hidden', !show);
    }
}

async function connectWallet() {
    try {
        toggleLoading(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        document.getElementById('accountInfo').innerText = `Wallet: ${account.slice(0, 6)}...${account.slice(-4)}`;

        const admin = await contract.methods.admin().call();
        const isAdmin = account.toLowerCase() === admin.toLowerCase();
        const isDoctor = await contract.methods.doctors(account).call();
        const isPharmacy = await contract.methods.pharmacies(account).call();
        const isEmergency = await contract.methods.emergencyPersonnel(account).call();

        document.getElementById('adminSection')?.classList.toggle('hidden', !isAdmin);
        document.getElementById('doctorSection')?.classList.toggle('hidden', !isDoctor);
        document.getElementById('pharmacySection')?.classList.toggle('hidden', !isPharmacy);
        document.getElementById('emergencySection')?.classList.toggle('hidden', !isEmergency);
        document.getElementById('patientSection')?.classList.toggle('hidden', !account);

        document.querySelectorAll('#adminSection button').forEach(btn => btn.disabled = !isAdmin);
        document.querySelectorAll('#doctorSection button').forEach(btn => btn.disabled = !isDoctor);
        document.querySelectorAll('#pharmacySection button').forEach(btn => btn.disabled = !isPharmacy);
        document.querySelectorAll('#emergencySection button').forEach(btn => btn.disabled = !isEmergency);
        document.querySelectorAll('#patientSection button').forEach(btn => btn.disabled = !account);

        document.querySelectorAll('nav a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === 'admin.html' && !isAdmin) {
                link.classList.add('pointer-events-none', 'opacity-50');
            } else if (href === 'doctor.html' && !isDoctor) {
                link.classList.add('pointer-events-none', 'opacity-50');
            } else if (href === 'pharmacy.html' && !isPharmacy) {
                link.classList.add('pointer-events-none', 'opacity-50');
            } else if (href === 'emergency.html' && !isEmergency) {
                link.classList.add('pointer-events-none', 'opacity-50');
            } else {
                link.classList.remove('pointer-events-none', 'opacity-50');
            }
        });

        document.querySelectorAll('main a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === 'admin.html' && !isAdmin) {
                link.classList.add('pointer-events-none', 'opacity-50');
            } else {
                link.classList.remove('pointer-events-none', 'opacity-50');
            }
        });
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Error connecting wallet: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function registerDoctor() {
    toggleLoading(true);
    const doctorAddress = document.getElementById('doctorAddress').value;
    if (!isValidAddress(doctorAddress)) {
        alert('Invalid doctor address');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.registerDoctor(doctorAddress).send({ from: account });
        alert('Doctor registered successfully');
    } catch (error) {
        console.error('Error registering doctor:', error);
        alert('Error registering doctor: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function registerPharmacy() {
    toggleLoading(true);
    const pharmacyAddress = document.getElementById('pharmacyAddress').value;
    if (!isValidAddress(pharmacyAddress)) {
        alert('Invalid pharmacy address');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.registerPharmacy(pharmacyAddress).send({ from: account });
        alert('Pharmacy registered successfully');
    } catch (error) {
        console.error('Error registering pharmacy:', error);
        alert('Error registering pharmacy: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function registerEmergencyPersonnel() {
    toggleLoading(true);
    const personnelAddress = document.getElementById('emergencyPersonnelAddress').value;
    if (!isValidAddress(personnelAddress)) {
        alert('Invalid personnel address');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.registerEmergencyPersonnel(personnelAddress).send({ from: account });
        alert('Emergency personnel registered successfully');
    } catch (error) {
        console.error('Error registering emergency personnel:', error);
        alert('Error registering emergency personnel: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function issuePrescription() {
    toggleLoading(true);
    const patientAddress = document.getElementById('patientAddress').value;
    const medicineList = document.getElementById('medicineList').value;
    const notes = document.getElementById('prescriptionNotes').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const emergencyAccess = document.getElementById('emergencyAccess').value.split(',').map(addr => addr.trim());

    if (!isValidAddress(patientAddress)) {
        alert('Invalid patient address');
        toggleLoading(false);
        return;
    }
    if (!medicineList) {
        alert('Medicine list cannot be empty');
        toggleLoading(false);
        return;
    }
    if (!isFutureDate(expiryDate)) {
        alert('Expiry date must be in the future');
        toggleLoading(false);
        return;
    }
    for (const addr of emergencyAccess) {
        if (addr && !isValidAddress(addr)) {
            alert(`Invalid emergency access address: ${addr}`);
            toggleLoading(false);
            return;
        }
    }

    try {
        const result = await contract.methods.issuePrescription(
            patientAddress,
            medicineList,
            notes,
            Math.floor(new Date(expiryDate).getTime() / 1000),
            emergencyAccess.filter(addr => addr)
        ).send({ from: account });
        const hash = result.events.PrescriptionIssued.returnValues.prescriptionHash;
        document.getElementById('prescriptionHash').innerHTML = `<p><strong>Prescription Hash:</strong> ${hash}</p>`;
        alert('Prescription issued successfully');
    } catch (error) {
        console.error('Error issuing prescription:', error);
        alert('Error issuing prescription: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function modifyPrescription() {
    toggleLoading(true);
    const prescriptionId = document.getElementById('modifyPrescriptionId').value;
    const medicineList = document.getElementById('modifyMedicineList').value;
    const notes = document.getElementById('modifyPrescriptionNotes').value;
    const expiryDate = document.getElementById('modifyExpiryDate').value;

    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        alert('Invalid prescription ID');
        toggleLoading(false);
        return;
    }
    if (!medicineList) {
        alert('Medicine list cannot be empty');
        toggleLoading(false);
        return;
    }
    if (!isFutureDate(expiryDate)) {
        alert('Expiry date must be in the future');
        toggleLoading(false);
        return;
    }

    try {
        const result = await contract.methods.modifyPrescription(
            prescriptionId,
            medicineList,
            notes,
            Math.floor(new Date(expiryDate).getTime() / 1000)
        ).send({ from: account });
        const hash = result.events.PrescriptionModified.returnValues.prescriptionHash;
        document.getElementById('prescriptionHash').innerHTML = `<p><strong>Modified Prescription Hash:</strong> ${hash}</p>`;
        alert('Prescription modified successfully');
    } catch (error) {
        console.error('Error modifying prescription:', error);
        alert('Error modifying prescription: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function displayPrescriptionDetails() {
    const prescriptionId = document.getElementById('verifyPrescriptionId').value;
    const detailsDiv = document.getElementById('prescriptionDetails');

    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        detailsDiv.innerHTML = '<p>Please enter a valid prescription ID.</p>';
        return;
    }

    try {
        const prescription = await contract.methods.getPrescription(prescriptionId).call({ from: account });
        const details = `
            <p><strong>ID:</strong> ${prescription[0]}</p>
            <p><strong>Doctor:</strong> ${prescription[1].slice(0, 6)}...${prescription[1].slice(-4)}</p>
            <p><strong>Patient:</strong> ${prescription[2].slice(0, 6)}...${prescription[2].slice(-4)}</p>
            <p><strong>Medicines:</strong> ${prescription[3]}</p>
            <p><strong>Notes:</strong> ${prescription[4]}</p>
            <p><strong>Date:</strong> ${new Date(prescription[5] * 1000).toLocaleString()}</p>
            <p><strong>Expiry:</strong> ${new Date(prescription[6] * 1000).toLocaleString()}</p>
            <p><strong>Status:</strong> ${['Issued', 'Verified', 'Fulfilled', 'Expired', 'Modified'][prescription[7]]}</p>
            <p><strong>Pharmacy:</strong> ${prescription[8] === '0x0000000000000000000000000000000000000000' ? 'None' : prescription[8].slice(0, 6) + '...' + prescription[8].slice(-4)}</p>
            <p><strong>Emergency Access:</strong> ${prescription[9].length > 0 ? prescription[9].join(', ') : 'None'}</p>
            <p><strong>Prescription Hash:</strong> ${prescription[10]}</p>
        `;
        detailsDiv.innerHTML = details;
    } catch (error) {
        console.error('Error fetching prescription:', error);
        let errorMessage = 'Error fetching prescription: ';
        if (error.message.includes('Prescription does not exist')) {
            errorMessage += 'Prescription ID does not exist.';
        } else if (error.message.includes('Unauthorized access')) {
            errorMessage += 'You are not authorized to view this prescription.';
        } else {
            errorMessage += error.message;
        }
        detailsDiv.innerHTML = `<p>${errorMessage}</p>`;
    }
}

// Debounced version of displayPrescriptionDetails
const debouncedDisplayPrescriptionDetails = debounce(displayPrescriptionDetails, 300);

async function verifyPrescription() {
    toggleLoading(true);
    const prescriptionId = document.getElementById('verifyPrescriptionId').value;
    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        alert('Invalid prescription ID');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.verifyPrescription(prescriptionId).send({ from: account });
        await displayPrescriptionDetails();
        alert('Prescription verified successfully');
    } catch (error) {
        console.error('Error verifying prescription:', error);
        alert('Error verifying prescription: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function verifyPrescriptionHash() {
    toggleLoading(true);
    const prescriptionId = document.getElementById('verifyPrescriptionId').value;
    const hashInput = document.getElementById('prescriptionHashInput').value;

    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        alert('Invalid prescription ID');
        toggleLoading(false);
        return;
    }
    if (!hashInput || !/^0x[a-fA-F0-9]{64}$/.test(hashInput)) {
        alert('Invalid hash format');
        toggleLoading(false);
        return;
    }

    try {
        const isValid = await contract.methods.verifyPrescriptionHash(prescriptionId, hashInput).call({ from: account });
        document.getElementById('hashVerificationResult').innerHTML = `<p><strong>Verification Result:</strong> ${isValid ? 'Prescription is valid' : 'Invalid prescription'}</p>`;
    } catch (error) {
        console.error('Error verifying prescription hash:', error);
        alert('Error verifying prescription hash: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function fulfillPrescription() {
    toggleLoading(true);
    const prescriptionId = document.getElementById('verifyPrescriptionId').value;
    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        alert('Invalid prescription ID');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.fulfillPrescription(prescriptionId).send({ from: account });
        await displayPrescriptionDetails();
        alert('Prescription fulfilled successfully');
    } catch (error) {
        console.error('Error fulfilling prescription:', error);
        alert('Error fulfilling prescription: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function markExpired() {
    toggleLoading(true);
    const prescriptionId = document.getElementById('verifyPrescriptionId').value;
    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        alert('Invalid prescription ID');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.markExpired(prescriptionId).send({ from: account });
        await displayPrescriptionDetails();
        alert('Prescription marked as expired');
    } catch (error) {
        console.error('Error marking prescription as expired:', error);
        alert('Error marking prescription as expired: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function emergencyAccessPrescription() {
    toggleLoading(true);
    const prescriptionId = document.getElementById('emergencyPrescriptionId').value;
    if (!prescriptionId || isNaN(prescriptionId) || prescriptionId <= 0) {
        alert('Invalid prescription ID');
        toggleLoading(false);
        return;
    }
    try {
        await contract.methods.emergencyAccessPrescription(prescriptionId).send({ from: account });
        const prescription = await contract.methods.getPrescription(prescriptionId).call({ from: account });
        const details = `
            <p><strong>ID:</strong> ${prescription[0]}</p>
            <p><strong>Doctor:</strong> ${prescription[1].slice(0, 6)}...${prescription[1].slice(-4)}</p>
            <p><strong>Patient:</strong> ${prescription[2].slice(0, 6)}...${prescription[2].slice(-4)}</p>
            <p><strong>Medicines:</strong> ${prescription[3]}</p>
            <p><strong>Notes:</strong> ${prescription[4]}</p>
            <p><strong>Date:</strong> ${new Date(prescription[5] * 1000).toLocaleString()}</p>
            <p><strong>Expiry:</strong> ${new Date(prescription[6] * 1000).toLocaleString()}</p>
            <p><strong>Status:</strong> ${['Issued', 'Verified', 'Fulfilled', 'Expired', 'Modified'][prescription[7]]}</p>
            <p><strong>Prescription Hash:</strong> ${prescription[10]}</p>
        `;
        document.getElementById('emergencyDetails').innerHTML = details;
        alert('Emergency access granted');
    } catch (error) {
        console.error('Error accessing prescription:', error);
        alert('Error accessing prescription: ' + error.message);
    } finally {
        toggleLoading(false);
    }
}

async function viewPrescriptions() {
    toggleLoading(true);
    try {
        if (!account) {
            throw new Error('Wallet not connected. Please connect your wallet.');
        }
        console.log('Fetching prescriptions for account:', account);
        const prescriptionIds = await contract.methods.getPatientPrescriptions(account).call({ from: account });
        console.log('Prescription IDs:', prescriptionIds);
        let output = '';
        if (prescriptionIds.length === 0) {
            output = '<p>No prescriptions found for this account.</p>';
        } else {
            for (let id of prescriptionIds) {
                const prescription = await contract.methods.getPrescription(id).call({ from: account });
                output += `
                    <div class="prescription-item border-b border-gray-200 py-4">
                        <p><strong>Prescription ID:</strong> ${prescription[0]}</p>
                        <p><strong>Medicines:</strong> ${prescription[3]}</p>
                        <p><strong>Notes:</strong> ${prescription[4]}</p>
                        <p><strong>Date:</strong> ${new Date(prescription[5] * 1000).toLocaleString()}</p>
                        <p><strong>Expiry:</strong> ${new Date(prescription[6] * 1000).toLocaleString()}</p>
                        <p><strong>Status:</strong> ${['Issued', 'Verified', 'Fulfilled', 'Expired', 'Modified'][prescription[7]]}</p>
                        <p><strong>Prescription Hash:</strong> ${prescription[10]}</p>
                    </div>
                `;
            }
        }
        document.getElementById('patientPrescriptions').innerHTML = output;
    } catch (error) {
        console.error('Error viewing prescriptions:', error);
        let errorMessage = 'Error viewing prescriptions: ';
        if (error.message.includes('Unauthorized access')) {
            errorMessage += 'You are not authorized to view these prescriptions. Ensure you are using the correct patient wallet.';
        } else if (error.message.includes('Wallet not connected')) {
            errorMessage += 'Please connect your wallet.';
        } else {
            errorMessage += error.message;
        }
        document.getElementById('patientPrescriptions').innerHTML = `<p>${errorMessage}</p>`;
        alert(errorMessage);
    } finally {
        toggleLoading(false);
    }
}