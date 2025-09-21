import { DollarSign, Shield, TrendingUp, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface InvestorsPageProps {
  onPageChange: (page: string) => void;
}

export function InvestorsPage({ onPageChange }: InvestorsPageProps) {
  const investmentSlabs = [
    {
      title: 'Trust Investment',
      subtitle: 'Small Ticket',
      minAmount: '$1,000',
      description: 'Perfect for new investors looking to diversify into startups',
      features: [
        'Professional portfolio management',
        'Diversified across multiple startups',
        'Lower risk through diversification',
        'Quarterly reporting',
        'No accreditation required'
      ],
      expectedReturn: '15-25% IRR',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      popular: false
    },
    {
      title: 'SPV Investment',
      subtitle: 'Mid Ticket',
      minAmount: '$25,000',
      description: 'Special Purpose Vehicle for focused startup investments',
      features: [
        'Direct exposure to specific startups',
        'Investor protection mechanisms',
        'Transparent fee structure',
        'Monthly updates',
        'Access to investor meetings'
      ],
      expectedReturn: '25-40% IRR',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      title: 'Direct Equity',
      subtitle: 'Large Ticket',
      minAmount: '$100,000',
      description: 'Direct equity investment in pre-vetted startups',
      features: [
        'Direct equity ownership',
        'Board representation potential',
        'Maximum return potential',
        'Direct founder access',
        'Comprehensive due diligence'
      ],
      expectedReturn: '40-100% IRR',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      popular: false
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Escrow Protection',
      description: 'All funds are held in regulated escrow accounts until investment milestones are met.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance & Legal',
      description: 'Full regulatory compliance with SEC guidelines and investor protection laws.'
    },
    {
      icon: Users,
      title: 'Due Diligence',
      description: 'Comprehensive vetting of all startups including financial, legal, and market analysis.'
    }
  ];

  const returns = [
    {
      category: 'Conservative Portfolio',
      range: '15-25% IRR',
      description: 'Diversified across multiple validated startups',
      riskLevel: 'Low-Medium',
      timeframe: '3-5 years'
    },
    {
      category: 'Growth Portfolio',
      range: '25-40% IRR',
      description: 'Focused investments in high-growth potential startups',
      riskLevel: 'Medium-High',
      timeframe: '2-4 years'
    },
    {
      category: 'High-Impact Portfolio',
      range: '40-100% IRR',
      description: 'Direct investments in breakthrough technologies',
      riskLevel: 'High',
      timeframe: '1-3 years'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl leading-tight">
                  Invest in Tomorrow's{' '}
                  <span className="text-white">
                    Game Changers
                  </span>
                </h1>
                <p className="text-xl text-white">
                  Access vetted startups through our structured investment compartments. 
                  From trust funds to direct equity - find the perfect investment level for you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => onPageChange('register')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl"
                >
                  Start Investing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onPageChange('how-it-works')}
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl"
                >
                  How It Works
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzU4Mzc1NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Investment growth chart"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Slabs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl mb-4">
              Investment Options for Every Portfolio
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose the investment structure that matches your risk appetite and portfolio strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentSlabs.map((slab, index) => (
              <Card key={index} className={`relative p-8 border-2 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 ${slab.bgColor}`}>
                {slab.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${slab.color} rounded-2xl mb-4`}>
                      <slab.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{slab.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{slab.subtitle}</p>
                    <div className="text-3xl font-bold text-gray-900">{slab.minAmount}+</div>
                    <p className="text-sm text-gray-600">minimum investment</p>
                  </div>

                  <p className="text-gray-700 mb-6 text-center">{slab.description}</p>

                  <div className="space-y-3 mb-8">
                    {slab.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-600 mb-1">Expected Returns</div>
                    <div className="text-2xl font-bold text-emerald-600">{slab.expectedReturn}</div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${slab.color} text-white hover:opacity-90`}
                    onClick={() => onPageChange('register')}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl mb-4">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We've built industry-leading security and compliance measures to protect your investments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-2xl mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Returns Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl mb-4">
              Expected Returns by Portfolio Type
            </h2>
            <p className="text-xl text-white">
              Historical performance and projected returns across different investment strategies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {returns.map((returnData, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{returnData.category}</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{returnData.range}</div>
                    <p className="text-gray-600 text-sm">{returnData.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Risk Level:</span>
                      <span className="font-medium">{returnData.riskLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Frame:</span>
                      <span className="font-medium">{returnData.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              * Returns are projections based on historical data and market analysis. Past performance does not guarantee future results.
            </p>
            <Button 
              onClick={() => onPageChange('register')}
              className="bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-8 py-3 rounded-xl"
            >
              Start Building Your Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Diversify Your Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of smart investors who are building wealth through strategic startup investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onPageChange('register')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold"
            >
              Create Investor Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onPageChange('how-it-works')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}