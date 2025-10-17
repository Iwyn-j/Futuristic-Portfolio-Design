import { motion } from 'motion/react';
import { Code, Database, Shield, Smartphone, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Vue.js', level: 75 },
    ]
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ]
  },
  {
    id: 3,
    title: 'Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'TensorFlow', level: 88 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Computer Vision', level: 82 },
    ]
  },
  {
    id: 4,
    title: 'Security Engineering',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    skills: [
      { name: 'Penetration Testing', level: 85 },
      { name: 'Network Security', level: 88 },
      { name: 'Cryptography', level: 80 },
      { name: 'Security Auditing', level: 83 },
    ]
  },
  {
    id: 5,
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'React Native', level: 87 },
      { name: 'Flutter', level: 75 },
      { name: 'iOS (Swift)', level: 70 },
      { name: 'Android (Kotlin)', level: 72 },
    ]
  },
  {
    id: 6,
    title: 'Data Science',
    icon: BarChart3,
    color: 'from-yellow-500 to-amber-500',
    skills: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Data Visualization', level: 88 },
      { name: 'Statistical Modeling', level: 85 },
      { name: 'Big Data (Spark)', level: 78 },
    ]
  }
];

const tools = [
  'Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins', 'Terraform',
  'Redis', 'Elasticsearch', 'Apache Kafka', 'GraphQL', 'REST APIs',
  'Microservices', 'Linux', 'Nginx', 'Wireshark', 'Burp Suite'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across multiple domains of computer science and software engineering
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-accent rounded-full text-sm font-medium hover:bg-accent/80 transition-colors cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-0">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                {[
                  { label: 'Full Stack Development', percentage: 95 },
                  { label: 'Machine Learning', percentage: 88 },
                  { label: 'DevOps & Cloud', percentage: 85 },
                  { label: 'Systems Reliability', percentage: 82 },
                  { label: 'Mobile Development', percentage: 80 },
                  { label: 'Data Science', percentage: 87 }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="30"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-muted/20"
                        />
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="30"
                          stroke="url(#gradient)"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${(item.percentage / 100) * 188.5} 188.5`}
                          initial={{ strokeDasharray: "0 188.5" }}
                          whileInView={{ strokeDasharray: `${(item.percentage / 100) * 188.5} 188.5` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-semibold">{item.percentage}%</span>
                      </div>
                    </div>
                    <h4 className="text-sm font-medium">{item.label}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}