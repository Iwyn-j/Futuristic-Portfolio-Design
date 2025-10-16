import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const education = [
  {
    id: 1,
    institution: 'Monash University Malaysia',
    degree: 'Bachelor of Computer Science',
    major: 'Major in Data Science',
    location: 'Subang Jaya, Malaysia',
    period: 'Oct 2021 - Jun 2025',
    achievement: 'High Achievers Merit Scholarship Recipient',
    description: 'Comprehensive program covering data science fundamentals, machine learning, statistical analysis, and software engineering principles.',
    highlights: [
      'Merit Scholarship for Academic Excellence',
      'Specialization in Data Science and Analytics',
      'Hands-on experience with industry-standard tools',
      'Capstone projects in ML and AI applications'
    ]
  },
  {
    id: 2,
    institution: 'Our Own English High School',
    degree: 'High School Diploma',
    major: 'CBSE Curriculum',
    location: 'Sharjah, UAE',
    period: 'Graduated: 2021',
    achievement: 'Final Grade: 92%',
    description: 'Strong foundation in mathematics, sciences, and analytical thinking, preparing for advanced studies in computer science.',
    highlights: [
      'Exceptional academic performance (92%)',
      'Strong foundation in Mathematics and Sciences',
      'Leadership roles in academic projects',
      'Excellence in analytical and problem-solving skills'
    ]
  }
];

const extracurriculars = [
  {
    id: 1,
    organization: 'Monash University Student Association (MUSA)',
    role: 'Vice-Captain, Manticore House',
    period: 'Jan 2023 - Dec 2023',
    description: 'Played a key role in managing the committee and coordinating teams for the Monash Cup 2023.',
    skills: ['Leadership', 'Team Management', 'Event Coordination']
  },
  {
    id: 2,
    organization: 'MUISS (Monash University International Student Services)',
    role: 'Media Office Bearer',
    period: 'Jan 2023 - Oct 2023',
    description: 'Oversaw media publications, managed the international student magazine, and developed the new MUISS website.',
    skills: ['Content Management', 'Web Development', 'Media Production']
  },
  {
    id: 3,
    organization: 'Dubai Design District',
    role: 'Volunteer, Dubai Design Week',
    period: '2019',
    location: 'Dubai, UAE',
    description: 'Managed event logistics, tracked event-related information, and evaluated outcomes for future improvements.',
    skills: ['Event Management', 'Data Tracking', 'Process Improvement']
  },
  {
    id: 4,
    organization: 'Art Dubai',
    role: 'Social Media Assistant Volunteer',
    period: 'Nov 2021',
    location: 'Dubai, UAE',
    description: 'Streamlined volunteer tasks, coordinated media advertising, and captured, edited, and pitched visual content to editors.',
    skills: ['Social Media', 'Content Creation', 'Media Coordination']
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence and leadership development through formal education and extracurricular involvement
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border border-border/50 hover:border-blue-500/30 rounded-xl backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {edu.institution}
                          </CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          {edu.major && (
                            <Badge variant="secondary" className="mb-2">
                              {edu.major}
                            </Badge>
                          )}
                        </div>
                      </div>
                      {edu.achievement && (
                        <div className="flex items-center space-x-1 text-yellow-600 dark:text-yellow-400">
                          <Award className="w-5 h-5" />
                          <span className="text-sm font-medium">{edu.achievement}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Leadership & Volunteer Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 border border-border/50 hover:border-purple-500/30 rounded-xl backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{activity.role}</CardTitle>
                    <CardDescription className="text-base font-medium text-purple-600 dark:text-purple-400">
                      {activity.organization}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{activity.period}</span>
                      </div>
                      {activity.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{activity.location}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{activity.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}