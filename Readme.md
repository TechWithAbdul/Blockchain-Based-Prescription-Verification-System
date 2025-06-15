# Blockchain-Based Prescription Verification System

## 📌 Overview

This project is a **decentralized web application (DApp)** designed to securely verify medical prescriptions using **blockchain technology**. By eliminating intermediaries and central databases, this system ensures **transparency**, **data integrity**, and **tamper-proof prescription flow** between medical actors.

---

## 👥 Roles Involved

This system requires the cooperation of the following user roles:

1. **Doctor**
   - Creates and uploads digital prescriptions.
   - Prescription is hashed and stored on the blockchain.

2. **Patient**
   - Views their prescriptions.
   - Receives a unique prescription hash from the doctor.

3. **Pharmacy**
   - Verifies prescriptions using blockchain hash.
   - Dispenses medicines only if the hash matches.

4. **Admin**
   - Registers users like doctors and pharmacies (if implemented).
   - Monitors role authenticity.

5. **Emergency Personnel**
   - Accesses critical medical info during emergencies (optional module).

---

## 🔐 How It Works

### 🧠 Core Logic: Prescription Verification using Blockchain

- Doctors create a prescription via a form.
- The prescription is converted into a **SHA-256 hash**.
- This hash is **stored on the blockchain** using a **Solidity smart contract**.
- The patient receives a **prescription hash**, either digitally or manually.
- When a pharmacy receives the hash from a patient, they **verify** it against the hash stored on the blockchain.
- If it matches, the prescription is authentic and the medicine is dispensed.

This system eliminates the risk of:
- Fake prescriptions
- Data manipulation
- Centralized system failure

---

## 💡 Technologies Used

| Tech            | Purpose                                  |
|------------------|-------------------------------------------|
| **HTML/CSS**      | Frontend layout and styling              |
| **JavaScript**    | User interaction, hashing logic, blockchain connection |
| **Solidity**      | Smart contract logic for storing/verifying hashes |
| **Ethereum/Web3** | Blockchain interaction (e.g., via MetaMask) |
| **Metamask**      | Wallet for connecting and signing transactions |
| **Ganache/Testnet** | Local blockchain testing environment (if used) |

---

## 🛠️ Project Structure

📁 project-root/
│
├── index.html           # Home page
├── doctor.html          # Prescription upload (by doctor)
├── patient.html         # View prescriptions
├── pharmacy.html        # Verify prescription hash
├── admin.html           # Role registration (optional)
├── emergency.html       # Emergency personnel portal
│
├── style.css            # Common styling file
├── contract.sol         # Solidity smart contract
└── script.js            # JavaScript for interacting with contract

# 🔗 Smart Contract (Solidity)
The smart contract includes functions like:

1-storePrescriptionHash(prescriptionHash)

2-verifyPrescriptionHash(prescriptionHash)

Hashes are stored on-chain using Ethereum addresses as keys (e.g., msg.sender).

Written in Solidity v0.8.x and can be deployed on testnets like Sepolia.

# ⚙️ How to Run 
Install MetaMask

Chrome Extension: https://metamask.io/

Create or import a wallet.

Connect to Ethereum testnet or local Ganache.

Deploy the Smart Contract

Use Remix IDE: https://remix.ethereum.org

Paste your contract.sol

Compile and deploy using "Injected Web3" (MetaMask)

Run the Web App

Open index.html or other role-based HTML files directly in a browser.

Ensure your script connects to the deployed contract using Web3.js or Ethers.js.

# Testing Flow

Admin Allows the doctor and pharmacy to access for login.

Login as doctor, create a prescription → hash it → store on blockchain.

Switch to patient view to copy the hash.

Login as pharmacy, input hash to verify on-chain.

# ✅ Features
✔️ Decentralized and tamper-proof

✔️ Minimal user interface

✔️ No central database required

✔️ Works entirely on the Ethereum blockchain

✔️ Can be extended for real-world use with database and login systems

# 📄 License
MIT License

# Author
Developed by Abdulrehman,WafaAbbas,AbdulAhad
RCET, UET Lahore Campus
GitHub: TechWithAbdul

