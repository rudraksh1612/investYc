import { BookOpen, Users, Award, Calendar, ArrowRight, Play, Clock, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface EducationPageProps {
  onPageChange: (page: string) => void;
}

export function EducationPage({ onPageChange }: EducationPageProps) {
  const learningModules = [
    {
      category: 'For Startups',
      modules: [
        {
          title: 'Startup Fundamentals',
          description: 'Learn the basics of building a successful startup from idea to MVP',
          duration: '3 hours',
          level: 'Beginner',
          lessons: 12,
          rating: 4.8
        },
        {
          title: 'Fundraising Mastery',
          description: 'Complete guide to raising capital from seed to Series A',
          duration: '5 hours',
          level: 'Intermediate',
          lessons: 18,
          rating: 4.9
        },
        {
          title: 'Pitch Deck Perfection',
          description: 'Create compelling pitch decks that win over investors',
          duration: '2 hours',
          level: 'Beginner',
          lessons: 8,
          rating: 4.7
        }
      ]
    },
    {
      category: 'For Investors',
      modules: [
        {
          title: 'Investment Fundamentals',
          description: 'Essential knowledge for startup investing and portfolio management',
          duration: '4 hours',
          level: 'Beginner',
          lessons: 15,
          rating: 4.8
        },
        {
          title: 'Due Diligence Deep Dive',
          description: 'Master the art of evaluating startup investments',
          duration: '6 hours',
          level: 'Advanced',
          lessons: 22,
          rating: 4.9
        },
        {
          title: 'Portfolio Management',
          description: 'Build and manage a diversified startup investment portfolio',
          duration: '3 hours',
          level: 'Intermediate',
          lessons: 14,
          rating: 4.6
        }
      ]
    }
  ];

  const mentors = [
    {
      name: 'Sarah Thompson',
      title: 'Former VP of Engineering at Google',
      expertise: 'Tech Startups, Product Development',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c2bb7ee4?w=400',
      rating: 4.9,
      sessions: 150,
      experience: '15+ years',
      specialties: ['Product Strategy', 'Team Building', 'Technical Architecture']
    },
    {
      name: 'Michael Chen',
      title: 'Serial Entrepreneur & Angel Investor',
      expertise: 'Fundraising, Business Strategy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5.0,
      sessions: 200,
      experience: '20+ years',
      specialties: ['Fundraising', 'Go-to-Market', 'Exit Strategies']
    },
    {
      name: 'Dr. Lisa Rodriguez',
      title: 'Venture Partner at Andreessen Horowitz',
      expertise: 'Healthcare, Biotech Investments',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 4.8,
      sessions: 120,
      experience: '12+ years',
      specialties: ['Healthcare Tech', 'Regulatory Affairs', 'Clinical Trials']
    },
    {
      name: 'James Wilson',
      title: 'Former CFO at Stripe',
      expertise: 'Fintech, Financial Planning',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 4.9,
      sessions: 180,
      experience: '18+ years',
      specialties: ['Financial Modeling', 'Fintech', 'Scaling Operations']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Learn from the{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Best in Business
                  </span>
                </h1>
                <p className="text-xl text-white">
                  Access comprehensive learning modules and connect with industry experts 
                  to accelerate your startup or investment journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => onPageChange('register')}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl"
                >
                  Start Learning
                  <BookOpen className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onPageChange('register')}
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl"
                >
                  Book a Mentor
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1565688695721-2b6f5a880a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTgzNDEwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Online education and learning"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4 ">
              Free Learning Modules
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto space-y-8 mt-6">
              Comprehensive courses designed by industry experts to help you succeed in the startup ecosystem.
            </p>
          </div>

          <div className="space-y-12">
            {learningModules.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid lg:grid-cols-3 gap-8">
                  {category.modules.map((module, moduleIndex) => (
                    <Card key={moduleIndex} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={getLevelColor(module.level)}>
                            {module.level}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm text-gray-600">{module.rating}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{module.title}</h4>
                        <p className="text-gray-600 mb-6">{module.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </div>
                          <div className="flex items-center">
                            <Play className="w-4 h-4 mr-1" />
                            {module.lessons} lessons
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:opacity-90"
                          onClick={() => onPageChange('register')}
                        >
                          Start Course
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Connect with Industry Mentors
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Get personalized guidance from successful entrepreneurs, investors, and industry leaders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <ImageWithFallback 
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                          <p className="text-sm text-gray-600">{mentor.title}</p>
                          <p className="text-sm text-emerald-600">{mentor.expertise}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">{mentor.rating}</span>
                          </div>
                          <div className="text-xs text-gray-500">{mentor.sessions} sessions</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-2">{mentor.experience} experience</div>
                        <div className="flex flex-wrap gap-1">
                          {mentor.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white"
                        onClick={() => onPageChange('register')}
                      >
                        Book Session
                        <Calendar className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-600">Learning Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">100+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">10,000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Access world-class education and mentorship to accelerate your success in the startup ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onPageChange('register')}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onPageChange('register')}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold"
            >
              Book a Mentor Session
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}