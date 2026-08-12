# Tema Otomatis Sesuai Jam WIB

Halaman hotspot (login dan halaman lain) otomatis memakai mode terang atau gelap berdasarkan jam Waktu Indonesia Barat, bukan pengaturan tersimpan.

## Aturan

- 06.00–17.59 WIB: mode terang (pemandangan pagi + animasi burung sawah)
- 18.00–05.59 WIB: mode gelap (pemandangan malam + animasi kunang-kunang)
- Jam dihitung dari waktu perangkat, dikonversi ke UTC+7, jadi tetap benar meski zona waktu perangkat salah
- Tombol tema tetap ada sebagai override sementara: pilihan pengguna berlaku selama halaman itu terbuka, lalu kembali otomatis saat halaman dimuat ulang
- Selama halaman terbuka, tema diperiksa berkala sehingga berganti sendiri saat melewati pukul 06.00 atau 18.00 (kecuali sedang di-override)

## Perubahan teknis

- `public/hotspot/theme.js`: tambahkan fungsi penentu tema berdasarkan jam UTC+7, terapkan saat load, dan pasang pengecekan tiap menit. Override manual disimpan hanya di variabel memori/`sessionStorage`, bukan `localStorage`.
- Skrip inline di `login.html`, `alogin.html`, `rlogin.html`, `status.html`, `logout.html`, `error.html`, `redirect.html`, `faq.html`: ganti pembacaan `localStorage('griya-arca-theme')` menjadi perhitungan jam WIB, agar tema dan preload gambar latar (`bg-morning1` / `bg-night1`) sesuai sejak render pertama tanpa kedip.
- Hapus penggunaan `localStorage` untuk tema agar tidak lagi mengunci preferensi lama.
- Bangun ulang paket unduhan `griya-arca-hotspot.zip` via `scripts/zip-hotspot.mjs`.
