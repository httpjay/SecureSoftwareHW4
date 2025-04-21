import hashlib

# The input phrase (in Ukrainian)
phrase = "Російський військовий корабель, іди нахуй"

# Encode the phrase in UTF-8 and compute the SHA-384 hash
sha384_digest = hashlib.sha384(phrase.encode('utf-8')).hexdigest()

print("SHA-384 digest:", sha384_digest)