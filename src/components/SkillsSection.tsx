import { motion } from 'motion/react';
import { Code, Database, Shield, Smartphone, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

const skillCategories = [
  {
    id: 1,
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 92 },
      { name: 'JavaScript', level: 85 },
      { name: 'R', level: 88 },
      { name: 'Java', level: 78 },
      { name: 'HTML/CSS', level: 88 },
      { name: 'Bash', level: 82 },
      { name: 'JSON', level: 90 },
    ]
  },
  {
    id: 2,
    title: 'Data Analytics & BI',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'Tableau', level: 88 },
      { name: 'Excel', level: 98 },
      { name: 'Power Query', level: 92 },
      { name: 'DAX', level: 90 },
      { name: 'Data Analysis', level: 95 },
      { name: 'Statistical Modeling', level: 85 },
      { name: 'Data Visualization', level: 92 },
    ]
  },
  {
    id: 3,
    title: 'Machine Learning & AI',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'TensorFlow.js', level: 88 },
      { name: 'Universal Sentence Encoder', level: 85 },
      { name: 'Langchain', level: 85 },
      { name: 'OpenAI API', level: 88 },
      { name: 'Computer Vision', level: 82 },
      { name: 'NLP/Semantic Search', level: 85 },
      { name: 'A* Algorithm', level: 80 },
      { name: 'Minimax/Alpha-Beta Pruning', level: 78 },
      { name: 'Vector Databases', level: 82 },
    ]
  },
  {
    id: 4,
    title: 'Cloud Platforms & Enterprise',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Google Cloud Platform', level: 85 },
      { name: 'Firebase', level: 92 },
      { name: 'Firestore', level: 90 },
      { name: 'Firebase Authentication', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Amazon Redshift', level: 78 },
      { name: 'SAP', level: 75 },
      { name: 'Salesforce', level: 72 },
    ]
  },
  {
    id: 5,
    title: 'Web & Mobile Development',
    icon: Smartphone,
    color: 'from-yellow-500 to-amber-500',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'React Router', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'Firebase Realtime DB', level: 90 },
      { name: 'Android Studio', level: 78 },
      { name: 'WordPress', level: 80 },
      { name: 'Figma', level: 85 },
    ]
  },
  {
    id: 6,
    title: 'Development Tools & IDEs',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    skills: [
      { name: 'Jupyter Notebook', level: 98 },
      { name: 'PyCharm', level: 92 },
      { name: 'Visual Studio', level: 88 },
      { name: 'RStudio', level: 90 },
      { name: 'Anaconda', level: 95 },
      { name: 'Cygwin', level: 82 },
      { name: 'Android Studio', level: 78 },
    ]
  },
  {
    id: 7,
    title: 'Big Data & Streaming',
    icon: Database,
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'Apache Spark', level: 85 },
      { name: 'Apache Kafka', level: 88 },
      { name: 'Real-time Analytics', level: 90 },
      { name: 'Stream Processing', level: 85 },
      { name: 'Data Pipelines', level: 92 },
      { name: 'ETL/ELT', level: 88 },
    ]
  },
  {
    id: 8,
    title: 'Analytics & Tracking',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Google Analytics', level: 90 },
      { name: 'Pixel Tracking', level: 88 },
      { name: 'Campaign Analytics', level: 85 },
      { name: 'Performance Monitoring', level: 88 },
      { name: 'KPI Development', level: 92 },
      { name: 'Procurement Analytics', level: 95 },
    ]
  },
  {
    id: 9,
    title: 'Specialized Libraries',
    icon: Code,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Matplotlib', level: 90 },
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 92 },
      { name: 'Image Processing', level: 85 },
      { name: 'GUI Development', level: 82 },
      { name: 'PDF Generation', level: 85 },
      { name: 'Web Scraping', level: 88 },
    ]
  }
];

const tools = [
  'Supply Chain Analytics', 'Process Automation', 'PSNR Analysis', 'BER Metrics',
  'Interactive Dashboards', 'Real-time Reporting', 'Cross-functional Collaboration',
  'User Testing', 'Technical Documentation', 'SOPs Development', 'Scalable Data Models',
  'Procurement Workflows', 'Regional Analytics', 'Performance Optimization',
  'Career Recommendation Systems', 'Semantic Similarity', 'Protected Routes',
  'Context-based State Management', 'Modular UI Design', 'Exportable Reports'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="w-full max-w-6xl mx-auto px-4">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise spanning data science, analytics, machine learning, web development, and enterprise systems
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-16">
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
                <Card className="h-full hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border border-border/50 hover:border-blue-500/30 rounded-xl backdrop-blur-sm hover:-translate-y-2">
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
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 bg-accent/70 hover:bg-accent rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-default border border-border/30 hover:border-blue-500/30"
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
                  { label: 'Cybersecurity', percentage: 82 },
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