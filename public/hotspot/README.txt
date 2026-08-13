GRIYA ARCA KOST - Halaman Hotspot MikroTik
======================================

Isi folder:
  login.html     - halaman login (username + password)
  alogin.html    - halaman setelah berhasil login
  status.html    - status koneksi + tombol logout
  logout.html    - halaman setelah logout
  error.html     - halaman error
  rlogin.html    - auto-login by MAC (bawaan MikroTik)
  redirect.html  - halaman pengalih (bawaan MikroTik)
  faq.html       - FAQ + SOP penggunaan internet kost (accordion)
  style.css      - tema tampilan (gelap & terang)
  theme.js       - logika tombol tema terang/gelap (dipakai semua halaman)
  img/           - gambar latar (suasana kost & alam Purwokerto)
  IPHONE-COMPAT.md - panduan kompatibilitas Safari iOS (iPhone 8..terbaru)

CARA UPLOAD KE ROUTER
1. Buka Winbox -> Files.
2. Backup dulu folder "hotspot" bawaan router (drag ke komputer).
3. Drag semua file di folder ini ke dalam folder "hotspot" di router,
   termasuk folder "img". Timpa file yang sama namanya.
4. PENTING: jangan hapus file md5.js bawaan MikroTik di folder hotspot,
   file itu dipakai untuk login CHAP. Paket ini juga menyertakan md5.js
   cadangan (dipakai hanya bila milik router gagal dimuat); aman ditimpa
   maupun didampingkan.
5. Bisa juga upload via FTP: ftp://IP-ROUTER  (user admin), masuk ke /hotspot.

AGAR HALAMAN & GAMBAR TAMPIL SEBELUM LOGIN
  IP > Hotspot > Walled Garden, tidak perlu diatur untuk file lokal.
  Semua gambar sudah lokal (folder img), jadi tetap tampil tanpa internet.

MENGGANTI NOMOR WHATSAPP ADMIN
  Cari teks 6285888440751 dan +62 858-8844-0751 di semua file .html, ganti.

MENGGANTI GAMBAR LATAR
  Timpa img/bg-login.jpg (halaman login) dan img/bg-nature.jpg (halaman lain)
  dengan foto sendiri. Ukuran disarankan 768x1344 px, di bawah 150 KB.

MENGGANTI ATURAN DI FAQ/SOP
  Edit faq.html memakai teks editor biasa (Notepad++/VS Code). Setiap item
  FAQ/SOP memakai <details><summary>..</summary>..</details> (buka-tutup).

TEMA TERANG/GELAP
  Tombol bulan/matahari di pojok kanan atas mengganti tema. Pilihan tersimpan
  otomatis di perangkat pengguna (localStorage). Tidak perlu konfigurasi.

IPHONE TIDAK MAU REDIRECT
  Tekan tombol "Buka Browser" di halaman sukses. Detail lengkap lihat
  IPHONE-COMPAT.md.
