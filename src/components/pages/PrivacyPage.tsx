import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface PrivacyPageProps {
  onPageChange: (page: string) => void;
}

export function PrivacyPage({ onPageChange }: PrivacyPageProps) {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly, such as account details, investment preferences, and KYC documentation required for compliance.'
    },
    {
      icon: Shield,
      title: 'How We Use Your Information',
      content: 'Your information is used to provide platform services, process investments, ensure compliance, and improve user experience.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: 'We implement industry-standard security measures to protect your data, including encryption, secure storage, and access controls.'
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: 'We do not sell personal information. Data may be shared with service providers, regulatory bodies, or as required by law.'
    }
  ];

  const rights = [
    'Access your personal data',
    'Correct inaccurate information',
    'Request data deletion',
    'Data portability',
    'Withdraw consent',
    'Lodge complaints with authorities'
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
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
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
          <Card className="p-6 bg-destructive/10 border-destructive/20">
            <CardContent className="p-0">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Privacy Notice</h3>
                  <p className="text-muted-foreground">
                    This platform is for demonstration purposes only. Investyc is not designed for 
                    collecting real PII or securing sensitive personal data. Do not input real personal information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="p-8 bg-card border-border">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Your Rights</h3>
              <p className="text-muted-foreground mb-6">
                Under applicable data protection laws, you have the following rights regarding your personal data:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {rights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-foreground">{right}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Our Privacy Team</h3>
              <p className="text-muted-foreground mb-6">
                Have questions about your privacy rights or how we handle your data?
              </p>
              <button
                onClick={() => onPageChange('contact')}
                className="bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Contact Us
              </button>
            </CardContent>
          </Card>

          <Card className="p-8 bg-card border-border">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Protection Officer</h3>
              <p className="text-muted-foreground mb-4">
                For privacy-related inquiries, you can reach our Data Protection Officer:
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Email: privacy@investyc.com</div>
                <div>Phone: +1 (555) 123-4567</div>
                <div>Address: 123 Finance Street, NY 10001</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}