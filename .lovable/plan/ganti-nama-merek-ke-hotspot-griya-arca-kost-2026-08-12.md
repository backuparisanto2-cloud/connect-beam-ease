# Ganti Nama Merek ke "Hotspot Griya Arca Kost"

Mengganti seluruh penyebutan "Gracie Kost" menjadi "Griya Arca Kost" di aplikasi web maupun paket halaman hotspot MikroTik.

## Yang diubah

**Situs (React)**
- Judul, deskripsi, dan meta OG/Twitter di halaman utama, Pratinjau, Manifest, Export, dan root.
- Label merek "Gracie Kost — Purwokerto" di header tiap halaman.
- Teks aria-label/judul pada komponen logo.

**Paket hotspot (public/hotspot)**
- Judul halaman dan nama merek di login, alogin, status, logout, error, redirect, rlogin, faq.
- Teks di README.txt, IPHONE-COMPAT.md, komentar style.css dan theme.js.

**Nama berkas paket**
- `gracie-hotspot.zip` / `gracie-hotspot.json` menjadi `griya-arca-hotspot.zip` / `griya-arca-hotspot.json`, termasuk skrip pengemas, manifest, dan tautan unduhan.
- Kunci penyimpanan tema `gracie-theme` menjadi `griya-arca-theme` (perangkat pengguna cukup memilih tema sekali lagi).

## Yang tidak diubah
- Logo (gambar rumah kembar) tetap sama, hanya teksnya yang berganti.
- Nomor WhatsApp admin dan seluruh isi aturan FAQ/SOP tetap.
- Struktur halaman, warna, dan tata letak tidak berubah.

## Catatan teknis
- Penggantian dilakukan lewat pencarian teks pada seluruh berkas yang mengandung "Gracie"/"gracie" (18 berkas), lalu berkas ZIP dibangun ulang dengan `scripts/zip-hotspot.mjs`.
- `src/data/hotspot-manifest.json` dan `public/downloads/manifest.json` disinkronkan dengan nama arsip baru.
