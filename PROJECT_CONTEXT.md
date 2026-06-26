# Blueprint & Dokumen Desain Website v2.0

# PT. Sagara Yasa Ananta

> **Dokumen ini adalah _Single Source of Truth_ versi 2.0** — mencakup revisi konten, arsitektur, sistem desain, panduan animasi, dan halaman baru berdasarkan rekomendasi strategis.
>
> **Perubahan utama dari v1.0:**
>
> - Penambahan Halaman Portfolio/Proyek
> - Penambahan detail teknis kapasitas & spesifikasi PLTD
> - Penambahan Izin & Regulasi (IUPTL, dll.)
> - Pecah Halaman Layanan menjadi sub-halaman individual
> - Revisi palet warna: Green Energy tone dengan positioning _Responsible Diesel_
> - Revisi sistem animasi: performa-first, medium complexity, GSAP + CSS hybrid

---

## CATATAN POSITIONING PENTING

> **"Green" bukan berarti Renewable — tapi Responsible."**
>
> PT. Sagara Yasa Ananta beroperasi dengan PLTD berbasis diesel. Tone _Green Energy_ yang dipilih **bukan** untuk mengklaim sumber energi terbarukan, melainkan untuk mengkomunikasikan:
>
> - Tanggung jawab lingkungan (ISO 14001)
> - Efisiensi operasional dan pengelolaan emisi terkontrol
> - Kepatuhan regulasi lingkungan ESDM & KLHK
> - Tata kelola bisnis yang bertanggung jawab jangka panjang
>
> Semua copywriting harus menggunakan kata **"andal", "efisien", "bertanggung jawab"** — bukan "bersih", "hijau", atau "zero-emission".

---

## 1. Sitemap & Arsitektur Halaman (Diperbarui)

```
/                          → Home
/tentang-kami              → About Us
  /tentang-kami/tim        → (opsional) Struktur Tim
/layanan                   → Services (Overview)
  /layanan/pembangunan-pltd        → Sub-halaman 1
  /layanan/operasional-pemeliharaan → Sub-halaman 2
  /layanan/distribusi-listrik       → Sub-halaman 3
  /layanan/perdagangan-besar        → Sub-halaman 4
/proyek                    → Portfolio & Track Record (BARU)
/tata-kelola               → HSE & Governance
/kontak                    → Contact Us
```

---

## 2. Strategi Konten & Copywriting (Lengkap)

### A. Halaman Utama (Home `/`)

#### Hero Section

- **Headline:** `Energi yang Andal. Dikelola dengan Tanggung Jawab.`
- **Sub-headline:** PT. Sagara Yasa Ananta menyediakan solusi pembangunan, operasional, dan distribusi Pembangkit Listrik Tenaga Diesel (PLTD) yang efisien, terstandarisasi, dan berkelanjutan — untuk kebutuhan kelistrikan industri, daerah terpencil, dan infrastruktur nasional.
- **CTA Primer:** `Lihat Portofolio Proyek`
- **CTA Sekunder:** `Konsultasikan Kebutuhan Anda`

#### Statistik / Social Proof Bar

Sebuah bar horizontal di bawah hero menampilkan angka-angka kunci (diperbarui sesuai data aktual):

- `XX MW` — Total Kapasitas Terpasang
- `XX+` — Proyek Selesai
- `XX` — Provinsi Terjangkau
- `XX Tahun` — Pengalaman Operasional

#### Sekilas Perusahaan (About Snippet)

PT. Sagara Yasa Ananta adalah perusahaan nasional yang memiliki spesialisasi dalam pembangunan dan pengelolaan Pembangkit Listrik Tenaga Diesel (PLTD). Kami beroperasi dengan standar teknis internasional, tata kelola yang transparan, dan komitmen penuh terhadap keselamatan kerja serta pengelolaan lingkungan yang bertanggung jawab.

Kami melayani pemerintah daerah, BUMN, dan sektor swasta — khususnya untuk wilayah-wilayah yang membutuhkan pasokan listrik yang stabil dan andal di luar jangkauan jaringan nasional.

