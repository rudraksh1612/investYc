import { motion } from 'motion/react';
import { Shield, FileCheck, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface KYCPolicyPageProps {
  onPageChange: (page: string) => void;
}

export function KYCPolicyPage({ onPageChange }: KYCPolicyPageProps) {
  const kycSteps = [
    {
      step: 1,
      title: 'Personal Details',
      description: 'Provide basic personal information including name, address, and contact details',
      documents: ['Government-issued ID', 'Proof of address', 'Phone verification']
    },
    {
      step: 2,
      title: 'Document Upload',
      description: 'Upload required documentation for identity and address verification',
      documents: ['Passport/Driver License', 'Utility bill', 'Bank statement']
    },
    {
      step: 3,
      title: 'Verification Process',
      description: 'Our compliance team reviews your documents and verifies your identity',
      documents: ['Identity verification', 'Address confirmation', 'Background check']
    }
  ];

  const amlRequirements = [
    'Source of funds verification',
    'Politically Exposed Person (PEP) screening',
    'Sanctions list checking',
    'Ongoing transaction monitoring',
    'Suspicious activity reporting',
    'Regular compliance reviews'
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Full compliance with local and international AML/CTF regulations'
    },
    {
      icon: FileCheck,
      title: 'Document Security',
      description: 'All documents are encrypted and stored in secure, compliant systems'
    },
    {
      icon: UserCheck,
      title: 'Identity Verification',
      description: 'Multi-layer identity verification using advanced AI and manual review'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            KYC / AML Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance to ensure 
            platform security and regulatory adherence.
          </p>
          <div className="text-sm text-muted-foreground mt-4">
            Last updated: December 20, 2024
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6 bg-primary/10 border-primary/20">
            <CardContent className="p-0">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Compliance Notice</h3>
                  <p className="text-muted-foreground">
                    All users must complete KYC verification before accessing investment features. 
                    This is a legal requirement for financial services platforms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Compliance Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-0 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* KYC Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">KYC Verification Process</h2>
            <p className="text-xl text-muted-foreground">Complete verification in 3 simple steps</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {kycSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group relative">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground mb-3">Required Documents:</h4>
                      {step.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  {index < kycSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AML Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="p-8 bg-card border-border">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Anti-Money Laundering (AML) Requirements</h3>
              <p className="text-muted-foreground mb-8">
                Our platform implements comprehensive AML measures to prevent financial crimes and ensure regulatory compliance:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {amlRequirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Ready to Get Verified?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Complete your KYC verification to access all platform features and start investing securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => onPageChange('register')}
                  className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start KYC Process
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onPageChange('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}