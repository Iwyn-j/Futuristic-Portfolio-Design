import { motion } from 'motion/react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    description: 'Led development of AI-powered web applications using React, Node.js, and Python. Implemented machine learning models for predictive analytics and automated decision-making systems.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'MongoDB'],
    achievements: [
      'Increased application performance by 40% through optimization',
      'Led a team of 5 developers on critical projects',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    id: 2,
    company: 'DataFlow Analytics',
    position: 'Machine Learning Engineer',
    location: 'New York, NY',
    duration: '2020 - 2022',
    description: 'Developed and deployed machine learning models for real-time data processing. Built scalable data pipelines and implemented computer vision solutions for automated quality control.',
    technologies: ['Python', 'PyTorch', 'Apache Kafka', 'Docker', 'Kubernetes', 'PostgreSQL'],
    achievements: [
      'Developed ML models with 95% accuracy for image classification',
      'Built real-time data processing systems handling 1M+ events/day',
      'Reduced manual quality control processes by 80%'
    ]
  },
  {
    id: 3,
    company: 'CyberSecure Inc',
    position: 'Security Software Developer',
    location: 'Austin, TX',
    duration: '2018 - 2020',
    description: 'Designed and implemented security engineering solutions including threat detection systems and secure authentication protocols. Conducted security audits and vulnerability assessments.',
    technologies: ['C++', 'Java', 'Python', 'OpenSSL', 'Wireshark', 'Linux'],
    achievements: [
      'Developed intrusion detection system with 99.5% accuracy',
      'Implemented zero-trust authentication protocols',
      'Conducted security audits for 50+ enterprise clients'
    ]
  },
  {
    id: 4,
    company: 'StartupHub',
    position: 'Junior Developer',
    location: 'Boston, MA',
    duration: '2017 - 2018',
    description: 'Full-stack web development using modern frameworks. Contributed to mobile app development and database design. Participated in agile development processes.',
    technologies: ['JavaScript', 'React', 'Express.js', 'MySQL', 'Git', 'AWS'],
    achievements: [
      'Built responsive web applications for 10+ clients',
      'Contributed to mobile app with 50K+ downloads',
      'Improved code quality through peer reviews and testing'
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
            A journey through various domains of computer science, from web development to AI and security engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

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
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
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