#### Layanan Utama (Services Highlight — 4 Card)

1. **Pembangunan PLTD** — Perencanaan teknis, pengadaan, konstruksi, hingga _commissioning_.
2. **Operasional & Pemeliharaan** — Pengelolaan unit PLTD 24/7 dengan SOP terstandarisasi.
3. **Distribusi Tenaga Listrik** — Penyaluran daya ke jaringan distribusi secara stabil.
4. **Perdagangan Besar** — Pengadaan material, suku cadang, dan peralatan ketenagalistrikan.

#### Sertifikasi & Legalitas

Menampilkan logo dan keterangan:

- **ISO 14001** — Sistem Manajemen Lingkungan
- **ISO 45001** — Sistem Manajemen Keselamatan & Kesehatan Kerja
- **SMR3 Certified** — Sistem Manajemen Risiko
- **IUPTL** — Izin Usaha Penyediaan Tenaga Listrik (Kementerian ESDM)

#### Highlight Proyek Terbaru (3 Card)

Menampilkan 3 proyek terkini dari halaman `/proyek` sebagai preview.

---

### B. Halaman Tentang Kami (`/tentang-kami`)

#### Profil Perusahaan

PT. Sagara Yasa Ananta didirikan dengan misi menjadi mitra ketenagalistrikan yang dapat diandalkan oleh pemerintah dan industri. Berkantor pusat di Jakarta Selatan, kami telah membangun rekam jejak yang solid dalam sektor PLTD di berbagai wilayah Indonesia.

#### Visi

Menjadi perusahaan nasional terdepan di bidang solusi ketenagalistrikan berbasis diesel yang andal, efisien, dan dikelola dengan standar tata kelola serta lingkungan tertinggi.

#### Misi

1. Menyediakan layanan pembangunan dan operasional PLTD sesuai standar teknis nasional dan internasional.
2. Mendistribusikan tenaga listrik secara stabil dan berkelanjutan kepada pelanggan.
3. Menjalankan kegiatan perdagangan besar secara profesional dan akuntabel.
4. Membangun kemitraan strategis jangka panjang dengan pemerintah, BUMN, dan swasta.
5. Menerapkan praktik operasional yang bertanggung jawab terhadap lingkungan dan masyarakat.

#### Nilai Perusahaan (4 Pilar)

| Nilai                     | Deskripsi                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Integritas**            | Jujur, transparan, dan patuh penuh pada regulasi ESDM, KLHK, dan standar K3 nasional.                    |
| **Keandalan Operasional** | Menjaga kontinuitas pasokan listrik dengan sistem pemeliharaan preventif dan korektif yang konsisten.    |
| **Profesionalisme**       | SDM yang kompeten, bersertifikasi, dan disiplin dalam setiap aspek operasional lapangan.                 |
| **Tanggung Jawab**        | Pertumbuhan bisnis yang memperhatikan dampak lingkungan, keselamatan pekerja, dan kepentingan komunitas. |

---

### C. Halaman Layanan (`/layanan`) — Overview

Halaman ini berfungsi sebagai portal layanan dengan 4 card yang masing-masing mengarah ke sub-halaman detail.

---

#### C1. Sub-halaman: Pembangunan PLTD (`/layanan/pembangunan-pltd`)

**Deskripsi Layanan:**
Kami mengelola seluruh siklus pembangunan unit PLTD — mulai dari studi kelayakan teknis, desain sistem, pengadaan peralatan utama (genset, panel kontrol, sistem distribusi), konstruksi sipil, instalasi mekanikal-elektrikal, hingga _commissioning_ dan serah terima operasional.

**Cakupan Teknis:**

