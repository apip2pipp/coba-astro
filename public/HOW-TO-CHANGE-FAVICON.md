# Cara Ganti Favicon (Icon di Tab Browser)

## 🎨 Option 1: Ganti File Favicon.svg (Paling Cepat)

1. Buat/siapkan icon Anda (format SVG)
2. Ganti file `public/favicon.svg` dengan icon baru
3. Refresh browser (Ctrl+F5)

## 🎨 Option 2: Multiple Format (Rekomendasi)

Untuk support semua device dan browser:

### File yang dibutuhkan di folder `public/`:

- **favicon.svg** (32x32 atau 64x64) - untuk browser modern
- **favicon-32x32.png** - untuk Windows
- **favicon-16x16.png** - untuk browser lama
- **apple-touch-icon.png** (180x180) - untuk iOS/iPad

### 📥 Cara Membuat:

**Opsi A: Online Generator (Termudah)**
1. Buka: https://realfavicongenerator.net/
2. Upload logo/icon Anda
3. Download hasil generate
4. Copy semua file ke folder `public/`

**Opsi B: Manual**
1. Buat icon di Figma/Photoshop/Illustrator
2. Export format:
   - SVG (vector)
   - PNG 32x32px
   - PNG 16x16px  
   - PNG 180x180px (untuk Apple)
3. Copy ke folder `public/`

### 🔧 Tips:

- Format SVG lebih bagus (scalable)
- Gunakan warna solid yang terlihat di background terang & gelap
- Icon sederhana lebih baik (detail kecil tidak terlihat)
- Test di berbagai browser

### ✨ Icon Idea untuk Portfolio:

- Inisial "K" atau "Z" dengan design modern
- Logo bulat seperti di header Anda
- Simbol yang represent design/coding
- Kombinasi huruf dengan shape geometris

## 🚀 Sudah Disetup:

Layout.astro sudah diupdate untuk support multiple favicon format!
Tinggal add file-file icon di folder `public/`
