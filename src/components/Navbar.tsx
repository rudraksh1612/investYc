import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isAuthenticated?: boolean;
  userType?: 'startup' | 'investor';
}

export function Navbar({ currentPage, onPageChange, isAuthenticated = false, userType }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'AI Insights', href: 'ai-insights' },
    { label: 'About Us', href: 'about' },
    { label: 'Startups', href: 'startups' },
    { label: 'Investors', href: 'investors' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' }
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onPageChange('home')}
          >
            <div className="w-10 h-10 mr-3 relative">
              <img 
                src="src/assets/dbca58e50f0fb116396e12502de22981a7611dba.png"
                alt="Investyc Logo" 
                className="w-full h-full object-contain filter brightness-100 group-hover:brightness-100 group-hover:filter-none transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Investyc</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => onPageChange(item.href)}
                className={`relative text-foreground hover:text-primary transition-all duration-300 font-medium group ${
                  currentPage === item.href ? 'text-primary' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  currentPage === item.href ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
            {isAuthenticated && (
              <button
                onClick={() => onPageChange('dashboard')}
                className={`relative text-foreground hover:text-primary transition-all duration-300 font-medium group ${
                  currentPage === 'dashboard' ? 'text-primary' : ''
                }`}
              >
                Dashboard
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  currentPage === 'dashboard' ? 'w-full' : ''
                }`}></span>
              </button>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => onPageChange('login')}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => onPageChange('signup')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button 
                variant="outline"
                onClick={() => onPageChange('home')}
                className="border-border text-foreground hover:bg-muted transition-all duration-300"
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border backdrop-blur-sm">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    onPageChange(item.href);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300 ${
                    currentPage === item.href ? 'text-primary bg-primary/10' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {isAuthenticated && (
                <button
                  onClick={() => {
                    onPageChange('dashboard');
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300 ${
                    currentPage === 'dashboard' ? 'text-primary bg-primary/10' : ''
                  }`}
                >
                  Dashboard
                </button>
              )}
              <div className="pt-4 space-y-2">
                {!isAuthenticated ? (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        onPageChange('login');
                        setIsOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-accent"
                      onClick={() => {
                        onPageChange('signup');
                        setIsOpen(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-muted"
                    onClick={() => {
                      onPageChange('home');
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