- Rentang kapasitas: **500 kW hingga 10 MW** per unit (atau sesuai kebutuhan proyek)
- Mode operasi: _Isolated grid_ (stand-alone) dan _grid-connected_ (paralel PLN)
- Merek engine yang dikerjakan: Caterpillar, MAN, Wärtsilä, Cummins, Mitsubishi (sesuai spesifikasi klien)
- Sistem bahan bakar: Solar/HSD, sesuai standar Pertamina
- Standar konstruksi mengacu pada: PUIL 2011, SNI ketenagalistrikan, dan regulasi Kementerian ESDM

**Tahapan Proyek:**

1. Studi Kelayakan & Perencanaan Teknis
2. Pengadaan Peralatan & Material
3. Konstruksi Sipil & Instalasi M/E
4. Pengujian (_Testing & Commissioning_)
5. Serah Terima & Dukungan Pasca-Konstruksi

---

#### C2. Sub-halaman: Operasional & Pemeliharaan (`/layanan/operasional-pemeliharaan`)

**Deskripsi Layanan:**
Pengelolaan unit PLTD secara penuh (_full O&M_) dengan tim teknisi terlatih yang beroperasi 24 jam sehari, 7 hari seminggu. Layanan ini mencakup pemeliharaan preventif terjadwal, respons korektif, dan pelaporan kinerja operasional secara berkala.

**Lingkup Layanan O&M:**

- Pemeliharaan preventif harian, mingguan, bulanan, dan tahunan
- Pemantauan parameter mesin: suhu, tekanan oli, konsumsi bahan bakar, output kWh
- Penanganan gangguan dan perbaikan darurat (_breakdown maintenance_)
- Pengelolaan suku cadang dan stok oli/filter
- Pelaporan operasional bulanan kepada klien (uptime, konsumsi BBM, insiden)
- Kepatuhan K3 di area pembangkit sesuai ISO 45001

**SLA (Service Level Agreement) Tipikal:**

- Uptime target: ≥ 95%
- Waktu respons gangguan: ≤ 2 jam (lokasi terjangkau)

---

#### C3. Sub-halaman: Distribusi Tenaga Listrik (`/layanan/distribusi-listrik`)

**Deskripsi Layanan:**
Penyaluran tenaga listrik dari unit pembangkit ke jaringan distribusi pelanggan, mencakup pengelolaan tegangan, pengelolaan beban, dan koordinasi dengan operator jaringan.

**Cakupan:**

- Distribusi tegangan menengah (TM) dan tegangan rendah (TR)
- Pengelolaan beban (_load management_) untuk efisiensi konsumsi BBM
- Koordinasi teknis dengan PLN untuk titik interkoneksi (jika _grid-connected_)
- Pemasangan dan pemeliharaan panel distribusi, trafo, dan kabel jaringan

---

#### C4. Sub-halaman: Perdagangan Besar (`/layanan/perdagangan-besar`)

**Deskripsi Layanan:**
Pengadaan dan distribusi berbagai jenis barang untuk kebutuhan industri ketenagalistrikan dan infrastruktur, meliputi material elektrikal, suku cadang mesin diesel, peralatan K3, dan kebutuhan operasional lainnya.

---

### D. Halaman Portofolio & Proyek (`/proyek`) — HALAMAN BARU

> ⚠️ **Catatan untuk Tim:** Data proyek di bawah ini adalah placeholder — wajib diisi dengan data aktual dari manajemen sebelum website diluncurkan.

#### Layout Halaman

- **Filter bar** di atas: Filter berdasarkan kategori (Pembangunan, O&M, Distribusi) dan status (Selesai, Aktif)
- **Grid proyek** (3 kolom di desktop, 1 kolom di mobile): Setiap card menampilkan foto, nama proyek, lokasi, kapasitas, dan status
- **Peta Sebaran Proyek**: Embed peta Indonesia interaktif dengan titik-titik lokasi proyek

#### Struktur Data Setiap Proyek (Card)

```
- Nama Proyek      : [Contoh: PLTD Terpencil Kab. Nunukan]
- Lokasi           : [Provinsi / Kabupaten]
- Kapasitas        : [X MW / X kW]
- Kategori         : [Pembangunan / O&M / Distribusi]
- Tahun            : [YYYY]
- Status           : [Selesai / Aktif / Dalam Pengerjaan]
- Deskripsi Singkat: [1-2 kalimat]
- Foto Proyek      : [Upload dari dokumentasi lapangan]
```

