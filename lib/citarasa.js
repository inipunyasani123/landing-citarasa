/* ==========================================================================
   CitaRasa Digital — jasa digitalisasi untuk rumah makan yang sudah berdiri
   puluhan tahun. Satu sumber isi untuk beranda dan halaman studi kasus.
   Semua nama warung, angka, dan harga adalah contoh untuk purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-citarasa.pintuweb.id';

export const MASALAH = [
  ['Menu cetak yang tak terbaca di ponsel', 'Pelanggan memotret menu di dinding, lalu memperbesarnya sampai buram.'],
  ['Foto menu dari tahun 2009', 'Porsinya sudah berubah, piringnya sudah ganti, tapi fotonya masih sama.'],
  ['Alamat yang salah di peta', 'Titiknya menunjuk ke gang sebelah, dan jam bukanya masih jam lama.'],
  ['Telepon yang tak terjawab jam sibuk', 'Pesanan antar hilang tepat saat dapur paling ramai.'],
];

export const LAYANAN = [
  { no: '01', judul: 'Menu digital', isi: 'Menu yang sama dengan papan di dinding, dibuka lewat kode QR di meja. Harga bisa diubah sendiri tanpa cetak ulang.', mulai: 'Rp 750.000' },
  { no: '02', judul: 'Foto menu ulang', isi: 'Satu hari pemotretan di dapur Anda sendiri, dengan piring dan porsi yang benar-benar disajikan hari ini.', mulai: 'Rp 1.500.000' },
  { no: '03', judul: 'Profil peta & ulasan', isi: 'Titik lokasi, jam buka, dan foto dirapikan. Kami ajarkan cara membalas ulasan tanpa terpancing.', mulai: 'Rp 500.000' },
  { no: '04', judul: 'Pesan lewat WhatsApp', isi: 'Format pesanan baku dan balasan siap pakai, supaya kasir tidak perlu mengetik ulang alamat yang sama.', mulai: 'Rp 600.000' },
];

export const PROSES = [
  ['Audit menu gratis', 'Kirim foto menu Anda. Dalam tiga hari kerja kami kembalikan satu halaman catatan.'],
  ['Kunjungan & pemotretan', 'Satu hari di rumah makan Anda, di luar jam sibuk.'],
  ['Menu digital tayang', 'QR dipasang di meja, peta dan WhatsApp disambungkan.'],
  ['Pelatihan kasir', 'Dua jam untuk kasir dan pemilik, lalu pendampingan satu bulan.'],
];

export const KASUS = [
  {
    slug: 'bakmi-lie-hwa',
    nama: 'Bakmi Lie Hwa',
    sejak: 1979,
    kota: 'Semarang',
    generasi: 'Generasi kedua',
    ringkas: 'Antrean panjang di jam makan siang, tapi pesanan antar nyaris nol.',
    cerita: [
      'Bakmi Lie Hwa dibuka oleh Pak Lie di serambi rumahnya pada 1979. Kini dijalankan anaknya, dengan resep yang tidak berubah dan papan menu kayu yang ditulis tangan.',
      'Masalahnya bukan rasa. Pelanggan kantor di sekitar warung ingin memesan untuk diantar, tetapi satu-satunya nomor telepon selalu sibuk antara pukul 11.30 dan 13.00.',
    ],
    dikerjakan: ['Menu digital dengan QR di setiap meja', 'Format pesanan WhatsApp untuk kantor sekitar', 'Foto ulang 14 menu dengan mangkuk yang dipakai sekarang'],
    angka: [['Pesanan antar per minggu', '6', '41'], ['Telepon tak terjawab jam makan siang', '±20', '3']],
    kutipan: 'Papan kayunya tetap di dinding. Sekarang papan itu juga ada di ponsel orang.',
    pemilik: 'Pengelola generasi kedua',
  },
  {
    slug: 'nasi-rawit-mbok-sarni',
    nama: 'Warung Nasi Rawit Mbok Sarni',
    sejak: 1986,
    kota: 'Yogyakarta',
    generasi: 'Pendiri masih memasak',
    ringkas: 'Terkenal di kalangan pelanggan lama, hampir tak terlihat di peta.',
    cerita: [
      'Mbok Sarni masih memasak sendiri setiap pagi. Warungnya berada di ujung gang, dan titik lokasinya di peta menunjuk ke rumah tetangga — pelanggan baru sering tersesat lalu pulang.',
      'Foto yang beredar di internet diunggah pelanggan bertahun-tahun lalu, dengan menu yang sebagian sudah tidak dijual.',
    ],
    dikerjakan: ['Titik peta dan jam buka diperbaiki', 'Sembilan foto menu baru, dipotret di warung', 'Kartu kecil berisi QR ulasan untuk pelanggan tetap'],
    angka: [['Ulasan baru per bulan', '2', '19'], ['Pelanggan yang tersesat (laporan cucu)', 'sering', 'jarang']],
    kutipan: 'Cucu saya yang pegang ponselnya. Saya tetap pegang wajan.',
    pemilik: 'Pendiri',
  },
  {
    slug: 'pondok-lombok-ijo',
    nama: 'RM Pondok Lombok Ijo',
    sejak: 1991,
    kota: 'Bandung',
    generasi: 'Dikelola keluarga',
    ringkas: 'Menu cetak 6 halaman yang harganya dicoret dengan pulpen.',
    cerita: [
      'Setiap kali harga cabai naik, harga di menu dicoret dengan pulpen. Setelah tiga tahun, menu enam halaman itu penuh coretan dan pelanggan sering salah membaca.',
      'Pemilik ragu beralih ke menu digital karena takut pelanggan lama kesulitan. Kami sepakat: menu kertas tetap ada, tetapi dicetak ulang dari sumber yang sama dengan menu digital.',
    ],
    dikerjakan: ['Satu sumber menu untuk versi QR dan versi cetak', 'Perubahan harga lewat ponsel, cetak ulang bila perlu', 'Pelatihan dua kasir dan pemilik'],
    angka: [['Waktu mengubah satu harga', '1 minggu (cetak)', '5 menit'], ['Keluhan salah baca harga', 'mingguan', 'hampir tidak ada']],
    kutipan: 'Pelanggan lama tetap dapat menu kertas. Bedanya, sekarang tidak ada coretan.',
    pemilik: 'Pengelola keluarga',
  },
];

export const FAQ = [
  { t: 'Rumah makan saya belum punya ponsel pintar. Bisa?', j: 'Bisa. Menu digital dan profil peta tetap bisa dikelola lewat ponsel anggota keluarga atau karyawan, dan kami latih siapa pun yang Anda tunjuk.' },
  { t: 'Apakah menu kertas harus dibuang?', j: 'Tidak. Banyak pelanggan lama lebih suka menu kertas. Kami buat satu sumber menu yang bisa dicetak kapan saja dan tampil sama di ponsel.' },
  { t: 'Apa isi audit menu gratis?', j: 'Satu halaman catatan: menu mana yang sebaiknya ditonjolkan, cara menulis harga yang lebih mudah dibaca, foto yang perlu diganti, dan salah ketik bila ada.' },
  { t: 'Berapa lama sampai menu digital tayang?', j: 'Biasanya dua minggu sejak kunjungan pertama, termasuk pemotretan. Profil peta bisa beres dalam tiga hari.' },
  { t: 'Apakah ada biaya bulanan?', j: 'Tidak ada biaya bulanan untuk menu digital. Anda hanya membayar sekali; perubahan harga dan menu bisa dilakukan sendiri.' },
];

export const kasusBySlug = (s) => KASUS.find((k) => k.slug === s);
