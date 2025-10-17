import { motion } from 'motion/react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    id: 0,
    company: 'Flydubai',
    position: 'Data Analytics Intern – Internal Audit Department',
    location: 'Dubai, UAE',
    duration: '[Month Year – Present]',
    description: 'Built analytics solutions to support internal audit investigations and executive reporting. Automated ETL processes, centralized data from Oracle sources, and delivered stakeholder-ready dashboards that surfaced operational risks and financial gaps.',
    technologies: ['KNIME', 'Oracle SQL', 'Tableau', 'Python', 'ETL Pipelines', 'Data Modeling'],
    achievements: [
      'Developed dynamic ETL pipelines in KNIME to clean/transform aviation audit data, cutting manual prep and improving workflow reliability',
      'Queried and validated millions of rows from Oracle databases using SQL for audit testing and reconciliations',
      'Designed and published interactive Tableau dashboards for non-technical stakeholders to visualize audit findings and financial insights',
      'Partnered with internal audit to craft data stories that revealed a major revenue gap, contributing to substantial cost savings',
      'Established data quality checks and documentation improving audit reproducibility and governance'
    ]
  },
  {
    id: 1,
    company: 'Saudi Water Authority (SWA)',
    position: 'Full-Stack Developer & Data Science Consultant',
    location: 'Riyadh, Saudi Arabia',
    duration: 'Aug 2024 - Present',
    description: 'Leading the development of SWIIMS (Saudi Water Infrastructure Information Management System), a comprehensive water infrastructure management and forecasting platform. Built full-stack web application with advanced water demand forecasting, infrastructure management, and real-time analytics for water distribution networks across 13 Saudi regions.',
    technologies: ['FastAPI', 'React 19.1.0', 'SQLite/SQLAlchemy', 'JWT Authentication', 'Chart.js', 'Leaflet Maps', 'Docker', 'Redis', 'Pandas', 'OpenAPI/Swagger'],
    achievements: [
      'Developed advanced water demand forecasting algorithms for 13 Saudi regions',
      'Built comprehensive infrastructure management system for water networks',
      'Implemented real-time analytics dashboards with interactive data visualization',
      'Created scenario modeling capabilities for water planning and decision-making',
      'Designed role-based access control system with granular permissions',
      'Integrated geographic data processing with GeoJSON and mapping solutions'
    ]
  },
  {
    id: 2,
    company: 'Estée Lauder Companies',
    position: 'Procurement Reporting Analytics Intern',
    location: 'Kuala Lumpur, Malaysia',
    duration: 'Nov 2024 - Mar 2025',
    description: 'Automated procurement reporting workflows using Python and SQL, reducing manual reporting time by over 50%. Designed and implemented interactive Power BI dashboards to visualize procurement and supply chain KPIs.',
    technologies: ['Python', 'SQL', 'Power BI', 'DAX', 'Supply Chain Analytics', 'Process Automation'],
    achievements: [
      'Reduced manual reporting time by over 50% through automation',
      'Enhanced decision-making for four regional teams with interactive dashboards',
      'Established scalable data models supporting real-time analytics',
      'Collaborated with global IT and supply chain teams across regions'
    ]
  },
  {
    id: 3,
    company: 'Cambridge Innovation Solutions (CIS)',
    position: 'Machine Learning and Full Stack Developer Intern',
    location: 'Remote',
    duration: 'June 2024 - Sep 2024',
    description: 'Developed a personalized career recommendation engine using TensorFlow.js with Universal Sentence Encoder. Built a full-stack React application with Firebase Authentication, Firestore, and Realtime Database.',
    technologies: ['TensorFlow.js', 'React', 'Firebase', 'Universal Sentence Encoder', 'React Router', 'Firestore'],
    achievements: [
      'Integrated semantic similarity computation for dynamic career path suggestions',
      'Implemented protected routes and authentication systems',
      'Built interactive dashboards with exportable PDF recommendations',
      'Engineered scalable frontend logic with context-based state management'
    ]
  },
  {
    id: 4,
    company: 'Art Dubai',
    position: 'Digital Product Assistant',
    location: 'Dubai, UAE',
    duration: 'Dec 2023 - Mar 2024',
    description: 'Led user testing sessions for mobile and web platforms, identifying critical usability issues. Collaborated with development and media teams to implement Google Analytics pixel tracking and monitor campaign performance.',
    technologies: ['Google Analytics', 'User Testing', 'Digital Products', 'Campaign Monitoring', 'Technical Support'],
    achievements: [
      'Identified and resolved critical usability issues ahead of event launches',
      'Implemented pixel tracking for campaign performance optimization',
      'Provided technical support resolving over 100 app-related queries',
      'Ensured seamless digital experience during the fair'
    ]
  },
  {
    id: 5,
    company: 'Art Dubai',
    position: 'App Assistant Trainee',
    location: 'Dubai, UAE',
    duration: 'Jan 2023 - Mar 2023',
    description: 'Created and refined UI/UX mock-ups using Figma, contributing to feature rollouts and interface enhancements. Managed WordPress content updates and assisted with bug identification and reporting.',
    technologies: ['Figma', 'UI/UX Design', 'WordPress', 'Bug Testing', 'Documentation'],
    achievements: [
      'Created UI/UX mock-ups contributing to feature rollouts',
      'Managed WordPress content updates and bug reporting',
      'Resolved user queries during Art Dubai event',
      'Documented team communications and organized internal resources'
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through various domains of computer science, from web development to AI and data science
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-px h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-60"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background shadow-lg z-10"></div>

                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border border-border/50 hover:border-blue-500/30 rounded-xl backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{experience.position}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {experience.company}
                          </CardDescription>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground" />
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}