#### Contoh Placeholder Data (Ganti dengan data aktual):

| Proyek              | Lokasi           | Kapasitas | Status  |
| ------------------- | ---------------- | --------- | ------- |
| PLTD Kepulauan Riau | Kepulauan Riau   | 2 MW      | Aktif   |
| PLTD Kab. Nunukan   | Kalimantan Utara | 1.5 MW    | Selesai |
| O&M PLTD Industri   | Jawa Barat       | 3 MW      | Aktif   |

---

### E. Halaman Tata Kelola & K3 (`/tata-kelola`)

#### Tata Kelola Perusahaan (GCG)

PT. Sagara Yasa Ananta menerapkan prinsip _Good Corporate Governance_ (GCG) yang mencakup transparansi pelaporan, akuntabilitas manajemen, dan sistem pengendalian internal yang terstruktur. Setiap keputusan operasional dan pengadaan dilakukan melalui prosedur yang terdokumentasi dan dapat diaudit.

#### Keselamatan dan Kesehatan Kerja (K3)

Keselamatan adalah prioritas utama di setiap lini operasi kami. Sistem manajemen K3 kami tersertifikasi **ISO 45001** dan mencakup:

- Program pelatihan K3 wajib bagi seluruh teknisi lapangan
- Inspeksi keselamatan rutin di area pembangkit
- Prosedur Kerja Aman (JSA — _Job Safety Analysis_) untuk setiap pekerjaan berisiko tinggi
- Penggunaan APD (_Alat Pelindung Diri_) standar operasional
- Sistem pelaporan dan investigasi insiden yang transparan
- Target: **Zero Accident** dalam setiap proyek

#### Tanggung Jawab Lingkungan

Meskipun beroperasi dengan bahan bakar diesel, kami berkomitmen meminimalkan dampak lingkungan melalui:

- Pengelolaan emisi mesin sesuai baku mutu lingkungan KLHK
- Penanganan dan pembuangan limbah B3 (oli bekas, filter) sesuai regulasi
- Efisiensi konsumsi bahan bakar melalui optimasi beban operasional
- Sistem manajemen lingkungan tersertifikasi **ISO 14001**
- Pemantauan kualitas udara dan kebisingan di sekitar area pembangkit

#### Perizinan & Regulasi

Seluruh kegiatan usaha PT. Sagara Yasa Ananta dilakukan dalam kerangka hukum dan perizinan yang lengkap:

- **IUPTL** (_Izin Usaha Penyediaan Tenaga Listrik_) — Kementerian ESDM RI
- **SBUJK Ketenagalistrikan** — Sertifikat Badan Usaha Jasa Konstruksi Ketenagalistrikan
- **NIB** (Nomor Induk Berusaha) — OSS / BKPM
- **Akta Pendirian & Perubahan** yang telah disahkan Kemenkumham
- **NPWP Perusahaan** aktif dan terdaftar di KPP

---

### F. Halaman Kontak (`/kontak`)

- **Alamat Kantor Utama:**
  TALAVERA OFFICE PARK, Lantai 28
  Jl. TB. Simatupang Kav. 22-26
  RT 001 RW 001, Kel. Cilandak Barat, Kec. Cilandak
  Jakarta Selatan, DKI Jakarta 12430

- **Jam Operasional:** Senin – Jumat, 08.00 – 17.00 WIB
- **Email:** info@sagarayasaananta.co.id _(sesuaikan dengan email aktual)_
- **Telepon:** +62 21 XXXX XXXX _(sesuaikan)_

- **Formulir Kontak:** Nama, Perusahaan/Instansi, Email, Nomor Telepon, Kebutuhan (dropdown: Pembangunan PLTD / O&M / Distribusi / Pengadaan / Lainnya), Pesan.

- **Google Maps Embed:** Koordinat Talavera Office Park, Jakarta Selatan.

