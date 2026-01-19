import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { FuturisticBackground } from './FuturisticBackground';

const profileImage = '/IMG_1041.JPG';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = async () => {
    // Google Drive shareable link
    const googleDriveUrl = 'https://drive.google.com/file/d/1h1mqZr4qqgXlFGZU7TgyeA8bacBpja4i/view?usp=sharing';
    const directDownloadUrl = 'https://drive.google.com/uc?export=download&id=1h1mqZr4qqgXlFGZU7TgyeA8bacBpja4i';
    
    try {
      // For mobile devices, open in new tab for viewing
      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open(googleDriveUrl, '_blank');
        return;
      }
      
      // Desktop: try to download directly from Google Drive
      const response = await fetch(directDownloadUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch PDF from Google Drive');
      }
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Iwyn_Joseph_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the object URL
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(googleDriveUrl, '_blank');
    }
  };

  // Track mobile viewport on client to conditionally render contact details
  const [isMobile, setIsMobile] = React.useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  React.useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 640);
    }

    window.addEventListener('resize', onResize);
    // run once to initialize
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="hero" className="min-h-screen scroll-mt-20 sm:scroll-mt-24 flex items-center justify-center relative overflow-hidden">
      {/* Futuristic Background */}
      <FuturisticBackground />

      <div className="w-full max-w-6xl mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile Image: hidden on mobile, visible on larger screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mb-6 mt-12 sm:mt-8 hidden sm:block"
            >
              <div className="relative mx-auto">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-border shadow-md">
                  <img
                    src={profileImage}
                    alt="Iwyn Joseph"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status indicator visible on tablet/desktop only */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-background rounded-full"
                >
                  <div className="w-full h-full bg-green-500 rounded-full animate-pulse" />
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col space-y-2 text-center lg:text-left"
            >
              {!isMobile && (
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Dubai, UAE</span>
                </div>
              )}
              {!isMobile && (
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">UAE & Saudi Arabia Resident</span>
                </div>
              )}
              {!isMobile && (
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Iwyn2002@gmail.com</span>
                </div>
              )}
              {!isMobile && (
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+971 55 433 9054 / +966 50 266 7268</span>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="mb-4"
            >
              <span className="text-lg text-muted-foreground">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left"
            >
              Iwyn Joseph
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-foreground/90 text-center lg:text-left"
            >
              Data Science, Developer & Digital Transformation
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-center lg:text-left"
            >
              Computer Science graduate majoring in Data Science, with hands-on experience in analytics, automation, and scalable solutions. 
              Skilled in transforming big data into operational insights across diverse industries.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Button 
                variant="default" 
                size="lg" 
                onClick={scrollToProjects}
                className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadCV}
                className="w-full sm:w-auto h-12 px-8 border-2 hover:bg-accent/50 transition-all duration-300"
              >
                View CV
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                asChild
                className="w-full sm:w-auto h-12 px-8 border-2 border-border hover:border-blue-500/60 hover:bg-accent/40 transition-all duration-300"
              >
                <a 
                  href="https://www.linkedin.com/in/iwyn-joseph-5a5768258/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Availability Badge – below primary actions */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.35 }}
              className="flex justify-center lg:justify-start"
            >
              <div
                className="w-full sm:w-auto max-w-md inline-flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  border: '1px solid rgba(52, 211, 153, 0.45)',
                  background:
                    'linear-gradient(90deg, rgba(16,185,129,0.16) 0%, rgba(20,184,166,0.10) 55%, rgba(6,182,212,0.12) 100%)',
                  boxShadow: '0 10px 26px rgba(16,185,129,0.20)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: 'rgb(110, 231, 183)',
                    boxShadow: '0 0 0 3px rgba(16,185,129,0.28)',
                    animation: 'pulse 1.6s ease-in-out infinite',
                  }}
                />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/95">
                    Available for Work
                  </span>
                  <span className="text-xs text-white/75">
                    Open to new opportunities and freelance projects
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer group"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                Scroll down
              </span>
              <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}