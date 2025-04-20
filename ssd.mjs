#!/usr/bin/env node
import crypto from 'crypto';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

// ✅ Fixed 32-byte key and 16-byte IV
const FIXED_KEY = 'thisisa_32_byte_long_key_I_think'; // 32 bytes
const FIXED_IV  = 'dog1234567890123';                // 16 bytes

// 🔐 Display the key and IV info
console.log("🔑 Fixed 32-byte Key: ", FIXED_KEY);
console.log("🔐 Fixed 16-byte IV:  ", FIXED_IV);
console.log("——————————————");

(async () => {
  const mode = await ask("Encrypt or Decrypt? (-e / -d): ");
  const input = await ask(mode === "-e" ? "Enter message to encrypt: " : "Enter hex to decrypt: ");

  rl.close();

  const keyBuffer = Buffer.from(FIXED_KEY, 'utf8');
  const ivBuffer = Buffer.from(FIXED_IV, 'utf8');

  try {
    if (mode === '-e') {
      const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, ivBuffer);
      let encrypted = cipher.update(input, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      console.log("\n🔒 Encrypted HEX:\n", encrypted);
    } else if (mode === '-d') {
      const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, ivBuffer);
      let decrypted = decipher.update(input, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      console.log("\n🔓 Decrypted Message:\n", decrypted);
    } else {
      console.error("❌ Invalid mode. Use -e for encrypt or -d for decrypt.");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
})();
