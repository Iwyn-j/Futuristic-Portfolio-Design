import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FuturisticBackground } from './FuturisticBackground';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Iwyn_Joseph_CV.pdf';
    link.download = 'Iwyn_Joseph_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-6 mt-8"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <ImageWithFallback
                    src="/IMG_1041.JPG"
                    alt="Iwyn Joseph"
                    className="w-full h-full object-cover rounded-full object-[center_30%]"
                  />
                </div>
                
                {/* Status indicator */}
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
              Data Driven Developer & Full Stack Developer
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