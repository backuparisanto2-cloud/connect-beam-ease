# Impor proyek purwokerto-wifi-buddy dari GitHub

Menyalin seluruh isi repo publik `backuparisanto2-cloud/purwokerto-wifi-buddy` ke proyek ini. Repo tersebut adalah proyek Lovable dengan stack yang sama persis (TanStack Start + Tailwind v4), jadi bisa diimpor apa adanya.

## Apa yang akan ada setelah impor

- Halaman utama portal WiFi Purwokerto (`/`), plus halaman `preview`, `manifest`, dan `export`
- Paket file hotspot Mikrotik di `public/hotspot/` (login, status, logout, FAQ, error, tema pagi/malam, gambar webp, style, theme.js)
- Berkas unduhan siap pakai di `public/downloads/` (termasuk `gracie-hotspot.zip`)
- Komponen `BrandLogo` dan set lengkap komponen UI shadcn
- Script `scripts/zip-hotspot.mjs` untuk membangun ulang paket zip
- Design system dan konfigurasi (`src/styles.css`, `components.json`, `vite.config.ts`, `tsconfig.json`, dsb.)

## Langkah teknis

1. Unduh tarball repo (branch `main`) ke sandbox dan ekstrak.
2. Timpa file proyek saat ini dengan file dari repo: `src/`, `public/`, `scripts/`, serta config root (`package.json`, `components.json`, `eslint.config.js`, `vite.config.ts`, `tsconfig.json`, `.prettierrc`, `bunfig.toml`, `AGENTS.md`, `README.md`). Placeholder `src/routes/index.tsx` diganti halaman asli.
3. `src/routeTree.gen.ts` dibiarkan dibangkitkan ulang oleh dev server.
4. Sinkronkan dependensi dengan `bun install` sesuai `package.json` repo (aset biner seperti `.webp`, `.png`, `.zip` disalin utuh).
5. Verifikasi: typecheck bersih dan seluruh rute (`/`, `/preview`, `/manifest`, `/export`) dirender via browser headless, plus cek console error.

## Catatan

- Riwayat plan lama repo (`.lovable/plan/`) tidak ikut disalin.
- Repo tidak memakai backend/database, jadi tidak perlu mengaktifkan Cloud.
