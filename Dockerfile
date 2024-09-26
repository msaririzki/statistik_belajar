# Gunakan image Node.js resmi
FROM node:18

# Set direktori kerja
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin sisa file aplikasi
COPY . .


# Expose port yang digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
