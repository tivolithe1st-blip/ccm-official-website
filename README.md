# Central College Maharagama — Official Web Portal & Serverless CMS

Official responsive website and custom inline Content Management System (CMS) developed for **Central College Maharagama** (Type 1AB National School, Western Province, Sri Lanka) under the **TRCSL & Ministry of Education ICT Volunteer Initiative**.

## 🚀 Live Deployment
🔗 **Live Website:** [https://ccm-official-website.vercel.app](https://ccm-official-website.vercel.app)

## ✨ Key Engineering Features
- **Zero-Backend Inline CMS:** Custom administrative Edit Mode allowing non-technical school staff to edit text, statistics, academic streams, sports cards, and club profiles directly on the live DOM (`contentEditable` + dynamic array state).
- **Client-Side Canvas Image Compression:** Built-in HTML5 `<canvas>` compression pipeline that resizes and compresses local PC photos into lightweight Base64 payloads (~50 KB), enabling direct PC-to-cloud image uploads into Firestore without external image hosts or paid cloud storage buckets.
- **Real-Time Cloud Persistence:** Powered by **Firebase Cloud Firestore** (`pages/home` and `news` collections) with role-guarded security rules (`allow read: if true; allow write: if request.auth != null;`).
- **Dynamic News & Bulletin Engine:** Full CRUD news publishing modal with multi-photo gallery carousels and fullscreen lightbox viewing.
- **Responsive Architecture:** Styled with **Tailwind CSS**, custom typography (*Playfair Display*, *Montserrat*, *Noto Sans Sinhala*, *Abhaya Libre*), and a mobile hamburger navigation system.

## 🛠️ Tech Stack
- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6 Modules)
- **Backend / Database:** Google Firebase (Authentication & Cloud Firestore)
- **Deployment:** Vercel & GitHub

## 👨‍💻 Developer
**Chanitha Samarasinghe** ([@tivolithe1st-blip](https://github.com/tivolithe1st-blip))  
Department of Electronic & Telecommunication Engineering (ENTC), University of Moratuwa
