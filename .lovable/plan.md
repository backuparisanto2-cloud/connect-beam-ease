# Preload Gambar WebP Semua Halaman

Tujuan: halaman hotspot terasa instan saat berpindah (login → status/logout/faq) tanpa membuat halaman pertama jadi berat.

## Yang dilakukan

1. Selesaikan dulu pekerjaan berjalan: bangun ulang `griya-arca-hotspot.zip` dan verifikasi tampilan malam (bulan + bintang bergerak).
2. Strategi pemuatan gambar bertingkat di semua halaman (`login`, `alogin`, `rlogin`, `status`, `logout`, `faq`, `error`, `redirect`):
   - **Preload prioritas tinggi**: hanya 1 gambar latar WebP yang benar-benar dipakai halaman itu sesuai tema jam WIB (sudah ada, dipertahankan).
   - **Prefetch prioritas rendah setelah halaman selesai dimuat**: sisa gambar latar WebP (`bg-morning1..3`, `bg-night1..3`) diminta di latar belakang, jadi halaman berikutnya dan pergantian tema tampil tanpa jeda. Dijalankan pada event `load` + `requestIdleCallback` supaya tidak menyaingi konten utama.
   - Favicon dan `logo.svg` sudah ringan, tetap seperti sekarang.
3. Semua latar sudah berformat WebP; tidak ada JPG/PNG besar yang perlu dikonversi. Total 6 latar ≈ 218 KB, aman di-cache lokal router.

## Catatan teknis

- Tambah skrip kecil bersama (`preload.js`, ±10 baris) yang di-`<script defer src>` semua halaman, isinya membuat `<link rel="prefetch" as="image">` untuk daftar latar yang belum dipakai.
- Skrip berjalan setelah `load`, jadi tidak menambah waktu render awal.
- Skrip inline di `<head>` tetap hanya memuat 1 latar aktif (`fetchpriority=high`) agar first paint tetap cepat.
- Bangun ulang ZIP hotspot lewat `scripts/zip-hotspot.mjs` dan cek jaringan/urutan permintaan dengan Playwright.
