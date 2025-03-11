
import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-display font-medium text-foreground mb-6">
              <PawPrint className="w-8 h-8 text-orange-500" />
              <span>PetShield</span>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Comprehensive pet insurance that provides the protection your furry family members deserve.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 transition-colors hover:bg-orange-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 transition-colors hover:bg-orange-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 transition-colors hover:bg-orange-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 transition-colors hover:bg-orange-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#plans" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Pet Care Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Find a Vet
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Claim Process
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Coverage Details
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  Partner Programs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>123 Pet Avenue, Furry Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>(800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>support@petshield.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PetShield Insurance. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
