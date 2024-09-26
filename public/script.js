// Data statistik belajar
const ctx = document.getElementById('statistikChart').getContext('2d');
const statistikChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Juni', 'Juli', 'Agustus', 'Minggu 1 (Sep)', 'Minggu 2 (Sep)', 'Minggu 3 (Sep)'],
    datasets: [{
      label: 'Persentase Belajar',
      data: [80, 85, 90, 88, 75, 60],
      borderColor: '#e67e22',
      backgroundColor: 'rgba(230, 126, 34, 0.1)',
      borderWidth: 2,
      tension: 0.3,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#fff'
        }
      },
      x: {
        ticks: {
          color: '#fff'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    }
  }
});

// Menampilkan notifikasi pop-up jika ada penurunan belajar
const dataMinggu = [88, 75, 60];
function cekAnomali() {
  let penurunan = true;
  for (let i = 1; i < dataMinggu.length; i++) {
    if (dataMinggu[i] >= dataMinggu[i - 1]) {
      penurunan = false;
      break;
    }
  }
  if (penurunan) {
    document.getElementById('popup').style.display = 'block';
  }
}

window.onload = cekAnomali;

// Menutup pop-up saat tombol "Tutup" ditekan
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});
