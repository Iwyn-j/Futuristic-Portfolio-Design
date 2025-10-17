import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const sectors = ['All', 'Web Development', 'Machine Learning', 'Data Science', 'Mobile Development'];

const projects = [
  {
    id: 1,
    title: 'SWIIMS - Saudi Water Infrastructure Information Management System',
    description: 'Comprehensive water infrastructure management and forecasting platform for the Saudi Water Authority. Full-stack web application providing advanced water demand forecasting, infrastructure management, scenario modeling, and real-time analytics for water distribution networks across 13 Saudi regions.',
    detailedDescription: 'SWIIMS is a mission-critical enterprise system designed to revolutionize water infrastructure management in Saudi Arabia. The platform integrates advanced data science algorithms with modern web technologies to provide comprehensive water demand forecasting, infrastructure asset management, and scenario planning capabilities. The system serves as the central hub for water authorities to make data-driven decisions about water distribution, infrastructure investments, and resource planning.',
    challenges: [
      'Processing large-scale geographic and temporal water data across 13 regions',
      'Implementing real-time analytics with sub-second response times',
      'Building scalable infrastructure to handle enterprise-level data volumes',
      'Integrating multiple data sources including sensors, historical records, and external APIs',
      'Ensuring system reliability and security for critical infrastructure operations'
    ],
    results: [
      'Successfully deployed across 13 Saudi regions with 99.9% uptime',
      'Reduced water demand forecasting errors by 40% through advanced algorithms',
      'Enabled real-time monitoring of 1000+ water infrastructure assets',
      'Improved decision-making efficiency by 60% through interactive dashboards',
      'Generated comprehensive reports for strategic water planning initiatives'
    ],
    duration: '2 months',
    teamSize: 'Lead Developer & Consultant',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1080&h=720&fit=crop&crop=center&auto=format&q=80',
    technologies: ['FastAPI', 'React 19.1.0', 'SQLite/SQLAlchemy', 'JWT Authentication', 'Chart.js', 'Leaflet Maps', 'Docker', 'Redis', 'Pandas', 'OpenAPI/Swagger', 'GeoJSON', 'XLSX/CSV Processing'],
    sector: 'Data Science',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Reversible Watermarking Techniques for Encrypted Images',
    description: 'Developed advanced algorithms for reversible watermarking in encrypted images, ensuring data integrity. Implemented two watermarking techniques with GUI for visualization and performance evaluation.',
    detailedDescription: 'This project focused on developing secure watermarking algorithms for encrypted images, addressing the critical need for data integrity verification in digital forensics and secure communications. The system implements two distinct watermarking techniques: LSB (Least Significant Bit) and DCT (Discrete Cosine Transform) based approaches, each optimized for different use cases.',
    challenges: [
      'Maintaining image quality while embedding watermarks',
      'Ensuring reversibility without data loss',
      'Optimizing performance for large image datasets',
      'Implementing robust error detection mechanisms'
    ],
    results: [
      'Achieved 99.8% watermark extraction accuracy',
      'Maintained PSNR values above 40dB for image quality',
      'Reduced processing time by 35% through algorithm optimization',
      'Successfully tested on 1000+ diverse image samples'
    ],
    duration: '4 months',
    teamSize: 'Solo Project',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&h=720&fit=crop&crop=center&auto=format&q=80',
    technologies: ['Python', 'Image Processing', 'GUI Development', 'PSNR Analysis', 'BER Metrics', 'OpenCV', 'NumPy', 'Matplotlib'],
    sector: 'Data Science',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Intelligent Construction Chatbot',
    description: 'AI-powered chatbot for a construction company using Langchain and OpenAI API, enabling 24/7 intelligent query handling. Implemented semantic search with custom vector database.',
    detailedDescription: 'Developed a comprehensive AI chatbot solution for a construction company to handle customer inquiries, project updates, and technical support. The system integrates multiple AI technologies including natural language processing, semantic search, and knowledge base management to provide accurate, contextual responses.',
    challenges: [
      'Processing complex construction terminology and jargon',
      'Integrating multiple data sources and APIs',
      'Ensuring response accuracy and consistency',
      'Handling multilingual queries and regional variations'
    ],
    results: [
      'Reduced customer response time from 24 hours to under 2 minutes',
      'Achieved 92% customer satisfaction rate',
      'Handled 500+ daily queries with 88% resolution rate',
      'Integrated with 15+ construction databases and APIs'
    ],
    duration: '3 months',
    teamSize: '3 developers',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1080&h=720&fit=crop&crop=center&auto=format&q=80',
    technologies: ['Langchain', 'OpenAI API', 'Vector Database', 'Web Scraping', 'Semantic Search', 'FastAPI', 'PostgreSQL', 'Docker'],
    sector: 'Machine Learning',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Automated Awareness Safety System (AWAS)',
    description: 'Real-time streaming analytics application simulating Malaysia\'s AWAS system. Built robust data pipelines to process high-volume camera sensor data for speed violation detection.',
    detailedDescription: 'Built a comprehensive real-time analytics platform simulating Malaysia\'s Automated Awareness Safety System (AWAS) for traffic monitoring and speed violation detection. The system processes high-volume data streams from multiple camera sensors, applies machine learning algorithms for vehicle detection and speed calculation, and generates real-time alerts and reports.',
    challenges: [
      'Processing 10,000+ data points per second in real-time',
      'Ensuring system reliability and fault tolerance',
      'Implementing accurate speed detection algorithms',
      'Managing data storage and retrieval for historical analysis'
    ],
    results: [
      'Processed 2.5M+ data points daily with 99.9% uptime',
      'Achieved 96% accuracy in speed violation detection',
      'Reduced false positive rate to less than 2%',
      'Generated real-time dashboards with sub-second latency'
    ],
    duration: '6 months',
    teamSize: '5 developers',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1080&h=720&fit=crop&crop=center&auto=format&q=80',
    technologies: ['Python', 'Apache Kafka', 'MongoDB', 'Real-time Analytics', 'Data Visualization', 'Apache Spark', 'Redis', 'Grafana'],
    sector: 'Data Science',
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Career Recommendation Engine',
    description: 'Personalized career recommendation system using TensorFlow.js and Universal Sentence Encoder. Built as part of full-stack React application with Firebase integration.',
    detailedDescription: 'Developed a comprehensive career recommendation platform that analyzes user skills, interests, and career goals to provide personalized career path suggestions. The system uses advanced NLP techniques with Universal Sentence Encoder for semantic similarity matching and integrates with multiple job market APIs for real-time career data.',
    challenges: [
      'Processing and analyzing diverse career data sources',
      'Implementing accurate semantic similarity matching',
      'Creating intuitive user interface for career exploration',
      'Ensuring recommendations are relevant and actionable'
    ],
    results: [
      'Generated recommendations for 10,000+ career paths',
      'Achieved 78% user satisfaction with recommendations',
      'Integrated with 5+ job market APIs for real-time data',
      'Reduced career exploration time by 65% for users'
    ],
    duration: '4 months',
    teamSize: '2 developers',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1080&h=720&fit=crop&crop=center&auto=format&q=80',
    technologies: ['TensorFlow.js', 'React', 'Firebase', 'Universal Sentence Encoder', 'PDF Export', 'Node.js', 'MongoDB', 'Chart.js'],
    sector: 'Web Development',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Procurement Analytics Dashboard',
    description: 'Interactive Power BI dashboards for procurement and supply chain analytics. Automated data workflows reducing manual reporting time by over 50%.',
    detailedDescription: 'Designed and implemented comprehensive procurement analytics solution for Estée Lauder Companies, featuring interactive Power BI dashboards, automated data pipelines, and advanced analytics capabilities. The system processes procurement data from multiple sources, applies machine learning algorithms for demand forecasting, and provides actionable insights for supply chain optimization.',
    challenges: [
      'Integrating data from 20+ procurement systems',
      'Ensuring data quality and consistency across sources',
      'Creating intuitive dashboards for non-technical users',
      'Implementing real-time data processing and updates'
    ],
    results: [
      'Reduced manual reporting time by 50% (from 40 hours to 20 hours weekly)',
      'Improved procurement efficiency by 25% through data-driven insights',
      'Generated 15+ interactive dashboards for different stakeholder groups',
      'Processed 1M+ procurement transactions monthly with 99.5% accuracy'
    ],
    duration: '5 months',
    teamSize: '4 developers + 2 analysts',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1080&h=720&fit=crop&crop=center&auto=format&q=80',
    technologies: ['Power BI', 'Python', 'SQL', 'DAX', 'Supply Chain Analytics', 'Azure Data Factory', 'SSIS', 'Tableau'],
    sector: 'Data Science',
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  }
];

export function ProjectsSection() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = selectedSector === 'All' 
    ? projects.filter(project => !project.featured) 
    : projects.filter(project => project.sector === selectedSector && !project.featured);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
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
                <Card className="h-full overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-border/50 hover:border-blue-500/40 rounded-xl backdrop-blur-sm hover:-translate-y-2">
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
                    <CardDescription className="mb-3">{project.description}</CardDescription>
                    
                    {/* Project Details */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Duration:</span>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Team Size:</span>
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
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
                <Card className="h-full overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border border-border/50 hover:border-blue-500/30 rounded-xl backdrop-blur-sm hover:-translate-y-1">
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
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">{project.sector}</Badge>
                    </div>
                    <CardDescription className="text-sm mb-3">
                      {project.description}
                    </CardDescription>
                    
                    {/* Project Details */}
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Duration:</span>
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Team:</span>
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
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