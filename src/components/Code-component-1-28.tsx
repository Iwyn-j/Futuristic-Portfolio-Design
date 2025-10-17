import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const sectors = ['All', 'Web Development', 'Machine Learning', 'Security', 'Mobile Development', 'Data Science'];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Code Review Assistant',
    description: 'Intelligent code analysis tool that provides automated code reviews, suggests improvements, and detects potential security vulnerabilities using machine learning.',
    image: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc0NjQ0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
    sector: 'Machine Learning',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Secure Chat Application',
    description: 'End-to-end encrypted messaging platform with advanced security features including zero-knowledge architecture and secure key exchange protocols.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
    technologies: ['React Native', 'Node.js', 'WebRTC', 'OpenSSL', 'Redis'],
    sector: 'Security',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time updates, predictive analytics, and customizable reporting features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    technologies: ['React', 'D3.js', 'Python', 'Apache Kafka', 'PostgreSQL'],
    sector: 'Data Science',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with microservices architecture, payment integration, and advanced inventory management system.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
    technologies: ['Next.js', 'Express.js', 'Stripe', 'Docker', 'AWS'],
    sector: 'Web Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform mobile application for fitness tracking with AI-powered workout recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'Redux'],
    sector: 'Mobile Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Network Intrusion Detection System',
    description: 'Advanced security tool that monitors network traffic patterns and uses machine learning to detect potential threats in real-time.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500',
    technologies: ['Python', 'Scikit-learn', 'Wireshark', 'Linux', 'C++'],
    sector: 'Security',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  }
];

export function ProjectsSection() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = selectedSector === 'All' 
    ? projects 
    : projects.filter(project => project.sector === selectedSector);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across different sectors of computer science
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">All Projects</h3>
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <Button
                  key={sector}
                  variant={selectedSector === sector ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSector(sector)}
                  className="transition-all duration-200"
                >
                  {sector}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.githubUrl}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary">{project.sector}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={project.featured ? 'default' : 'secondary'}>
                        {project.sector}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}