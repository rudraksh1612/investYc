import { Target, Users, TrendingUp, Award, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const founders = [
    {
      name: 'Alexander Rodriguez',
      role: 'CEO & Co-founder',
      background: 'Former VP at Goldman Sachs, Harvard MBA',
      image: 'D:\SRS\Logo srs.png',
      bio: 'With 15+ years in investment banking and venture capital, Alex brings deep expertise in structured finance and startup ecosystems.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'CTO & Co-founder',
      background: 'Former Lead Engineer at Tesla, MIT PhD',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c2bb7ee4?w=400',
      bio: 'Sarah combines technical excellence with product vision, having led engineering teams at scale in the automotive and fintech industries.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Investment Officer',
      background: 'Former Partner at Andreessen Horowitz',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Marcus brings 20+ years of venture capital experience, having led investments in 50+ successful startups including 3 unicorns.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Trust',
      description: 'We build trust through transparency, security, and regulatory compliance in every interaction.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We enable sustainable growth for startups and consistent returns for investors through smart capital allocation.'
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'We continuously innovate our platform and processes to create better outcomes for our community.'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Investyc was founded with a vision to democratize startup investing'
    },
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Launched our investment platform with the first Trust compartment'
    },
    {
      year: '2023',
      title: 'First $10M Raised',
      description: 'Facilitated our first $10M in startup funding across 25 companies'
    },
    {
      year: '2024',
      title: 'Series A Success',
      description: 'Completed our own Series A to expand platform capabilities'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to serve international investors and startups'
    }
  ];

  const achievements = [
    { metric: '500+', label: 'Startups Funded' },
    { metric: '$50M+', label: 'Total Funds Raised' },
    { metric: '2,000+', label: 'Active Investors' },
    { metric: '85%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mt-2">
            <h1 className="text-4xl lg:text-4xl font-bold text-blue-600">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Investyc
              </span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We're on a mission to transform how startups raise capital and how investors 
              build portfolios through innovative, secure, and transparent investment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ">Our Vision</h2>
                <p className="text-lg text-white space-y-6 mt-2">
                  To create a world where exceptional startups have seamless access to capital, 
                  and smart investors can easily discover and invest in the next generation of 
                  game-changing companies.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
                <p className="text-lg text-white space-y-6 mt-2">
                  We democratize startup investing by providing structured, secure, and accessible 
                  investment vehicles that protect investors while enabling startups to scale rapidly 
                  with the right capital and mentorship.
                </p>
              </div>

              <Button 
                onClick={() => onPageChange('register')}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-xl"
              >
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
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

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto space-y-6 mt-2">
              Three fundamental principles that guide everything we do at Investyc.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Meet Our Founding Team
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experienced leaders from finance, technology, and venture capital united by a common vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <ImageWithFallback 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{founder.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{founder.background}</p>
                  <p className="text-gray-700 text-sm mb-6">{founder.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={founder.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={founder.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Numbers that reflect our commitment to creating value for startups and investors alike.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {achievement.metric}
                </div>
                <div className="text-white">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-white">
              Key milestones in building the future of startup investing
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-1 mr-8"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-white">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Whether you're a startup looking for smart capital or an investor seeking 
            exceptional opportunities, we'd love to have you join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onPageChange('startups')}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl"
            >
              For Startups
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              onClick={() => onPageChange('investors')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl"
            >
              For Investors
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}