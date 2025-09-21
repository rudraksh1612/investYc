import { useState } from 'react';
import { ArrowRight, User, Building, Users, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface RegisterPageProps {
  onPageChange: (page: string) => void;
}

export function RegisterPage({ onPageChange }: RegisterPageProps) {
  const [selectedTab, setSelectedTab] = useState('startup');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Registration submitted! We\'ll be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Investyc
            </span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Start your journey with us. Whether you're a startup seeking funding or an investor 
            looking for opportunities, we're here to connect you with the right partners.
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-background">
          <CardContent className="p-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="startup" className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Startup
                </TabsTrigger>
                <TabsTrigger value="investor" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Investor
                </TabsTrigger>
                <TabsTrigger value="general" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  General Inquiry
                </TabsTrigger>
              </TabsList>

              {/* Startup Registration */}
              <TabsContent value="startup">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-green-600 mb-2">Startup Registration</h2>
                    <p className="text-white">Tell us about your startup and funding needs</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name *</Label>
                      <Input id="company-name" placeholder="Your startup name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" type="url" placeholder="https://yourcompany.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="founder-name">Founder Name *</Label>
                      <Input id="founder-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founder-email">Email *</Label>
                      <Input id="founder-email" type="email" placeholder="founder@startup.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, Country" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="sector">Industry Sector *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fintech">FinTech</SelectItem>
                          <SelectItem value="healthtech">HealthTech</SelectItem>
                          <SelectItem value="edtech">EdTech</SelectItem>
                          <SelectItem value="cleantech">CleanTech</SelectItem>
                          <SelectItem value="ai">AI/ML</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Company Stage *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Idea Stage</SelectItem>
                          <SelectItem value="mvp">MVP</SelectItem>
                          <SelectItem value="early-revenue">Early Revenue</SelectItem>
                          <SelectItem value="growth">Growth Stage</SelectItem>
                          <SelectItem value="scale">Scale Stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="funding-amount">Funding Amount Needed</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select funding range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                          <SelectItem value="over-10m">Over $10M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Funding Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need funding?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pitch">Company Description *</Label>
                    <Textarea 
                      id="pitch" 
                      placeholder="Tell us about your company, what problem you solve, and your business model..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl"
                  >
                    Submit Startup Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </TabsContent>

              {/* Investor Registration */}
              <TabsContent value="investor">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-600 mb-2">Investor Registration</h2>
                    <p className="text-white">Join our network of smart investors</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="investor-name">Full Name *</Label>
                      <Input id="investor-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-email">Email *</Label>
                      <Input id="investor-email" type="email" placeholder="investor@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="investor-phone">Phone Number</Label>
                      <Input id="investor-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investor-location">Location</Label>
                      <Input id="investor-location" placeholder="City, Country" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="investor-type">Investor Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investor type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual Investor</SelectItem>
                          <SelectItem value="angel">Angel Investor</SelectItem>
                          <SelectItem value="vc">Venture Capital</SelectItem>
                          <SelectItem value="family-office">Family Office</SelectItem>
                          <SelectItem value="institution">Institutional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investment-range">Investment Range *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1k-10k">$1K - $10K</SelectItem>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                          <SelectItem value="250k-1m">$250K - $1M</SelectItem>
                          <SelectItem value="over-1m">Over $1M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-sectors">Preferred Investment Sectors</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred sectors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="healthtech">HealthTech</SelectItem>
                        <SelectItem value="edtech">EdTech</SelectItem>
                        <SelectItem value="cleantech">CleanTech</SelectItem>
                        <SelectItem value="ai">AI/ML</SelectItem>
                        <SelectItem value="saas">SaaS</SelectItem>
                        <SelectItem value="all">All Sectors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment-experience">Investment Experience</Label>
                    <Textarea 
                      id="investment-experience" 
                      placeholder="Tell us about your investment background and experience..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl"
                  >
                    Submit Investor Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </TabsContent>

              {/* General Inquiry */}
              <TabsContent value="general">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">General Inquiry</h2>
                    <p className="text-white">Get in touch with our team</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input id="contact-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input id="contact-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-3 rounded-xl"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">Need Help?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>hello@investyc.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}