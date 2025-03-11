
import { ArrowDown, Shield, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-transparent z-[-1]" />
      
      {/* Orange blob gradient in background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-200 rounded-full blur-3xl opacity-20 z-[-1] animate-pulse-soft" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted by 50,000+ pet owners</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold leading-tight mb-6">
              Protect your <span className="text-orange-500">furry family</span> member
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Comprehensive pet insurance that gives you peace of mind and your pets the care they deserve, without breaking the bank.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="#quote" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                Get a Quote
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </Link>
              
              <Link to="#benefits" className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=70&h=70&auto=format&fit=crop" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=70&h=70&auto=format&fit=crop" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=70&h=70&auto=format&fit=crop" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9/5</span> from 2,000+ reviews
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="Happy cat being held"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <HeartHandshake className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">24/7 Vet Support</p>
                    <p className="text-sm text-muted-foreground">Always there when needed</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium">90% Coverage</p>
                    <p className="text-sm text-muted-foreground">On eligible expenses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
