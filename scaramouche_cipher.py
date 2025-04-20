from Crypto.Util.number import inverse, bytes_to_long, long_to_bytes

# RSA-512 Key Setup
p = 100392089237316158323570985008687907853269981005640569039457584007913129640081
q = 90392089237316158323570985008687907853269981005640569039457584007913129640041
e = 65537

# Compute N and d
N = p * q
phi = (p - 1) * (q - 1)
d = inverse(e, phi)

# Encrypt the message
message = "Scaramouche, Scaramouche, will you do the Fandango? 💃🏽"
message_bytes = message.encode('utf-8')
m = bytes_to_long(message_bytes)
ciphertext = pow(m, e, N)

# Decrypt the ciphertext
decrypted = long_to_bytes(pow(ciphertext, d, N)).decode('utf-8')

# Show results
print("🔹 N =", N)
print("🔹 d =", d)
print("🔹 Ciphertext (hex):", hex(ciphertext)[2:])
print("🔹 Decrypted message:", decrypted)
