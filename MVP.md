# 🧸 MVP - Website Pembelajaran Interaktif

## 🎯 Tujuan
Membangun website pembelajaran interaktif berbasis HTML, CSS, dan JavaScript dengan tampilan modern, fun, dan user friendly untuk anak-anak maupun pemula.

Platform memiliki 4 materi utama:
- Roblox
- Website Development
- Scratch
- Design

Website menggunakan maskot beruang sebagai identitas visual utama.

---

# 🧱 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Local JSON Data / Static Data
- Optional:
  - AOS Animation
  - Swiper.js
  - GSAP

---

# 🎨 Design System

## Color Palette

### Primary Colors
- Hijau: `#22C55E`
- Biru Dongker: `#0F172A`
- Kuning: `#FACC15`

### Neutral
- Putih: `#FFFFFF`
- Abu muda: `#F8FAFC`
- Abu teks: `#64748B`

---

# 🧸 Branding

## Maskot
- Karakter utama: Beruang
- Style:
  - Friendly
  - Cute
  - Edukatif
  - Modern flat illustration

Maskot digunakan pada:
- Hero section
- Empty state
- Loading section
- Materi cards
- Footer

---

# 📚 Struktur Materi

## 1. Roblox
Belajar membuat game Roblox step-by-step.

## 2. Website Development
Belajar HTML, CSS, dan JavaScript melalui project.

## 3. Scratch
Belajar coding visual menggunakan Scratch.

## 4. Design
Belajar desain poster, UI, dan ilustrasi dasar.

---

# 🔥 Core Features

## 1. Landing Page
Menampilkan:
- Hero section
- Materi utama
- Maskot beruang
- CTA mulai belajar

---

## 2. Materi List
Setiap materi memiliki:
- Thumbnail
- Judul
- Deskripsi singkat
- Tombol buka materi

---

## 3. Detail Materi
Setiap materi memiliki:
- Judul
- Penjelasan
- Gambar
- Video
- Step-by-step tutorial

---

## 4. Media Support
Content dapat berupa:
- Teks
- Gambar
- Video embed
- YouTube iframe

---

## 5. Step Navigation
- Next step
- Previous step
- Progress indicator

---

# 🖥️ Struktur Project

```plaintext
/project
│
├── index.html
├── materi.html
├── detail.html
│
├── /css
│   └── style.css
│
├── /js
│   ├── app.js
│   ├── data.js
│   └── navigation.js
│
├── /assets
│   ├── /images
│   ├── /videos
│   └── /mascot

📄 Data Structure
Materi Object
const materials = [
  {
    id: 1,
    category: "Roblox",
    title: "Membuat Obby Game",
    description: "Belajar membuat game obby sederhana",
    thumbnail: "image.jpg",
    steps: [
      {
        title: "Membuat Base",
        content: "Tambahkan part...",
        image: "step1.jpg",
        video: "youtube-link"
      }
    ]
  }
];
🧭 User Flow
User membuka website
Melihat 4 materi utama
Klik salah satu materi
Membuka daftar pembelajaran
Membuka step tutorial
Melihat teks, gambar, dan video
Navigasi next/previous
✨ UI/UX Guidelines
Design Style
Modern
Fun
Clean
Rounded UI
Soft shadow
Large spacing
UX Rules
Navigasi sederhana
Mobile friendly
Responsive
Fast loading
CTA jelas
Animation

Gunakan animasi ringan:

Hover cards
Floating mascot
Fade in section
Smooth transition
🧸 Mascot Usage

Maskot beruang digunakan untuk:

Menyambut user
Memberi tips belajar
Loading state
Empty content
Achievement section
📱 Responsive Design

Support:

Mobile
Tablet
Desktop

Breakpoint:

Mobile: < 768px
Tablet: 768px
Desktop: > 1024px
🚀 Future Improvements
Login system
Save progress
Quiz
Achievement badge
Dark mode
Admin CMS
✅ MVP Success Criteria
User bisa membuka materi
User bisa melihat step tutorial
Video & gambar tampil dengan baik
UI menarik dan mudah digunakan
Responsive di semua device