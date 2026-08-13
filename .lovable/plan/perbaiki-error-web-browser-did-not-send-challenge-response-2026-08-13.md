# Perbaiki Error "web browser did not send challenge response"

Pesan itu muncul saat MikroTik memakai mode CHAP tetapi halaman mengirim password apa adanya (tidak di-hash dengan challenge). Di paket hotspot ini ada dua sumber masalah.

## Penyebab

1. `rlogin.html` (login otomatis via MAC) langsung mengirim `username`/`password` berisi MAC dalam bentuk teks biasa, tanpa hashing MD5, padahal saat `chap-id` aktif MikroTik menolak dan mengalihkan ke halaman login dengan error tersebut. Ini persis yang terlihat di tangkapan layar (kolom username sudah terisi MAC).
2. `login.html` hanya memuat `/md5.js` lalu memanggil `hexMD5(...)`. Jika file itu gagal dimuat atau JavaScript dieksekusi sebelum siap, submit tetap jalan dengan password polos dan menghasilkan error yang sama.

## Perbaikan

- `rlogin.html`: muat `/md5.js` saat `chap-id` ada, dan hash password MAC dengan `hexMD5(chap-id + password + chap-challenge)` sebelum form disubmit (submit dipindah ke fungsi, bukan langsung).
- `login.html`: buat `doLogin()` aman — kalau `hexMD5` belum tersedia, tampilkan pesan agar pengguna mencoba lagi/aktifkan JavaScript, dan hentikan submit supaya tidak mengirim password polos. Sertakan juga fallback file `md5.js` lokal di folder hotspot bila milik router tidak terbaca.
- Sertakan salinan `md5.js` standar di paket hotspot dan catat di `README.txt` bahwa file ini boleh ada berdampingan dengan bawaan MikroTik.
- Bangun ulang `griya-arca-hotspot.zip` lewat `scripts/zip-hotspot.mjs`.

## Catatan

Tidak ada perubahan tampilan, tema, maupun animasi — hanya alur autentikasi CHAP.