---

## 3. Sistem Desain (Design System) — Diperbarui

### Filosofi Visual

**"Responsible Power"** — Kekuatan industri diesel yang dioperasikan dengan presisi, tanggung jawab, dan profesionalisme. Visual harus terasa _authoritative_ namun tidak dingin; _technical_ namun tidak kaku.

### Palet Warna — DIREVISI

Palet lama (Forest Green murni) diganti dengan palet yang lebih tepat untuk _Responsible Diesel Energy_:

```
PRIMARY    — Deep Forest Green  #064e3b  (Tailwind: green-900)
             → Warna utama brand. Dipakai di navbar, CTA primer, heading.
             → Alasan: Bukan untuk klaim "renewable", tapi untuk
               mengkomunikasikan keandalan, kepercayaan, dan tanggung jawab.

SECONDARY  — Slate Navy         #1e3a5f
             → Warna pendukung untuk elemen teknis, tabel, infografis.
             → Memberi kesan industrial, profesional, B2B.
             → Tailwind kustom: navy-800

ACCENT     — Amber/Gold         #f59e0b  (Tailwind: amber-500)
             → Dipakai sparingly: angka statistik, highlight, ikon aktif.
             → Merepresentasikan energi dan daya — bukan dekorasi.

BACKGROUND — Slate White        #f8fafc  (Tailwind: slate-50)
             → Background halaman utama. Bersih, profesional.

SURFACE    — White              #ffffff
             → Background card, modal, form.

TEXT       — Charcoal           #1e293b  (Tailwind: slate-800)
             → Teks utama. Kontras tinggi, mudah dibaca.

TEXT MUTED — Cool Gray          #64748b  (Tailwind: slate-500)
             → Teks sekunder, caption, label.

DIVIDER    — Light Gray         #e2e8f0  (Tailwind: slate-200)
```

**Catatan perubahan dari v1:**

- Ditambahkan `Slate Navy` sebagai warna sekunder untuk nuansa industrial/teknis
- `Amber` digeser dari amber-400 ke amber-500 untuk kontras lebih baik di background hijau gelap
- Hijau tetap dipertahankan karena konsisten dengan ISO 14001 dan nilai tanggung jawab lingkungan — bukan klaim renewable

### CSS Variables (Implementasi)

```css
:root {
  --color-primary: #064e3b;
  --color-primary-dark: #043d2f;
  --color-navy: #1e3a5f;
  --color-navy-dark: #152b47;
  --color-accent: #f59e0b;
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-divider: #e2e8f0;
}
```

### Tipografi

```
HEADING FONT: "Plus Jakarta Sans" (Google Fonts)
  — Weights: 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
  — Dipakai untuk H1–H4, angka statistik, CTA

BODY FONT: "Inter" (Google Fonts)
  — Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
  — Dipakai untuk paragraf, label, navigasi

MONO FONT: "JetBrains Mono" (opsional)
  — Dipakai untuk menampilkan spesifikasi teknis, kapasitas, angka teknis
```

```css
/* Contoh skala tipografi */
--text-xs: 0.75rem; /* 12px — caption, label kecil */
--text-sm: 0.875rem; /* 14px — teks sekunder */
--text-base: 1rem; /* 16px — body teks */
--text-lg: 1.125rem; /* 18px — sub-heading kecil */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px — H2 section */
--text-5xl: 3rem; /* 48px — H1 hero */
--text-6xl: 3.75rem; /* 60px — hero desktop besar */
```

---

## 4. Sistem Animasi & Interaksi — DIREVISI

### Filosofi Animasi

**Performa-first, kesan profesional.** Animasi berfungsi untuk membimbing perhatian dan memberikan kesan _polish_ — bukan sebagai pertunjukan. Klien B2B (pejabat pemerintah, engineer, procurement) menghargai kecepatan dan kejelasan informasi di atas efek visual.

### Strategi Implementasi

**Hybrid GSAP + CSS:**

