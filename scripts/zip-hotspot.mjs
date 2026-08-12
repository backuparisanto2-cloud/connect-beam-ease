// Mengemas seluruh isi public/hotspot menjadi public/downloads/griya-arca-hotspot.zip
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import JSZip from "jszip";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "public/hotspot");
const OUT_DIR = join(ROOT, "public/downloads");
const OUT = join(OUT_DIR, "griya-arca-hotspot.zip");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(SRC);
const zip = new JSZip();
const folder = zip.folder("hotspot");
for (const f of files) {
  folder.file(relative(SRC, f).split("\\").join("/"), await readFile(f));
}
const buf = await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT, buf);
const s = await stat(OUT);

const entries = [];
for (const f of files) {
  const fs_ = await stat(f);
  entries.push({
    name: relative(SRC, f).split("\\").join("/"),
    bytes: fs_.size,
    modifiedAt: fs_.mtime.toISOString(),
  });
}
entries.sort((a, b) => a.name.localeCompare(b.name));

const manifest = {
  archive: "griya-arca-hotspot.zip",
  builtAt: new Date().toISOString(),
  fileCount: entries.length,
  zipBytes: s.size,
  totalBytes: entries.reduce((t, e) => t + e.bytes, 0),
  files: entries,
};

await mkdir(join(ROOT, "src/data"), { recursive: true });
await writeFile(join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
await writeFile(join(ROOT, "src/data/hotspot-manifest.json"), JSON.stringify(manifest, null, 2));
await writeFile(
  join(OUT_DIR, "griya-arca-hotspot.json"),
  JSON.stringify({ files: files.length, bytes: s.size, builtAt: manifest.builtAt }, null, 2),
);
console.log(`zip-hotspot: ${files.length} file -> ${(s.size / 1024).toFixed(0)} KB`);
