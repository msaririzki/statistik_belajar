# Gunakan gambar Node.js resmi sebagai base image
FROM node:18

# Set direktori kerja di dalam kontainer
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json ke dalam kontainer
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file aplikasi dan folder ke dalam kontainer
COPY . .

# Ekspos port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
