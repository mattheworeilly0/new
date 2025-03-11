
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-display font-medium text-foreground"
        >
          <PawPrint className="w-8 h-8 text-orange-500" />
          <span>PetShield</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#plans">Plans</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <Link 
            to="#quote" 
            className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-md"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            <MobileNavLink href="#benefits" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </MobileNavLink>
            <MobileNavLink href="#plans" onClick={() => setIsMenuOpen(false)}>
              Plans
            </MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </MobileNavLink>
            <Link 
              to="#quote" 
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-foreground text-sm font-medium transition-colors hover:text-orange-500"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="block py-3 text-center text-foreground font-medium border-b border-border"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
