import { createFileRoute } from "@tanstack/react-router";
import manifest from "@/data/hotspot-manifest.json";
import { BrandLogo } from "@/components/BrandLogo";

const TITLE = "Manifest Paket Hotspot — Griya Arca Kost";
const DESC =
  "Daftar lengkap 14 berkas di dalam griya-arca-hotspot.zip beserta ukuran file dan tanggal build paket hotspot MikroTik Griya Arca Kost.";

export const Route = createFileRoute("/manifest")({
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
  component: ManifestPage,
});

const DESCRIPTIONS: Record<string, string> = {
  "login.html": "Halaman login member (username + password)",
  "alogin.html": "Halaman sukses + tombol Buka Browser (iPhone)",
  "status.html": "Status koneksi & tombol logout",
  "logout.html": "Halaman setelah logout",
  "error.html": "Halaman error",
  "rlogin.html": "Auto-login by MAC",
  "redirect.html": "Halaman lanjut manual (tanpa redirect otomatis)",
  "faq.html": "FAQ, SOP, dan troubleshooting iPhone",
  "style.css": "Tema terang/gelap semua halaman",
  "theme.js": "Tombol ganti tema (tersimpan di perangkat)",
  "img/bg-night1.webp": "Malam: lereng Gunung Slamet",
  "img/bg-night2.webp": "Malam: air terjun hutan pinus",
  "img/bg-night3.webp": "Malam: sawah terasering",
  "img/bg-morning1.webp": "Pagi: lereng Gunung Slamet",
  "img/bg-morning2.webp": "Pagi: air terjun hutan pinus",
  "img/bg-morning3.webp": "Pagi: sawah terasering",
  "README.txt": "Panduan upload ke router",
  "IPHONE-COMPAT.md": "Panduan kompatibilitas Safari iOS",
};

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  });
}

function ManifestPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center gap-3 text-foreground">
          <BrandLogo className="h-10 w-auto max-w-full shrink-0 text-foreground sm:h-12 md:h-14" />
          <span className="text-sm font-medium text-muted-foreground">Purwokerto, Jawa Tengah</span>
        </div>
        <a href="/export" className="text-sm font-medium text-muted-foreground">
          &larr; Kembali ke Export
        </a>
        <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Manifest {manifest.archive}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Daftar berkas yang ikut dikemas ke dalam ZIP, lengkap dengan ukuran dan tanggal build.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "Jumlah berkas", v: String(manifest.fileCount) },
            { k: "Ukuran ZIP", v: formatBytes(manifest.zipBytes) },
            { k: "Total isi", v: formatBytes(manifest.totalBytes) },
            { k: "Tanggal build", v: formatDate(manifest.builtAt) },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border p-4">
              <dt className="text-xs text-muted-foreground">{s.k}</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 divide-y divide-border rounded-2xl border border-border">
          {manifest.files.map((f, i) => (
            <li key={f.name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-3 p-4">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="truncate font-mono text-sm font-medium text-foreground">{f.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {DESCRIPTIONS[f.name] ?? "Berkas pendukung"}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Diubah {formatDate(f.modifiedAt)}
                </p>
              </div>
              <span className="shrink-0 self-start font-mono text-xs text-muted-foreground">
                {formatBytes(f.bytes)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/downloads/griya-arca-hotspot.zip"
            download
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Unduh ZIP
          </a>
          <a
            href="/downloads/manifest.json"
            download
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground"
          >
            Unduh manifest.json
          </a>
        </div>
      </div>
    </main>
  );
}
