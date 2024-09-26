# Menggunakan Node.js versi resmi
FROM node:18

# Membuat direktori aplikasi
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Menyalin semua file proyek ke dalam image Docker
COPY . .

# Mengekspos port 3000
EXPOSE 3000

# Menjalankan aplikasi
CMD [ "node", "index.js" ]