- **CSS Transitions/Animations** → untuk interaksi sedang (hover, focus, active states, micro-interactions)
- **GSAP + ScrollTrigger** → untuk animasi scroll yang lebih kompleks (hero entrance, section reveal, counter)
- Selalu gunakan `useGSAP()` hook dari `@gsap/react` untuk mencegah memory leak di Next.js

### Panduan Animasi Per Komponen

#### Navbar

```
- Behavior: Transparent di atas hero → solid white/green saat scroll (smooth transition 300ms)
- Backdrop blur: blur(12px) saat scrolled
- Menu item hover: underline tumbuh dari kiri, 200ms ease-out
- Mobile menu: slide dari kanan, 350ms cubic-bezier(0.4, 0, 0.2, 1)
```

#### Hero Section

```
Animasi entrance (GSAP Timeline, sekuensial):
1. Headline: fadeInUp, y: 30→0, opacity 0→1, duration 0.8s, ease: power2.out
2. Sub-headline: fadeInUp, delay 0.15s setelah headline
3. CTA buttons: fadeInUp, delay 0.15s setelah sub-headline
4. Stats bar: fadeIn, delay 0.3s setelah CTA

Background: Subtle animated gradient mesh (CSS @keyframes, 8s loop, very slow)
→ Tidak boleh mengganggu keterbacaan teks
```

#### Stats Counter (Angka Kunci)

```
- Trigger: ScrollTrigger, start "top 80%"
- Animasi: GSAP countTo dari 0 → nilai akhir, duration 2s, ease: power2.out
- Contoh: "0 MW" → "15 MW" (angka diisi data aktual)
```

#### Section Reveal (Semua Section)

```
- Trigger: ScrollTrigger, start "top 85%"
- Animasi: fadeInUp, y: 40→0, opacity 0→1, duration 0.6s, ease: power2.out
- Card grid: stagger 0.1s antar card
- JANGAN gunakan animasi yang terlalu dramatis (tidak ada flip, rotate, scale besar)
```

#### Service Cards

```
- Default: shadow-sm, border-1 slate-200
- Hover: translateY(-4px), shadow-md, border-color → primary green
- Transition: 250ms cubic-bezier(0.4, 0, 0.2, 1)
- Icon: scale(1.1) saat hover card, 200ms
```

#### Project Cards (Portfolio)

```
- Default: foto penuh, overlay gradient bottom
- Hover: overlay sedikit gelap, teks detail muncul (slide up 200ms)
- Tidak ada animasi 3D/flip — tetap flat dan profesional
```

#### CTA Buttons

```
Primary (green):
- Default: bg-green-900, text-white
- Hover: bg-green-800, shadow-lg, translateY(-1px)
- Active: translateY(0px), shadow-sm
- Transition: 200ms

Secondary (outline):
- Default: border-2 green-900, text-green-900, bg-transparent
- Hover: bg-green-900, text-white
- Transition: 250ms
```

#### Form Inputs

```
- Default: border-slate-200, bg-white
- Focus: border-green-600, ring-2 ring-green-100, outline none
- Error: border-red-400, bg-red-50
- Transition: 150ms
```

### Performa & Aksesibilitas

```
- Semua animasi WAJIB dihormati oleh: @media (prefers-reduced-motion: reduce)
  → Jika aktif, semua GSAP animasi di-skip (duration: 0)
- Tidak ada animasi autoplay video atau GIF berat
- Lazy load semua gambar di bawah fold menggunakan next/image dengan loading="lazy"
- GSAP: Selalu cleanup di useGSAP() return function
- Target Lighthouse score: ≥ 90 (Performance), ≥ 95 (Accessibility)
```

---

## 5. Arsitektur Teknis (Next.js 16 App Router)

### Struktur Folder

