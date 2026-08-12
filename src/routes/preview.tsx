import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const TITLE = "Pratinjau Halaman Login Hotspot — Griya Arca Kost";
const DESC =
  "Lihat pratinjau halaman login, status, dan FAQ hotspot MikroTik Griya Arca Kost dalam bingkai iPhone 8 hingga iPhone 15 Pro Max.";

export const Route = createFileRoute("/preview")({
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
  component: PreviewPage,
});

const PAGES = [
  { file: "login.html", label: "Login" },
  { file: "alogin.html", label: "Login sukses" },
  { file: "status.html", label: "Status" },
  { file: "logout.html", label: "Logout" },
  { file: "error.html", label: "Error" },
  { file: "faq.html", label: "FAQ & SOP" },
];

const DEVICES = [
  { label: "iPhone 8", w: 375, h: 667 },
  { label: "iPhone 12/13/14", w: 390, h: 844 },
  { label: "iPhone 15 Pro Max", w: 430, h: 932 },
] as const;

type Device = (typeof DEVICES)[number];

function PreviewPage() {
  const [page, setPage] = useState<string>("login.html");
  const [device, setDevice] = useState<Device>(DEVICES[1]);
  const src = `/hotspot/${page}`;

  return (
    <main className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-center gap-3 text-foreground">
          <BrandLogo className="h-10 w-auto max-w-full shrink-0 text-foreground sm:h-12 md:h-14" />
          <span className="text-sm font-medium text-muted-foreground">Purwokerto, Jawa Tengah</span>
        </div>
        <a href="/" className="text-sm font-medium text-muted-foreground">
          &larr; Kembali
        </a>
        <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Pratinjau Halaman Hotspot
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pilih halaman dan ukuran layar iPhone untuk melihat tampilan sebenarnya.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {PAGES.map((p) => (
            <button
              key={p.file}
              type="button"
              onClick={() => setPage(p.file)}
              className={`min-h-10 rounded-full border px-4 text-sm font-semibold ${
                page === p.file
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {DEVICES.map((d) => (
            <button
              key={d.label}
              type="button"
              onClick={() => setDevice(d)}
              className={`min-h-10 rounded-full border px-4 text-xs font-semibold ${
                device.label === d.label
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground"
              }`}
            >
              {d.label} · {d.w}×{d.h}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div
            className="max-w-full overflow-hidden rounded-[44px] border-[10px] border-foreground/85 bg-black shadow-2xl"
            style={{ width: device.w + 20 }}
          >
            <iframe
              key={`${page}-${device.label}`}
              src={src}
              title={`Pratinjau ${page}`}
              className="block w-full border-0 bg-black"
              style={{ height: device.h }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground"
          >
            Buka di tab baru
          </a>
          <a
            href="/export"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Export semua file
          </a>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Catatan: variabel MikroTik seperti $(username), $(error), dan $(uptime) tampil apa
          adanya di pratinjau — nilainya baru terisi saat file dijalankan di router.
        </p>
      </div>
    </main>
  );
}
