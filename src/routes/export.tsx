import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";

const TITLE = "Export Paket Hotspot (ZIP) — Griya Arca Kost";
const DESC =
  "Unduh satu folder lengkap berisi seluruh file halaman hotspot MikroTik Griya Arca Kost, termasuk gambar latar, dalam format ZIP siap upload.";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExportPage,
});

const CONTENT: { name: string; desc: string }[] = [
  { name: "login.html", desc: "Halaman login member (username + password)" },
  { name: "alogin.html", desc: "Halaman sukses + tombol Buka Browser (iPhone)" },
  { name: "status.html", desc: "Status koneksi & tombol logout" },
  { name: "logout.html", desc: "Halaman setelah logout" },
  { name: "error.html", desc: "Halaman error" },
  { name: "rlogin.html", desc: "Auto-login by MAC" },
  { name: "redirect.html", desc: "Halaman lanjut manual (tanpa redirect otomatis)" },
  { name: "faq.html", desc: "FAQ, SOP, dan troubleshooting iPhone" },
  { name: "style.css", desc: "Tema terang/gelap semua halaman" },
  { name: "theme.js", desc: "Tombol ganti tema (tersimpan di perangkat)" },
  { name: "img/bg-night1.webp", desc: "Malam: lereng Gunung Slamet" },
  { name: "img/bg-night2.webp", desc: "Malam: air terjun hutan pinus" },
  { name: "img/bg-night3.webp", desc: "Malam: sawah terasering" },
  { name: "img/bg-morning1.webp", desc: "Pagi: lereng Gunung Slamet" },
  { name: "img/bg-morning2.webp", desc: "Pagi: air terjun hutan pinus" },
  { name: "img/bg-morning3.webp", desc: "Pagi: sawah terasering" },
  { name: "README.txt", desc: "Panduan upload ke router" },
  { name: "IPHONE-COMPAT.md", desc: "Panduan kompatibilitas Safari iOS" },
];

const STEPS = [
  "Unduh dan ekstrak griya-arca-hotspot.zip — isinya satu folder bernama hotspot.",
  "Buka Winbox → menu Files, lalu hapus/backup folder hotspot bawaan router.",
  "Drag semua isi folder hotspot hasil ekstrak ke folder hotspot di router (atau upload via FTP ke /hotspot).",
  "Pastikan sub-folder img ikut terupload agar gambar latar tampil.",
  "Buka IP → Hotspot → Server Profiles → tab General, isi HTML Directory dengan hotspot.",
  "Sambungkan HP ke Wi-Fi dan uji halaman login.",
];

function ExportPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center gap-3 text-foreground">
          <BrandLogo className="h-10 w-auto max-w-full shrink-0 text-foreground sm:h-12 md:h-14" />
          <span className="text-sm font-medium text-muted-foreground">Purwokerto, Jawa Tengah</span>
        </div>
        <a href="/" className="text-sm font-medium text-muted-foreground">
          &larr; Kembali
        </a>
        <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Export Satu Folder Lengkap
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Semua halaman, tema, dan gambar dikemas dalam satu file ZIP siap upload ke MikroTik.
        </p>

        <div className="mt-6 rounded-2xl border border-border p-5">
          <p className="font-mono text-sm font-semibold text-foreground">griya-arca-hotspot.zip</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {CONTENT.length} berkas · ±135 KB · termasuk folder img
          </p>
          <a
            href="/downloads/griya-arca-hotspot.zip"
            download
            className="mt-4 inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Unduh ZIP lengkap
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Format ZIP dipakai (bukan RAR) agar bisa dibuka langsung di Windows, macOS, Android,
            dan iPhone tanpa aplikasi tambahan.
          </p>
        </div>

        <div className="mt-4">
          <a
            href="/manifest"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground"
          >
            Lihat manifest berkas
          </a>
        </div>

        <h2 className="mt-8 text-lg font-semibold text-foreground">Isi paket</h2>
        <ul className="mt-3 divide-y divide-border rounded-2xl border border-border">
          {CONTENT.map((f) => (
            <li key={f.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4">
              <div className="min-w-0">
                <p className="truncate font-mono text-sm font-medium text-foreground">{f.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{f.desc}</p>
              </div>
              <a
                href={`/hotspot/${f.name}`}
                download
                className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground"
              >
                Unduh
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-lg font-semibold text-foreground">Cara upload ke MikroTik</h2>
        <ol className="mt-3 space-y-2">
          {STEPS.map((s, i) => (
            <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                {i + 1}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-muted-foreground">
          Butuh bantuan?{" "}
          <a className="font-semibold text-foreground" href="https://wa.me/6285888440751">
            WhatsApp +62 858-8844-0751
          </a>
        </p>
      </div>
    </main>
  );
}
