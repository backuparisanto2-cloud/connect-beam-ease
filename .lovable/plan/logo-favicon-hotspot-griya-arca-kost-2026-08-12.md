# Logo & Favicon "Hotspot Griya Arca Kost"

## Tujuan
Logo di semua halaman menampilkan nama lengkap "Hotspot Griya Arca Kost", dan favicon memakai lambang yang sama.

## Yang akan dikerjakan

1. **Logo jadi lockup ikon + teks**
   - `BrandLogo` diperluas: ikon rumah kembar (tetap seperti sekarang) di kiri, teks dua baris di kanan — "HOTSPOT" kecil di atas, "GRIYA ARCA KOST" tebal di bawah.
   - Teks memakai warna `currentColor` supaya tetap ikut tema terang/gelap.
   - Tersedia mode ikon-saja untuk ruang sempit (mis. favicon/splash), tapi default di header memakai versi bernama.

2. **Header semua halaman**
   - Halaman `/`, `/preview`, `/manifest`, `/export` memakai komponen yang sama, jadi otomatis ikut berubah. Judul teks duplikat di samping logo dirapikan agar nama tidak tampil dua kali.

3. **Paket hotspot MikroTik** (`public/hotspot/*.html`)
   - SVG inline di login, alogin, rlogin, status, logout, error, redirect, faq diganti dengan lockup bernama yang sama; splash tetap ikon + nama.
   - Sedikit penyesuaian di `style.css` untuk ukuran lockup.
   - ZIP unduhan (`griya-arca-hotspot.zip`) dibangun ulang lewat `scripts/zip-hotspot.mjs`.

4. **Favicon**
   - `public/favicon.svg` baru dari lambang rumah kembar (ikon saja, agar terbaca di 16–32 px) plus `public/favicon.png` 64x64.
   - Referensi ikon di `src/routes/__root.tsx` diarahkan ke file baru.

## Catatan teknis
- Logo tetap SVG murni (tanpa gambar bitmap) supaya tajam dan mengikuti tema.
- Nama file ZIP dan manifest tidak berubah.
