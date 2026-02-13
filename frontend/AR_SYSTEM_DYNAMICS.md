# Atmosphere AR Try-On: System Dynamics

Dokumentasi teknis ini menjelaskan arsitektur dan mekanisme kerja dari fitur Virtual Try-On pada platform AURA.

## 1. Arsitektur Kamera (Vision Pipeline)
Sistem menggunakan API browser standar `navigator.mediaDevices.getUserMedia` untuk mengakses aliran video (video stream) dari webcam pengguna.

- **Initialization**: Sistem mencoba meminta resolusi ideal 1080p dengan `facingMode: "user"`.
- **Validation**: State `isCameraReady` hanya akan aktif setelah event `onLoadedMetadata` terpicu pada tag `<video>`, memastikan tidak ada frame hitam yang ditampilkan.
- **Robust Fallback (Demo Mode)**: Jika akses kamera ditolak, tidak didukung (non-HTTPS), atau hardware tidak ditemukan, sistem secara otomatis beralih ke **Demo Simulation Mode** dalam 2 detik. Ini memastikan pengguna tetap bisa melihat UI dan cara kerja overlay meskipun tanpa input kamera.

## 2. Neural Overlay Mapping (AR Simulation)
Digital clothing dipetakan di atas input video menggunakan layer CSS-absolute dengan proporsi dinamis.

- **Responsive Scaling**: Ukuran pakaian diatur secara persentase (`w-[85%]` di mobile, `w-[40%]` di desktop) untuk mensimulasikan penempatan pada area torso manusia di depan kamera.
- **AnimatePresence**: Menggunakan **Framer Motion** untuk transisi pergantian varian warna yang mulus dan efek spring pada saat inisialisasi.
- **Neural HUD**: Titik-titik tracker (HUD Points) ditambahkan secara kosmetik untuk memberikan kesan "Neural Tracking" yang premium, sesuai dengan identitas brand AURA.

## 3. Capture & Synthesis Engine
Fungsi pengambilan gambar dilakukan dengan mensintesis (merging) dua sumber data ke dalam satu HTML5 Canvas.

- **Frame Merging**: Sistem mengambil frame aktif dari video (atau background demo) dan menggambar ulang overlay pakaian di atas koordinat yang sama persis seperti yang terlihat di layar.
- **Post-Processing**: Menambahkan efek **Drop Shadow** dan **Glow** (via `shadowBlur`) pada canvas sebelum ekspor untuk memberikan kedalaman visual pada foto hasil capture.
- **Watermarking**: Menambahkan watermark "AURA ATMOSPHERE AR" secara otomatis pada hasil download sebagai bagian dari branding.

## 4. Spesifikasi Teknis
- **UI Stack**: Next.js (App Router), Tailwind CSS, Framer Motion.
- **Logic**: React Hooks (useRef, useEffect, useState).
- **Format Output**: PNG (high quality).
- **Responsive Layering**: Mobile-first perspective.

---
*Dikembangkan untuk AURA Core Edition v1.04*
