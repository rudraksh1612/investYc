import { motion } from 'motion/react';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface TermsPageProps {
  onPageChange: (page: string) => void;
}

export function TermsPage({ onPageChange }: TermsPageProps) {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using Investyc platform, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: '2. Platform Services',
      content: 'Investyc provides an investment platform connecting startups with investors through TrustSPV compartments and educational resources.'
    },
    {
      title: '3. User Registration',
      content: 'Users must provide accurate information during registration and maintain the confidentiality of their account credentials.'
    },
    {
      title: '4. Investment Risks',
      content: 'All investments carry risk. Past performance does not guarantee future results. Users should consult financial advisors before making investment decisions.'
    },
    {
      title: '5. KYC/AML Compliance',
      content: 'All users must complete Know Your Customer (KYC) and Anti-Money Laundering (AML) verification as required by applicable regulations.'
    },
    {
      title: '6. Privacy and Data Protection',
      content: 'We are committed to protecting user privacy and handle personal data in accordance with our Privacy Policy and applicable data protection laws.'
    },
    {
      title: '7. Intellectual Property',
      content: 'All content, trademarks, and intellectual property on the platform are owned by Investyc or licensed from third parties.'
    },
    {
      title: '8. Limitation of Liability',
      content: 'Investyc shall not be liable for any direct, indirect, incidental, or consequential damages arising from platform use.'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our platform
          </p>
          <div className="text-sm text-muted-foreground mt-4">
            Last updated: December 20, 2024
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-6 bg-primary/10 border-primary/20">
            <CardContent className="p-0">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground">
                    Investyc is not designed for collecting personally identifiable information (PII) 
                    or securing highly sensitive data. This platform is for demonstration purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{section.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-foreground mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <button
                onClick={() => onPageChange('contact')}
                className="bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Contact Us
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}