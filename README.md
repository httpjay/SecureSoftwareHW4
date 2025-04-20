# SecureSoftwareHW4


# 🔐 AES-256-CBC Encrypt/Decrypt Tool

Encrypt or decrypt messages using AES-256-CBC directly from the terminal.

Works on **macOS**, **Windows**, and **VS Code** — no extra setup needed!

---

## 🛠 Requirements

- Node.js installed

### 👉 To check:
```bash
node -v

If it shows a version, you're good.

If not:

- Mac users: `brew install node`
- Windows users: Download from [https://nodejs.org](https://nodejs.org)

---

## 🚀 How to Run

1. Download the file `ssd.js`

2. Open your terminal in that folder

### 💻 Mac / Linux:
```bash
chmod +x ssd.js
./ssd.js
```

### 🪟 Windows:
```cmd
node ssd.js
```

That’s it! You’ll see:

```
🔑 Fixed 32-byte Key:  thisisa_32_byte_long_key_I_think
🔐 Fixed 16-byte IV:   dog1234567890123
——————————————
Encrypt or Decrypt? (-e / -d):
```

---

## ✅ Example

### Encrypt:
```
Encrypt or Decrypt? (-e / -d): -e
Enter message to encrypt: Hello World
```

👉 You’ll get encrypted HEX output.

### Decrypt:
```
Encrypt or Decrypt? (-e / -d): -d
Enter hex to decrypt: <paste your hex>
```

👉 You’ll get your original message back.

---

## 🔧 Key & IV Info

- Fixed Key (32 bytes): `thisisa_32_byte_long_key_I_think`
- Fixed IV  (16 bytes): `dog1234567890123`

You can change these inside `ssd.js` if needed.

---

## 🙌 Author

**Jay A Panchal & Jil P Makwana**  
MSCS @ Loyola Marymount University  

