import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from '@/assets/IMG_1041.JPG';
import { FuturisticBackground } from './FuturisticBackground';

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
            {/* Profile Image: single element with responsive sizes to ensure perfect circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mb-6 mt-16 sm:mt-8"
            >
              <div className="relative mx-auto">
                <div className="w-[88px] h-[88px] sm:w-48 sm:h-48 md:w-56 md:h-56 aspect-square shrink-0 rounded-full overflow-hidden border border-border shadow-md" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
                  <ImageWithFallback
                    src={profileImage}
                    alt="Iwyn Joseph"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Status indicator visible on tablet/desktop only */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="hidden sm:block absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 border-2 sm:border-4 border-background rounded-full"
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
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Sharjah, UAE</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">UAE Golden Visa Holder</span>
              </div>
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
              Data Driven Developer
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
                Download CV
              </Button>
              {/* Direct PDF link for mobile */}
              <a 
                href="https://drive.google.com/file/d/1h1mqZr4qqgXlFGZU7TgyeA8bacBpja4i/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sm:hidden w-full h-12 px-8 border-2 border-border hover:bg-accent/50 transition-all duration-300 rounded-lg flex items-center justify-center text-sm font-medium"
              >
                View CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.35 }}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:Iwyn2002@gmail.com", label: "Email" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + index * 0.08, duration: 0.25 }}
                    className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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