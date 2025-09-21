import { ArrowRight, Users, Target, Shield, TrendingUp, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StartupProfilePageProps {
  onPageChange: (page: string) => void;
}

export function StartupProfilePage({ onPageChange }: StartupProfilePageProps) {
  const startup = {
    name: 'EcoTech Solutions',
    logo: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=200',
    sector: 'CleanTech',
    location: 'San Francisco, CA',
    founded: '2023',
    website: 'www.ecotech-solutions.com',
    pitch: 'Revolutionizing renewable energy storage with AI-powered battery optimization systems that increase efficiency by 40% while reducing costs.',
    fundingTarget: 2000000,
    fundingRaised: 1400000,
    equityOffered: 15,
    minInvestment: {
      trust: 1000,
      spv: 25000,
      direct: 100000
    },
    team: [
      {
        name: 'Alex Chen',
        role: 'CEO & Co-founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        background: 'Former Tesla Engineer, MIT PhD'
      },
      {
        name: 'Sarah Johnson',
        role: 'CTO & Co-founder',
        image: 'https://images.unsplash.com/photo-1494790108755-2616c2bb7ee4?w=200',
        background: 'Ex-Google AI, Stanford MS'
      },
      {
        name: 'Michael Brown',
        role: 'CFO',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        background: 'Former Goldman Sachs, Wharton MBA'
      }
    ],
    metrics: {
      revenue: '$500K ARR',
      growth: '25% MoM',
      customers: '50+ Enterprise',
      patents: '3 Filed'
    }
  };

  const fundingProgress = (startup.fundingRaised / startup.fundingTarget) * 100;

  const compartments = [
    {
      type: 'Trust',
      title: 'Small Ticket Investment',
      description: 'Perfect for new investors looking to diversify their portfolio',
      minAmount: startup.minInvestment.trust,
      features: ['Professional management', 'Diversified risk', 'Low minimum entry'],
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      type: 'SPV',
      title: 'Mid-Tier Investment',
      description: 'Structured vehicle for sophisticated investors',
      minAmount: startup.minInvestment.spv,
      features: ['Direct equity exposure', 'Investor protection', 'Professional oversight'],
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      type: 'Direct',
      title: 'Direct Equity',
      description: 'Direct investment for accredited investors',
      minAmount: startup.minInvestment.direct,
      features: ['Direct equity ownership', 'Board representation potential', 'Maximum returns'],
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-background border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-200">
                <ImageWithFallback 
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-green-600">{startup.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white">
                  <Badge variant="secondary" className="bg-emerald-100 text-background">
                    {startup.sector}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{startup.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Founded {startup.founded}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{startup.website}</span>
                  </div>
                </div>
                <p className="text-green-600 max-w-3xl">{startup.pitch}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Funding Progress */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-green-600 mb-6">Funding Progress</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Raised</span>
                    <span className="font-semibold text-white">
                      ${(startup.fundingRaised / 1000000).toFixed(1)}M of ${(startup.fundingTarget / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <Progress value={fundingProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-white">
                    <span>{fundingProgress.toFixed(0)}% funded</span>
                    <span>{startup.equityOffered}% equity offered</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Funding Compartments */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-green-600 mb-6">Investment Options</h2>
                <div className="grid gap-6">
                  {compartments.map((compartment, index) => (
                    <div key={index} className={`p-6 rounded-xl border-2 ${compartment.bgColor} border-gray-200 hover:border-gray-300 transition-colors`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${compartment.color} flex items-center justify-center`}>
                            <compartment.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{compartment.title}</h3>
                            <p className="text-gray-600 text-sm">{compartment.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            ${compartment.minAmount.toLocaleString()}+
                          </div>
                          <div className="text-sm text-gray-500">minimum</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {compartment.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className={`${compartment.textColor} border-current`}>
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        className={`w-full bg-gradient-to-r ${compartment.color} text-white hover:opacity-90`}
                        onClick={() => onPageChange('register')}
                      >
                        Invest via {compartment.type}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Section */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-green-600 mb-6">Meet the Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {startup.team.map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                        <ImageWithFallback 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-white">{member.name}</h3>
                      <p className="text-sm text-emerald-600 mb-2">{member.role}</p>
                      <p className="text-xs text-white">{member.background}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-green-600 mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white">Revenue</span>
                    <span className="font-semibold">{startup.metrics.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Growth Rate</span>
                    <span className="font-semibold text-green-600">{startup.metrics.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Customers</span>
                    <span className="font-semibold">{startup.metrics.customers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Patents</span>
                    <span className="font-semibold">{startup.metrics.patents}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-green-600 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onPageChange('register')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onPageChange('register')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Pitch Deck
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onPageChange('register')}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Request Due Diligence
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 bg-background">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-green-600 mb-4">Need Help?</h3>
                <p className="text-sm text-white mb-4">
                  Our investment team is here to help you understand the opportunities and process.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white"
                  onClick={() => onPageChange('register')}
                >
                  Contact Our Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}