# Latar Halaman Login: Pemandangan Lebih Terlihat + Animasi

## Tujuan
Foto latar (malam / pagi) lebih jelas terlihat di halaman login, dan ada animasi suasana: kunang-kunang saat mode gelap, burung sawah terbang saat mode terang.

## Yang akan dikerjakan

1. **Overlay lebih tipis, teks tetap terbaca**
   - Lapisan gelap penuh layar (`body::before`) dikurangi kepekatannya: dark mode dari ~0.55–0.9 menjadi gradasi ringan (~0.2 di atas, ~0.55 di bawah); light mode ikut diperingan.
   - Sebagai gantinya, keterbacaan dijaga secara lokal: kartu login dan blok brand mendapat sedikit tambahan blur/bayangan lembut, sehingga foto di sekitarnya tetap jernih.
   - Latar dibuat sedikit lebih "hidup" dengan gerakan sangat pelan (slow pan/zoom halus) yang otomatis mati bila pengguna memilih hemat animasi.

2. **Animasi kunang-kunang (mode gelap)**
   - Lapisan `<div class="fx" aria-hidden="true">` berisi ~14 titik cahaya kecil hangat, masing-masing melayang dengan jalur dan durasi berbeda serta berkedip pelan.
   - Murni CSS (tanpa JavaScript, tanpa file gambar) agar tetap ringan di router MikroTik.
   - Hanya tampil saat mode gelap.

3. **Animasi burung sawah (mode terang)**
   - Lapisan yang sama menampilkan ~6 siluet burung (SVG inline berbentuk sayap "v") yang terbang melintas layar dari kanan ke kiri, dengan ketinggian, ukuran, kecepatan, dan jeda berbeda, plus kepakan sayap halus.
   - Hanya tampil saat mode terang; otomatis bertukar ketika tombol tema ditekan.

4. **Cakupan halaman & aksesibilitas**
   - Diterapkan pada `login.html`, `alogin.html`, dan `rlogin.html` (halaman login/redirect masuk).
   - Lapisan animasi `pointer-events:none`, `aria-hidden`, dan seluruh animasi dimatikan pada `prefers-reduced-motion: reduce` serta mode kontras tinggi.

5. **Paket unduhan**
   - Pratinjau di situs otomatis ikut berubah; ZIP `griya-arca-hotspot.zip` dibangun ulang.

## Catatan teknis
- Semua efek ditulis di `public/hotspot/style.css` dengan keyframes ringan (transform + opacity saja) agar tidak membebani perangkat lama.
- Tidak ada aset gambar baru, ukuran paket praktis tidak bertambah.
