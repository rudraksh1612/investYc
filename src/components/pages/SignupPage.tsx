import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, User, Building2, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface SignupPageProps {
  onPageChange: (page: string) => void;
  onSignup?: (userType: 'startup' | 'investor') => void;
}

export function SignupPage({ onPageChange, onSignup }: SignupPageProps) {
  const [selectedTab, setSelectedTab] = useState('st');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    if (onSignup) {
      onSignup(selectedTab as 'startup' | 'investor');
    }
    onPageChange('dashboard');
  };

  const userTypes = [
    {
      value: 'startup',
      label: 'Startup',
      icon: Building2,
      description: 'Raise funds for your company'
    },
    {
      value: 'investor',
      label: 'Investor',
      icon: TrendingUp,
      description: 'Discover investment opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">I</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join Investyc</h1>
          <p className="text-blue-600">Create your account and start your journey</p>
        </div>

        <Card className="shadow-xl border-0 bg-white">
          <CardContent className="p-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                {userTypes.map((type) => (
                  <TabsTrigger 
                    key={type.value} 
                    value={type.value} 
                    className="flex flex-col items-center gap-1 py-3"
                  >
                    <type.icon className="w-4 h-4" />
                    <span className="text-xs">{type.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Student Signup */}
              <TabsContent value="student">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <User className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Student Registration</h2>
                    <p className="text-sm text-gray-600">Learn about startups and investing</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-firstname">First Name *</Label>
                      <Input id="student-firstname" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-lastname">Last Name *</Label>
                      <Input id="student-lastname" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email Address *</Label>
                    <Input id="student-email" type="email" placeholder="john@university.edu" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-university">University</Label>
                      <Input id="student-university" placeholder="Your university" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-major">Major/Field of Study</Label>
                      <Input id="student-major" placeholder="Business, Engineering, etc." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password *</Label>
                      <div className="relative">
                        <Input
                          id="student-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-confirm">Confirm Password *</Label>
                      <div className="relative">
                        <Input
                          id="student-confirm"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Create Student Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </TabsContent>

              {/* Startup Signup */}
              <TabsContent value="startup">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <Building2 className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Startup Registration</h2>
                    <p className="text-sm text-gray-600">Raise funds for your company</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-name">Company Name *</Label>
                      <Input id="startup-name" placeholder="Your startup name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-website">Website</Label>
                      <Input id="startup-website" placeholder="https://yourcompany.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="founder-name">Founder Name *</Label>
                      <Input id="founder-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founder-email">Email *</Label>
                      <Input id="founder-email" type="email" placeholder="founder@startup.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-sector">Industry *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="ai">AI/ML</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-stage">Company Stage *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Idea Stage</SelectItem>
                          <SelectItem value="mvp">MVP</SelectItem>
                          <SelectItem value="early">Early Revenue</SelectItem>
                          <SelectItem value="growth">Growth</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startup-description">Company Description *</Label>
                    <Textarea 
                      id="startup-description" 
                      placeholder="Brief description of your startup..."
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-password">Password *</Label>
                      <div className="relative">
                        <Input
                          id="startup-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-confirm">Confirm Password *</Label>
                      <div className="relative">
                        <Input
                          id="startup-confirm"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Create Startup Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </TabsContent>

              {/* Investor Signup */}
              <TabsContent value="investor">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <TrendingUp className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">Investor Registration</h2>
                    <p className="text-sm text-gray-600">Discover investment opportunities</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-name">Full Name *</Label>
                      <Input id="investor-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-email">Email *</Label>
                      <Input id="investor-email" type="email" placeholder="investor@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-type">Investor Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="angel">Angel Investor</SelectItem>
                          <SelectItem value="vc">Venture Capital</SelectItem>
                          <SelectItem value="institution">Institutional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investment-range">Investment Range *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1k-10k">$1K - $10K</SelectItem>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                          <SelectItem value="250k+">$250K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investor-experience">Investment Experience</Label>
                    <Textarea 
                      id="investor-experience" 
                      placeholder="Brief description of your investment background..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="investor-password">Password *</Label>
                      <div className="relative">
                        <Input
                          id="investor-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-confirm">Confirm Password *</Label>
                      <div className="relative">
                        <Input
                          id="investor-confirm"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Create Investor Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => onPageChange('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in here
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}