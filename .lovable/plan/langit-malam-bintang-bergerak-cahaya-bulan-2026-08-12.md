# Langit Malam: Bintang Bergerak + Cahaya Bulan

Menambah suasana malam pada halaman hotspot (mode gelap saja), melengkapi animasi kunang-kunang yang sudah ada.

## Yang ditambahkan

- Bulan purnama di sudut atas langit dengan cahaya lembut (halo/glow) yang berdenyut sangat pelan, plus sedikit pantulan cahaya di area langit sekitarnya.
- Bintang-bintang di langit: sekitar 30 titik kecil dengan ukuran dan kecerahan berbeda, berkelip halus dan bergeser perlahan melintasi langit (rotasi lambat ~150–240 detik) sehingga terasa hidup tanpa mengganggu.
- Beberapa bintang lebih besar mendapat kilau silang tipis.
- Semua hanya muncul di mode gelap; di mode terang tetap burung sawah dan tidak ada elemen malam.

## Catatan teknis

- Murni CSS + elemen kosong di dalam lapisan `.fx` yang sudah ada, tanpa JavaScript, agar tetap ringan di MikroTik hotspot.
- `public/hotspot/style.css`: tambah keyframes `starDrift`, `starTwinkle`, `moonGlow`; kelas `.star`, `.starfield`, `.moon` dengan aturan tampil hanya saat `html:not([data-theme="light"])`, dan disembunyikan pada `prefers-reduced-motion` (bintang tetap tampil statis, hanya animasi dimatikan).
- `login.html`, `alogin.html`, `rlogin.html`: tambah `<div class="starfield">` berisi titik bintang dan `<i class="moon">` di dalam `.fx`. Halaman lain (status/logout/faq/error/redirect) ikut jika memakai `.fx`; jika belum, ditambahkan agar konsisten.
- Elemen berada di bawah kartu login (z-index lapisan `.fx` tidak berubah) dan `aria-hidden`.
- Bangun ulang `griya-arca-hotspot.zip` lewat `scripts/zip-hotspot.mjs`, lalu verifikasi tampilan malam dengan screenshot.
