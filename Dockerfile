# Gunakan image Node.js
FROM node:18

# Set direktori kerja
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh aplikasi
COPY . .

# Jalankan aplikasi
CMD ["npm", "start"]
