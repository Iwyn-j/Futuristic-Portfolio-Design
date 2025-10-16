# Iwyn Joseph - Portfolio

A modern, responsive portfolio website showcasing my work as a Data Driven Developer & Full Stack Developer.

## 🚀 Live Demo

Visit the live portfolio: [https://iwyn-joseph.github.io/iwyn-joseph-portfolio](https://iwyn-joseph.github.io/iwyn-joseph-portfolio)

## ✨ Features

- **Modern Design**: Futuristic, dark-themed UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Featured projects with detailed descriptions
- **Skills Section**: Comprehensive technical skills display
- **Experience Timeline**: Professional experience with achievements
- **Education**: Academic background and achievements

## 🛠️ Technologies Used

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend & Services
- **EmailJS** for contact form functionality
- **GitHub Pages** for hosting

### UI Components
- **Radix UI** components for accessibility
- **Custom component library** with professional styling

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx # Landing section
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── SkillsSection.tsx # Skills display
│   ├── ExperienceSection.tsx # Work experience
│   ├── EducationSection.tsx # Education background
│   └── ContactSection.tsx # Contact form
├── config/             # Configuration files
├── assets/            # Images and static files
└── styles/            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iwyn-joseph/iwyn-joseph-portfolio.git
cd iwyn-joseph-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Configuration

### EmailJS Setup
To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the configuration in `src/config/emailjs.ts`:
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id', 
  PUBLIC_KEY: 'your_public_key'
};
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. 

### Manual Deployment
```bash
npm run deploy
```

## 📱 Mobile Responsive

The portfolio is fully optimized for mobile devices with:
- Touch-friendly navigation
- Responsive typography
- Optimized images
- Mobile-first design approach

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: Iwyn2002@gmail.com
- **LinkedIn**: [iwyn-joseph](https://linkedin.com/in/iwyn-joseph)
- **GitHub**: [iwyn-joseph](https://github.com/iwyn-joseph)

---

⭐ If you like this portfolio, please give it a star!