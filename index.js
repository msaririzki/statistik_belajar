const express = require('express');
const app = express();
const port = 3000;

// Menyajikan file statis dari folder 'public'
app.use(express.static('public'));

// Memulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
