import { Shield, Users, DollarSign, TrendingUp, ArrowRight, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TrustSPVPageProps {
  onPageChange: (page: string) => void;
}

export function TrustSPVPage({ onPageChange }: TrustSPVPageProps) {
  const trustFunds = [
    {
      id: 'trust-001',
      name: 'Diversified Startup Trust Alpha',
      description: 'Balanced portfolio across multiple high-growth sectors',
      totalFund: 5000000,
      invested: 3200000,
      investors: 156,
      avgReturn: 18.5,
      riskLevel: 'Medium',
      minInvestment: 1000,
      sectors: ['FinTech', 'HealthTech', 'AI/ML', 'CleanTech'],
      performance: [
        { month: 'Jan', value: 102 },
        { month: 'Feb', value: 105 },
        { month: 'Mar', value: 108 },
        { month: 'Apr', value: 112 },
        { month: 'May', value: 118 },
        { month: 'Jun', value: 121 }
      ]
    },
    {
      id: 'trust-002',
      name: 'Tech Innovation Trust Beta',
      description: 'Focus on breakthrough technology startups',
      totalFund: 8000000,
      invested: 6400000,
      investors: 89,
      avgReturn: 24.2,
      riskLevel: 'High',
      minInvestment: 2500,
      sectors: ['AI/ML', 'Blockchain', 'IoT', 'Quantum Computing'],
      performance: [
        { month: 'Jan', value: 100 },
        { month: 'Feb', value: 108 },
        { month: 'Mar', value: 115 },
        { month: 'Apr', value: 122 },
        { month: 'May', value: 128 },
        { month: 'Jun', value: 135 }
      ]
    }
  ];

  const spvDeals = [
    {
      id: 'spv-001',
      startupName: 'EcoTech Solutions',
      description: 'AI-powered battery optimization for renewable energy',
      targetRaise: 2000000,
      currentRaise: 1400000,
      investors: 24,
      leadInvestor: 'Goldman Ventures',
      minInvestment: 25000,
      valuation: 15000000,
      sector: 'CleanTech',
      stage: 'Series A',
      daysLeft: 18,
      highlights: ['40% efficiency improvement', 'Tesla partnership', '3 patents filed']
    },
    {
      id: 'spv-002',
      startupName: 'HealthAI Diagnostics',
      description: 'Machine learning for early disease detection',
      targetRaise: 3500000,
      currentRaise: 2800000,
      investors: 31,
      leadInvestor: 'Andreessen Horowitz',
      minInvestment: 50000,
      valuation: 25000000,
      sector: 'HealthTech',
      stage: 'Series A',
      daysLeft: 32,
      highlights: ['FDA breakthrough designation', '95% accuracy rate', 'Mayo Clinic pilot']
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">TrustSPV</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure, structured investment vehicles designed to democratize startup investing 
              through diversified Trust funds and targeted SPV opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="trust" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="trust" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Trust Funds
            </TabsTrigger>
            <TabsTrigger value="spv" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              SPV Deals
            </TabsTrigger>
          </TabsList>

          {/* Trust Funds Tab */}
          <TabsContent value="trust" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Diversified Trust Funds</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professionally managed portfolios that spread risk across multiple startups, 
                perfect for investors seeking diversification with lower minimum investments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trustFunds.map((fund) => (
                <Card key={fund.id} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{fund.name}</CardTitle>
                        <p className="text-gray-600">{fund.description}</p>
                      </div>
                      <Badge className={getRiskColor(fund.riskLevel)}>
                        {fund.riskLevel} Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{fund.avgReturn}%</p>
                        <p className="text-sm text-blue-700">Avg Annual Return</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{fund.investors}</p>
                        <p className="text-sm text-green-700">Active Investors</p>
                      </div>
                    </div>

                    {/* Fund Progress */}
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Fund Utilization</span>
                        <span>${(fund.invested / 1000000).toFixed(1)}M / ${(fund.totalFund / 1000000).toFixed(1)}M</span>
                      </div>
                      <Progress value={(fund.invested / fund.totalFund) * 100} className="h-2" />
                    </div>

                    {/* Sectors */}
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Investment Sectors</p>
                      <div className="flex flex-wrap gap-2">
                        {fund.sectors.map((sector, index) => (
                          <Badge key={index} variant="outline">{sector}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Investment Details */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">Minimum Investment</p>
                          <p className="text-2xl font-bold text-gray-900">${fund.minInvestment.toLocaleString()}</p>
                        </div>
                        <Button onClick={() => onPageChange('signup')}>
                          Invest Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Fund Benefits */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Trust Funds?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Risk Diversification</h4>
                    <p className="text-gray-600 text-sm">Spread risk across 15-20 startups in different sectors</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Management</h4>
                    <p className="text-gray-600 text-sm">Expert fund managers with proven track records</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lower Entry Barrier</h4>
                    <p className="text-gray-600 text-sm">Start investing with as little as $1,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SPV Deals Tab */}
          <TabsContent value="spv" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Active SPV Deals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Special Purpose Vehicles for targeted investments in specific startups. 
                Higher minimum investments but direct exposure to individual companies.
              </p>
            </div>

            <div className="space-y-6">
              {spvDeals.map((deal) => (
                <Card key={deal.id} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Company Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.startupName}</h3>
                            <p className="text-gray-600 mb-4">{deal.description}</p>
                            <div className="flex items-center gap-4 mb-4">
                              <Badge>{deal.sector}</Badge>
                              <Badge variant="outline">{deal.stage}</Badge>
                              <span className="text-sm text-gray-500">Led by {deal.leadInvestor}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Days remaining</p>
                            <p className="text-2xl font-bold text-red-600">{deal.daysLeft}</p>
                          </div>
                        </div>

                        {/* Funding Progress */}
                        <div className="mb-6">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Funding Progress</span>
                            <span>${(deal.currentRaise / 1000000).toFixed(1)}M / ${(deal.targetRaise / 1000000).toFixed(1)}M</span>
                          </div>
                          <Progress value={(deal.currentRaise / deal.targetRaise) * 100} className="h-3" />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{Math.round((deal.currentRaise / deal.targetRaise) * 100)}% funded</span>
                            <span>{deal.investors} investors</span>
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div>
                          <p className="font-medium text-gray-900 mb-3">Key Highlights</p>
                          <div className="space-y-2">
                            {deal.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                <span className="text-sm text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Investment Details */}
                      <div className="space-y-6">
                        <div className="p-6 bg-gray-50 rounded-xl">
                          <div className="text-center mb-4">
                            <p className="text-sm text-gray-600">Pre-money Valuation</p>
                            <p className="text-2xl font-bold text-gray-900">${(deal.valuation / 1000000).toFixed(0)}M</p>
                          </div>
                          <div className="text-center mb-6">
                            <p className="text-sm text-gray-600">Minimum Investment</p>
                            <p className="text-xl font-bold text-blue-600">${deal.minInvestment.toLocaleString()}</p>
                          </div>
                          <Button className="w-full" onClick={() => onPageChange('signup')}>
                            Invest in SPV
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3">Investment Terms</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Security Type:</span>
                              <span className="font-medium">Preferred Shares</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Liquidation:</span>
                              <span className="font-medium">1x Non-participating</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Pro-rata Rights:</span>
                              <span className="font-medium">Yes</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Information Rights:</span>
                              <span className="font-medium">Quarterly reports</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SPV Benefits */}
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">SPV Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Direct Exposure</h4>
                    <p className="text-gray-600 text-sm">Invest directly in specific startups you believe in</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Higher Returns</h4>
                    <p className="text-gray-600 text-sm">Potential for outsized returns from breakout companies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Investor Rights</h4>
                    <p className="text-gray-600 text-sm">Access to information rights and pro-rata participation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of investors building wealth through structured startup investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onPageChange('signup')}>
              Create Investor Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onPageChange('contact')}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}