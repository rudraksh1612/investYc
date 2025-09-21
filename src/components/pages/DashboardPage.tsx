import { useState } from 'react';
import { TrendingUp, DollarSign, Users, Building2, Target, BarChart3, ArrowUpRight, ArrowDownRight, MessageSquare, Sparkles, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { motion } from 'motion/react';

interface DashboardPageProps {
  userType:  'startup' | 'investor';
  onPageChange: (page: string) => void;
}

export function DashboardPage({ userType, onPageChange }: DashboardPageProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');

  const renderStartupDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl p-8 gradient-dark-green border border-border"
      >
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Startup Dashboard</h1>
            <p className="text-muted-foreground text-lg">EcoTech Solutions</p>
            <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">Series A • Active</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => onPageChange('ai-insights')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI Insights
            </Button>
            <Button 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Funds Raised</p>
                  <p className="text-3xl font-bold text-foreground">$1.4M</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm text-primary font-medium">+12% this month</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Investors</p>
                  <p className="text-3xl font-bold text-foreground">24</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm text-primary font-medium">+3 new</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Funding Goal</p>
                  <p className="text-3xl font-bold text-foreground">70%</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-muted-foreground">$2M target</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Target className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Valuation</p>
                  <p className="text-3xl font-bold text-foreground">$15M</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-secondary font-medium">Pre-money</span>
                  </div>
                </div>
                <div className="p-3 bg-neutral/20 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-neutral" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Funding Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-foreground">Total Progress</span>
                    <span className="text-muted-foreground">$1.4M / $2M</span>
                  </div>
                  <Progress value={70} className="h-4 bg-muted" />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-primary font-medium">70% Complete</span>
                    <span className="text-sm text-muted-foreground">$600K remaining</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl p-4 gradient-dark-green border border-primary/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">Trust Compartment</p>
                        <p className="text-sm text-primary/80">Small ticket investors</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">$420K</p>
                        <p className="text-sm text-primary">18 investors</p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl p-4 gradient-dark-blue border border-secondary/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">SPV Compartment</p>
                        <p className="text-sm text-secondary/80">Mid-tier investments</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">$680K</p>
                        <p className="text-sm text-secondary">5 investors</p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl p-4 gradient-dark-orange border border-accent/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">Direct Equity</p>
                        <p className="text-sm text-accent/80">Large investments</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">$300K</p>
                        <p className="text-sm text-accent">1 investor</p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Zap className="w-5 h-5 text-accent mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'New investment', detail: '$25K via Trust compartment', time: '2 hours ago', type: 'positive' },
                  { action: 'Investor meeting', detail: 'Scheduled with Goldman Ventures', time: '1 day ago', type: 'info' },
                  { action: 'Due diligence', detail: 'Financial documents uploaded', time: '2 days ago', type: 'neutral' },
                  { action: 'Milestone reached', detail: '70% funding target achieved', time: '3 days ago', type: 'positive' }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'positive' ? 'bg-primary glow-primary' : 
                      activity.type === 'info' ? 'bg-secondary' : 'bg-neutral'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground mt-1">{activity.detail}</p>
                      <p className="text-xs text-neutral mt-2">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  const renderInvestorDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl p-8 gradient-dark-blue border border-border"
      >
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Investor Dashboard</h1>
            <p className="text-muted-foreground text-lg">Portfolio Overview</p>
            <Badge className="mt-3 bg-secondary/20 text-secondary border-secondary/30">Verified Investor</Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-muted rounded-xl p-1">
              {['1W', '1M', '3M', '1Y'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedTimeframe(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTimeframe === period 
                      ? 'bg-secondary text-secondary-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => onPageChange('ai-insights')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI Insights
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                  <p className="text-3xl font-bold text-foreground">$485K</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm text-primary font-medium">+8.5% returns</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Startups</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-secondary font-medium">Active investments</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Portfolio Value</p>
                  <p className="text-3xl font-bold text-foreground">$526K</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm text-primary font-medium">+$41K gain</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/20 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">IRR</p>
                  <p className="text-3xl font-bold text-foreground">22.4%</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-muted-foreground">Annualized</span>
                  </div>
                </div>
                <div className="p-3 bg-neutral/20 rounded-xl">
                  <Target className="w-6 h-6 text-neutral" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <BarChart3 className="w-5 h-5 text-primary mr-2" />
                Investment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="compartments">
                <TabsList className="grid w-full grid-cols-2 bg-muted">
                  <TabsTrigger value="compartments" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">By Compartment</TabsTrigger>
                  <TabsTrigger value="sector" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">By Sector</TabsTrigger>
                </TabsList>
                
                <TabsContent value="compartments" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl p-4 gradient-dark-green border border-primary/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-white">Trust Compartment</p>
                          <p className="text-sm text-primary/80">Diversified small investments</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white">$185K</p>
                          <Badge className="bg-primary/20 text-primary border-primary/30">38%</Badge>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl p-4 gradient-dark-blue border border-secondary/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-white">SPV Investments</p>
                          <p className="text-sm text-secondary/80">Targeted startup investments</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white">$225K</p>
                          <Badge className="bg-secondary/20 text-secondary border-secondary/30">46%</Badge>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl p-4 gradient-dark-orange border border-accent/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-white">Direct Equity</p>
                          <p className="text-sm text-accent/80">Large direct investments</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white">$75K</p>
                          <Badge className="bg-accent/20 text-accent border-accent/30">16%</Badge>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sector" className="space-y-4 mt-6">
                  <div className="space-y-3">
                    {[
                      { sector: 'FinTech', amount: '$145K', percentage: '30%', color: 'primary' },
                      { sector: 'HealthTech', amount: '$120K', percentage: '25%', color: 'secondary' },
                      { sector: 'AI/ML', amount: '$95K', percentage: '20%', color: 'accent' },
                      { sector: 'CleanTech', amount: '$85K', percentage: '17%', color: 'primary' },
                      { sector: 'EdTech', amount: '$40K', percentage: '8%', color: 'neutral' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="flex justify-between items-center p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                      >
                        <span className="font-medium text-foreground">{item.sector}</span>
                        <div className="text-right">
                          <p className="font-bold text-foreground">{item.amount}</p>
                          <Badge variant="outline" className="border-border text-muted-foreground">{item.percentage}</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <TrendingUp className="w-5 h-5 text-accent mr-2" />
                Top Performing Investments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'EcoTech Solutions', return: '+45%', value: '$72K', type: 'SPV', color: 'primary' },
                  { name: 'HealthAI Inc', return: '+32%', value: '$39K', type: 'Trust', color: 'secondary' },
                  { name: 'FinanceFlow', return: '+28%', value: '$64K', type: 'Direct', color: 'accent' },
                  { name: 'EduLearn Pro', return: '+15%', value: '$23K', type: 'Trust', color: 'primary' }
                ].map((investment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-medium text-foreground">{investment.name}</p>
                        <Badge variant="outline" className="text-xs mt-1 border-border text-muted-foreground">{investment.type}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{investment.return}</p>
                        <p className="text-sm text-muted-foreground">{investment.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  const renderStudentDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl p-8 gradient-dark-green border border-border"
      >
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Student Dashboard</h1>
            <p className="text-muted-foreground text-lg">Learning Hub</p>
            <Badge className="mt-3 bg-primary/20 text-primary border-primary/30">Active Learner</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => onPageChange('education')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Continue Learning
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Learning Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Courses Completed</p>
                  <p className="text-3xl font-bold text-foreground">4</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-primary font-medium">2 in progress</span>
                  </div>
                </div>
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Learning Hours</p>
                  <p className="text-3xl font-bold text-foreground">42</p>
                  <div className="flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm text-primary font-medium">+8 this week</span>
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Certificates</p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-accent font-medium">Verified</span>
                  </div>
                </div>
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {userType === 'student' && renderStudentDashboard()}
        {userType === 'startup' && renderStartupDashboard()}
        {userType === 'investor' && renderInvestorDashboard()}
      </div>
    </div>
  );
}