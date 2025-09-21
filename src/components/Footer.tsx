import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'For Startups', href: 'startups' },
        { label: 'For Investors', href: 'investors' },
        { label: 'How It Works', href: 'how-it-works' },
        { label: 'Education', href: 'education' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: 'about' },
        { label: 'Careers', href: 'careers' },
        { label: 'Contact', href: 'register' },
        { label: 'Blog', href: 'blog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: 'help' },
        { label: 'API Documentation', href: 'api' },
        { label: 'Security', href: 'security' },
        { label: 'Status', href: 'status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: 'terms' },
        { label: 'Privacy Policy', href: 'privacy' },
        { label: 'KYC / AML Policy', href: 'kyc-policy' },
        { label: 'Compliance', href: 'compliance' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="src/assets/dbca58e50f0fb116396e12502de22981a7611dba.png"
                alt="Investyc Logo"
                className="w-8 h-8 mr-3"
              />
              <span className="text-xl font-semibold text-foreground">Investyc</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering startups and educating investors through innovative funding solutions and comprehensive educational resources.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onPageChange(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Investyc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => onPageChange('terms')}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => onPageChange('privacy')}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onPageChange('kyc-policy')}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                KYC / AML Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
