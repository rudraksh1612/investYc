import { ArrowRight, Shield, Users, DollarSign, TrendingUp, CheckCircle, FileText, Target } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HowItWorksPageProps {
  onPageChange: (page: string) => void;
}

export function HowItWorksPage({ onPageChange }: HowItWorksPageProps) {
  const process = [
    {
      step: 1,
      title: 'Investor Registration',
      description: 'Investors join the platform and complete their investment profile',
      icon: Users,
      details: [
        'Complete KYC verification',
        'Define investment preferences',
        'Choose investment compartments',
        'Set up secure payment methods'
      ]
    },
    {
      step: 2,
      title: 'Startup Application',
      description: 'Startups apply with comprehensive business documentation',
      icon: FileText,
      details: [
        'Submit business plan & financials',
        'Provide team & founder information',
        'Define funding requirements',
        'Complete due diligence questionnaire'
      ]
    },
    {
      step: 3,
      title: 'Validation & Due Diligence',
      description: 'Our expert team conducts thorough startup evaluation',
      icon: CheckCircle,
      details: [
        'Business model validation',
        'Market opportunity analysis',
        'Team background verification',
        'Financial projections review'
      ]
    },
    {
      step: 4,
      title: 'Funding Structure Setup',
      description: 'Approved startups get structured funding compartments',
      icon: Target,
      details: [
        'Trust fund compartment creation',
        'SPV structure establishment',
        'Direct equity options setup',
        'Legal documentation preparation'
      ]
    },
    {
      step: 5,
      title: 'Investor Matching',
      description: 'Startups are matched with suitable investors',
      icon: DollarSign,
      details: [
        'Investor preferences alignment',
        'Risk profile matching',
        'Investment size compatibility',
        'Sector expertise consideration'
      ]
    },
    {
      step: 6,
      title: 'Secure Investment Flow',
      description: 'Funds flow through secure escrow and structured vehicles',
      icon: Shield,
      details: [
        'Escrow account fund holding',
        'Milestone-based releases',
        'Compliance monitoring',
        'Transparent reporting'
      ]
    },
    {
      step: 7,
      title: 'Growth & Returns',
      description: 'Ongoing support and eventual returns to investors',
      icon: TrendingUp,
      details: [
        'Startup mentorship & support',
        'Regular progress reporting',
        'Exit strategy planning',
        'Return distribution'
      ]
    }
  ];

  const compartmentTypes = [
    {
      name: 'Trust Compartment',
      description: 'Small ticket investments pooled together',
      minInvestment: '$1,000',
      structure: 'Managed trust fund with diversified portfolio approach',
      riskLevel: 'Low-Medium',
      returns: '15-25% IRR',
      features: [
        'Professional fund management',
        'Diversification across multiple startups',
        'Lower individual risk exposure',
        'Quarterly reporting and updates'
      ]
    },
    {
      name: 'SPV Compartment',
      description: 'Mid-tier investments through Special Purpose Vehicles',
      minInvestment: '$25,000',
      structure: 'SPV created for each startup investment opportunity',
      riskLevel: 'Medium-High',
      returns: '25-40% IRR',
      features: [
        'Direct exposure to specific startups',
        'Enhanced investor protections',
        'Access to detailed startup information',
        'Regular investor updates and meetings'
      ]
    },
    {
      name: 'Direct Equity',
      description: 'Large investments directly into startup equity',
      minInvestment: '$100,000',
      structure: 'Direct equity purchase with full shareholder rights',
      riskLevel: 'High',
      returns: '40-100% IRR',
      features: [
        'Direct equity ownership',
        'Potential board representation',
        'Maximum return potential',
        'Direct access to founders and management'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Investyc Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our comprehensive investment flow from investor onboarding 
              to startup funding and eventual returns through secure, structured vehicles.
            </p>
          </div>
          
          <div className="text-center">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwY29uY2VwdHxlbnwxfHx8fDE3NTgzNzU2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Financial technology concept"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Complete Investment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial investor registration to startup returns - here's how our platform facilitates the entire investment lifecycle.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600 mb-1">Step {step.step}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                    {step.step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compartment Details Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Investment Compartment Structures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct investment structures designed to accommodate different investor profiles and risk appetites.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {compartmentTypes.map((compartment, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{compartment.name}</h3>
                    <p className="text-gray-600 mb-4">{compartment.description}</p>
                    <div className="text-2xl font-bold text-emerald-600">{compartment.minInvestment}+</div>
                    <div className="text-sm text-gray-500">minimum investment</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Structure</div>
                      <div className="text-sm text-gray-600">{compartment.structure}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-700">Risk Level</div>
                        <div className="text-sm text-gray-600">{compartment.riskLevel}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700">Expected Returns</div>
                        <div className="text-sm text-emerald-600 font-medium">{compartment.returns}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {compartment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-emerald-600 text-white hover:opacity-90"
                    onClick={() => onPageChange('register')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Security & Compliance First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our platform is designed with security, transparency, and regulatory compliance at its core.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulated Escrow Services</h3>
                  <p className="text-gray-600">All investor funds are held in regulated escrow accounts with milestone-based release mechanisms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SEC Compliance</h3>
                  <p className="text-gray-600">Full compliance with Securities and Exchange Commission regulations and investor protection laws.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Due Diligence</h3>
                  <p className="text-gray-600">Comprehensive startup evaluation by our team of experienced investors and industry experts.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4Mjc4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern office workspace"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our platform and experience the future of startup investing through secure, 
            structured, and transparent investment vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onPageChange('register')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onPageChange('investors')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold"
            >
              View Investment Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}