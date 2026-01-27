# Muhammad Mehdi Raza - Portfolio

A professional, single-page portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Optimized for Vercel deployment with HCI principles: F-pattern scannability, high-contrast typography, and intuitive interactions.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **Modern Design** - Minimalist Slate/Zinc palette with Royal Blue accent
- **Glassmorphism Navbar** - Fixed navigation with backdrop blur
- **Smooth Animations** - Subtle 200ms fade/scale transitions with Framer Motion
- **Bento Grid Projects** - Responsive grid layout for project showcase
- **Mobile-First** - Fully responsive design that stacks perfectly on mobile
- **SEO Optimized** - Proper meta tags, semantic HTML, and Open Graph support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & utilities
│   ├── layout.tsx       # Root layout with fonts & metadata
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── Navbar.tsx       # Glassmorphism navigation
│   ├── AnimatedSection.tsx
│   ├── ExperienceCard.tsx
│   ├── ProjectCard.tsx
│   ├── CertificationSection.tsx
│   ├── TechStack.tsx
│   └── Footer.tsx
└── lib/
    └── constants.ts     # ⬅️ EDIT YOUR DATA HERE
```

## 🔧 Customization

### 1. Update Your Information

Edit `src/lib/constants.ts` to add your:

- **Personal Info** - Name, title, tagline, email, GitHub, LinkedIn
- **Certificate Paths** - Add images to `/public/certificates/`
- **Project Thumbnails** - Add images to `/public/projects/`
- **GitHub Links** - Update repository URLs
- **Experience Data** - Modify work history
- **Certifications** - Update Coursera certs and hackathon achievements
- **Tech Stack** - Add/remove technologies

### 2. Add Your Images

```
public/
├── certificates/
│   ├── research-cert-1.png
│   ├── research-cert-2.png
│   ├── research-cert-3.png
│   └── hackathon-achievements.pdf
└── projects/
    ├── streamify.png
    ├── crowdserve.png
    ├── sehatsathi.png
    └── digit-recognition.png
```

### 3. Customize Colors

Edit `tailwind.config.ts` to change the color palette:

```ts
colors: {
  accent: {
    DEFAULT: "#3b82f6", // Change to your preferred accent color
    // ...
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

```bash
# Or use Vercel CLI
npx vercel
```

## 📝 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ by Muhammad Mehdi Raza
