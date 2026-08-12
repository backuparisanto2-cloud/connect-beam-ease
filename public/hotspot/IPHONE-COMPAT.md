# Panduan Kompatibilitas iPhone — Griya Arca Kost Hotspot

Halaman hotspot Griya Arca Kost dirancang agar tampil benar di Safari iOS
pada semua ukuran layar iPhone (iPhone 8 sampai iPhone 15 Pro Max dan terbaru).
Panduan ini menjelaskan poin-poin penting yang sudah diterapkan serta tips
untuk pengguna.

## Yang sudah diterapkan pada file

- **`viewport-fit=cover`** di setiap halaman — kontent mengikuti notch/Dynamic
  Island dan area aman layar.
- **`env(safe-area-inset-*)`** — tombol tema, tombol WhatsApp, dan konten
  tidak tertutup notch atau home indicator.
- **Font input `16px`** — mencegah Safari melakukan zoom otomatis saat
  mengetik username/password.
- **`apple-mobile-web-app-capable=yes`** — bisa ditambahkan ke layar utama
  sebagai web app.
- **Tombol "Buka Browser"** di `alogin.html` dan `redirect.html` — mengakali
  iPhone yang tidak mau redirect otomatis dari captive portal.
- **Tema terang/gelap** dengan `localStorage` — pilihan tema tersimpan dan
  konsisten di semua halaman, nyaman di segala pencahayaan.

## Masalah umum: iPhone tidak mau redirect

Beberapa iPhone menahan redirect otomatis setelah login captive portal.
Halaman hanya berhenti di layar "Berhasil Login" tanpa lanjut ke internet.

**Solusi:**
1. Pada halaman "Berhasil Login", tekan tombol **Buka Browser**.
   Tombol ini membuka `http://neverssl.com` — URL HTTP tanpa SSL yang
   memaksa Safari membuka halaman dan menyelesaikan koneksi captive portal.
2. Jika tetap tidak lanjut, tutup semua tab Safari, buka Safari baru lalu
   ketik `http://neverssl.com` di address bar.
3. Matikan sementara **Private Relay** (Pengaturan → Apple ID → iCloud →
   Private Relay) jika aktif — dapat mengganggu captive portal.

## Tips Safari iOS

- **Alamat Wi-Fi Privat** (Private Wi-Fi Address): bila login terus gagal
  padahal kredensial benar, matikan fitur ini untuk jaringan Griya Arca Kost:
  Pengaturan → Wi-Fi → ketuk (i) di samping Griya Arca Kost → matikan
  "Alamat Wi-Fi Privat".
- **Private Relay / VPN**: matikan dulu saat pertama kali login, nyalakan
  kembali setelah internet aktif.
- **Zoom**: jangan pinch-zoom; halaman sengaja dibuat tanpa zoom agar
  tombol besar dan tidak geser. Ukuran font input 16px sudah aman.
- **AutoFill**: Safari dapat mengingat username/password Griya Arca Kost.
  Izinkan saat diminta agar login berikutnya cepat.

## Pengecekan layar berbeda

Sudah diuji otomatis pada tiga ukuran iPhone:

| Model          | Viewport   | Hasil                          |
|----------------|------------|--------------------------------|
| iPhone 8       | 375 × 667  | Layout pas, tombol tidak tertutup |
| iPhone 12      | 390 × 844  | Notch aman via safe-area       |
| iPhone 15 Pro Max | 430 × 932 | Dynamic Island aman, tema rapi |

Catatan: file HTML memakai variabel MikroTik seperti `$(link-redirect)`,
`$(username)`, `$(error)`. Saat diuji di server biasa (di luar MikroTik)
variabel tampil apa adanya — ini normal dan akan terisi otomatis di router.

## Pemakaian di luar iOS

Halaman sama-sama berjalan baik di Android, Windows, dan macOS karena
menggunakan web standar (HTML5 + CSS). Safe-area hanya berdampak di iOS;
di perangkat lain nilainya nol sehingga tampilan tetap normal.