```
sagara-yasa-website/
├── app/
│   ├── layout.tsx              # Root layout (font, metadata global)
│   ├── page.tsx                # Home (/)
│   ├── tentang-kami/
│   │   └── page.tsx
│   ├── layanan/
│   │   ├── page.tsx            # Overview
│   │   ├── pembangunan-pltd/page.tsx
│   │   ├── operasional-pemeliharaan/page.tsx
│   │   ├── distribusi-listrik/page.tsx
│   │   └── perdagangan-besar/page.tsx
│   ├── proyek/
│   │   └── page.tsx
│   ├── tata-kelola/
│   │   └── page.tsx
│   └── kontak/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── AboutSnippet.tsx
│   │   ├── ServicesHighlight.tsx
│   │   ├── ProjectsPreview.tsx
│   │   └── CertificationsBar.tsx
│   ├── proyek/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── ProjectMap.tsx
│   ├── layanan/
│   │   └── ServiceDetailLayout.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── Badge.tsx
│       └── AnimatedCounter.tsx
│
├── lib/
│   ├── gsap.ts                 # GSAP instance & plugin registration
│   └── projects.ts             # Data proyek (sementara static, bisa migrasi ke CMS)
│
├── public/
│   ├── images/
│   │   ├── projects/           # Foto proyek lapangan
│   │   ├── certifications/     # Logo sertifikasi
│   │   └── hero/               # Gambar hero section
│   └── favicon.ico
│
├── styles/
│   └── globals.css             # CSS variables, base styles, Tailwind imports
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── Dockerfile
```

### Konfigurasi Tailwind (Extend warna kustom)

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#064e3b",
          dark: "#043d2f",
          light: "#065f46",
        },
        navy: {
          DEFAULT: "#1e3a5f",
          dark: "#152b47",
          light: "#2a4d7a",
        },
        accent: "#f59e0b",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
};
```

### Dockerfile (Production)

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

---

## 6. SEO & Metadata

```typescript
// Contoh metadata per halaman (Next.js App Router)
export const metadata: Metadata = {
  title: "PT. Sagara Yasa Ananta | Solusi PLTD Andal & Bertanggung Jawab",
  description:
    "Perusahaan nasional spesialis pembangunan, operasional, dan distribusi Pembangkit Listrik Tenaga Diesel (PLTD). Bersertifikasi ISO 14001, ISO 45001, dan SMR3.",
  keywords: [
    "PLTD",
    "pembangkit listrik diesel",
    "O&M PLTD",
    "jasa konstruksi ketenagalistrikan",
    "distribusi listrik Indonesia",
  ],
  openGraph: {
    title: "PT. Sagara Yasa Ananta",
    description: "...",
    url: "https://sagarayasaananta.co.id",
    siteName: "PT. Sagara Yasa Ananta",
    locale: "id_ID",
    type: "website",
  },
};
```

---

## 7. Checklist Pra-Launch

### Konten (Wajib Diisi Tim)

- [ ] Data statistik aktual (total MW, jumlah proyek, provinsi)
- [ ] Data proyek untuk halaman Portfolio (minimal 5 proyek)
- [ ] Foto dokumentasi lapangan (resolusi tinggi)
- [ ] Nomor IUPTL, SBUJK, NIB aktual
- [ ] Email dan nomor telepon kantor aktual
- [ ] Logo sertifikasi resolusi tinggi (ISO 14001, ISO 45001, SMR3)

### Teknis

- [ ] Integrasi Google Maps dengan API Key yang valid
- [ ] Konfigurasi form kontak (backend handler atau service seperti Resend/Nodemailer)
- [ ] Environment variables terkonfigurasi di server Docker
- [ ] SSL/TLS aktif di server produksi
- [ ] Robots.txt dan sitemap.xml dikonfigurasi
- [ ] Google Analytics / Plausible terpasang

### QA

- [ ] Test responsivitas: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Lighthouse audit ≥ 90 semua metrik
- [ ] Test animasi di perangkat low-end (cek performa)
- [ ] Test `prefers-reduced-motion` aktif
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge

---

_Dokumen ini versi 2.0. Dibuat berdasarkan Company Profile resmi PT. Sagara Yasa Ananta dan hasil review strategis._
_Terakhir diperbarui: Juni 2026_
