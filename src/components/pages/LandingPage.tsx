import image_dbca58e50f0fb116396e12502de22981a7611dba from 'figma:asset/dbca58e50f0fb116396e12502de22981a7611dba.png';
import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Shield, Target, Zap, Star, Globe, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LandingPageProps {
  onPageChange: (page: string) => void;
}

export function LandingPage({ onPageChange }: LandingPageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: 'Startups Onboarded', value: '500+', icon: Target, description: 'Verified and vetted startups' },
    { label: 'Active Investors', value: '2,000+', icon: Users, description: 'Worldwide community' },
    { label: 'Funds Raised', value: '$50M+', icon: DollarSign, description: 'Total funding deployed' },
    { label: 'Success Rate', value: '85%', icon: TrendingUp, description: 'Profitable exits' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Trust and SPV Security',
      description: 'Each startup has its own transparent SPV compartment with escrow protection and regulatory compliance.'
    },
    {
      icon: Target,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match investors with startups based on risk profile and growth potential.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Complete due diligence and investment in days, not months, with our streamlined process.'
    }
  ];

  const startups = [
    { name: 'HealthTech Pro', stage: 'Series A', funding: '$2M', sector: 'Healthcare' },
    { name: 'EcoFlow', stage: 'Seed', funding: '$500K', sector: 'CleanTech' },
    { name: 'FinanceAI', stage: 'Pre-Series A', funding: '$1.5M', sector: 'FinTech' },
    { name: 'EduVerse', stage: 'Series B', funding: '$5M', sector: 'EdTech' }
  ];

  const courses = [
    { title: 'Fundraising 101', students: '1,200+', rating: 4.8 },
    { title: 'Investor Relations', students: '850+', rating: 4.9 },
    { title: 'Legal Basics', students: '650+', rating: 4.7 },
    { title: 'Growth Strategy', students: '1,100+', rating: 4.8 }
  ];

  const paymentMethods = ['UPI', 'Cards', 'Net Banking', 'PayPal'];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-primary rounded-full opacity-5 blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-1/2 right-0 w-80 h-80 bg-accent rounded-full opacity-5 blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.15, 1], opacity: 1 }}
              transition={{
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6, delay: 0.2 }
              }}
              className="flex justify-center mb-8 relative"
            >
              <img 
              src={image_dbca58e50f0fb116396e12502de22981a7611dba}
              alt="Investyc Logo"
              className="w-24 h-24"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Fueling Startups.</span>
              <br />
              <span className="text-foreground">
                Empowering Investors.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              The next-generation investment platform with AI-powered insights, 
              transparent Trust and SPV deals, and comprehensive education for the future of finance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                size="lg"
                onClick={() => onPageChange('register')}
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-xl group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
              >
                Join as Startup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
               <Button 
              size="lg"
              variant="outline"
              onClick={() => onPageChange('investors')}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-xl group transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/25 hover:scale-105"
            >
              Join as Investor
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </motion.div>
          </div>

          {/* Dynamic Investment Network Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mt-16 flex justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl shadow-primary/50">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
              </motion.div>

              {/* Startup Nodes */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`startup-${i}`}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      y: [0, -10, 0]
                    }}
                    transition={{
                      scale: { delay: 0.8 + i * 0.1, duration: 0.5 },
                      opacity: { delay: 0.8 + i * 0.1, duration: 0.5 },
                      y: { 
                        duration: 2 + i * 0.3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.2 
                      }
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
                      <Zap className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                    </div>
                    
                    {/* Connection Line to Center */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-primary to-transparent"
                      style={{
                        width: `${radius}px`,
                        transform: `translate(-50%, -50%) rotate(${(angle * 180 / Math.PI) + 180}deg)`
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ 
                        delay: 1 + i * 0.1, 
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Investor Nodes - Outer Ring */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`investor-${i}`}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1], 
                      opacity: 1,
                      rotate: [0, 360]
                    }}
                    transition={{
                      scale: { delay: 1.2 + i * 0.05, duration: 0.6 },
                      opacity: { delay: 1.2 + i * 0.05, duration: 0.6 },
                      rotate: { 
                        duration: 15 + i * 2, 
                        repeat: Infinity, 
                        ease: "linear"
                      }
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-transform cursor-pointer relative group">
                      <DollarSign className="w-4 h-4 text-primary-foreground" />
                      
                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    </div>
                    
                    {/* Dynamic Connection Lines */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 origin-left h-px bg-gradient-to-r from-accent/50 to-transparent"
                      style={{
                        width: `${radius - 60}px`,
                        transform: `translate(-50%, -50%) rotate(${(angle * 180 / Math.PI) + 180}deg)`
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ 
                        scaleX: [0, 1, 0.8, 1],
                        opacity: [0, 0.8, 0.4, 0.8]
                      }}
                      transition={{ 
                        delay: 1.5 + i * 0.1, 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Floating Data Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    `radial-gradient(circle, ${CSS.escape('rgb(0, 255, 135)')}10 0%, transparent 70%)`,
                    `radial-gradient(circle, ${CSS.escape('rgb(0, 204, 106)')}10 0%, transparent 70%)`,
                    `radial-gradient(circle, ${CSS.escape('rgb(0, 255, 135)')}10 0%, transparent 70%)`
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Driving Innovation Forward</h2>
            <p className="text-xl text-foreground">Our platform connects ambitious startups with forward-thinking investors</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6">
                      <stat.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-foreground font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Featured Startups</h2>
            <p className="text-xl text-foreground">Each startup has its own TrustSPV compartment for transparent deal flow</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{startup.name}</h3>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">{startup.stage}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-primary">{startup.funding}</div>
                      <div className="text-muted-foreground">{startup.sector}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 mr-1" />
                        Trust and SPV Protected
                      </div>
                      <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">AI-Powered Investment Insights</h2>
            <p className="text-xl text-foreground">Get personalized deal suggestions and risk analysis powered by advanced AI</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-0 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Learn & Grow</h2>
            <p className="text-xl text-foreground">Comprehensive courses for startups and investors</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                      <div className="flex items-center text-sm text-foreground">
                        <Star className="w-4 h-4 text-accent mr-1" />
                        {course.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">{course.students} enrolled</div>
                      <Button size="sm" className="bg-primary hover:bg-accent text-primary-foreground">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Gateway Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-card to-muted border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-0">
                <div className="mb-8">
                  <CreditCard className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-foreground mb-4">Secure Payment Gateway</h2>
                  <p className="text-xl text-muted-foreground">Multiple payment options for seamless transactions</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium"
                    >
                      {method}
                    </motion.div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl glow-accent"
                >
                  Start Investing
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Investment Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the future of finance with AI-powered insights, transparent deals, 
              and comprehensive education.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => onPageChange('register')}
                className="bg-primary hover:bg-accent text-primary-foreground px-12 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onPageChange('about')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}