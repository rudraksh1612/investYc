import { CheckCircle, ArrowRight, Users, TrendingUp, Shield, Target, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StartupsPageProps {
  onPageChange: (page: string) => void;
}

export function StartupsPage({ onPageChange }: StartupsPageProps) {
  const process = [
    {
      step: '01',
      title: 'Apply',
      description: 'Submit your startup application with business plan, financials, and team details.',
      icon: Target
    },
    {
      step: '02',
      title: 'Get Validated',
      description: 'Our expert team reviews your application and validates your business model.',
      icon: CheckCircle
    },
    {
      step: '03',
      title: 'Raise Funds',
      description: 'Get matched with investors through our structured funding compartments.',
      icon: TrendingUp
    },
    {
      step: '04',
      title: 'Grow',
      description: 'Access mentorship, resources, and ongoing support to scale your business.',
      icon: Users
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Access to Investors',
      description: 'Connect with a network of 2,000+ verified investors actively looking for opportunities.',
      highlight: '2,000+ Investors'
    },
    {
      icon: Shield,
      title: 'Mentorship Network',
      description: 'Get guidance from industry experts and successful entrepreneurs who\'ve been there.',
      highlight: 'Expert Mentors'
    },
    {
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Access resources, tools, and ongoing support to accelerate your startup\'s growth.',
      highlight: '24/7 Support'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      company: 'TechFlow',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c2bb7ee4?w=400',
      content: 'Investyc helped us raise $2M in Series A funding. The process was transparent and the investor matching was perfect.',
      rating: 5,
      funding: '$2M raised'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GreenTech Solutions',
      company: 'GreenTech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      content: 'The mentorship network is incredible. Our mentor helped us refine our business model and strategy.',
      rating: 5,
      funding: '$1.5M raised'
    },
    {
      name: 'Emily Watson',
      role: 'Co-founder, HealthAI',
      company: 'HealthAI',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      content: 'From application to funding in just 8 weeks. Investyc made the impossible possible for us.',
      rating: 5,
      funding: '$3.2M raised'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background from-emerald-50 via-white to-blue-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 leading-tight">
                  Turn Your Vision Into{' '}
                  <span className="text-white">
                    Funded Reality
                  </span>
                </h1>
                <p className="text-xl text-white">
                  Access verified investors, expert mentorship, and the resources you need 
                  to grow your startup from idea to scale.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => onPageChange('register')}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onPageChange('startup-profile')}
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl"
                >
                  View Sample Profile
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1676276375450-3707e4e624c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidXNpbmVzcyUyMHRlYW0lMjBkaXZlcnNpdHl8ZW58MXx8fHwxNzU4Mzc1NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diverse business team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 mb-4">
              Your Journey to Funding
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We've streamlined the funding process to get you from application to investment faster than ever.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 mb-4">
              Why Startups Choose Investyc
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              More than just funding - we provide the complete ecosystem for startup success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                      {benefit.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-white">
              Hear from founders who've transformed their startups with Investyc
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ImageWithFallback 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-emerald-600">{testimonial.funding}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 mb-6">
            Ready to Fund Your Future?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of successful startups who've raised funding through Investyc. 
            Your journey starts with a simple application.
          </p>
          <Button 
            size="lg"
            onClick={() => onPageChange('register')}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold"
          >
            Start Your Application
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}