
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "Getting pet insurance with PetShield was the best decision I made for my dog Max. When he needed emergency surgery, they covered 90% of the costs, saving me thousands.",
    author: "Emily Johnson",
    role: "Dog Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&h=120&auto=format&fit=crop",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    content: "My cat Luna had a sudden illness that required hospitalization. PetShield's claims process was seamless, and their staff was incredibly helpful throughout our stressful time.",
    author: "Michael Chen",
    role: "Cat Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120&auto=format&fit=crop",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    content: "The peace of mind that comes with PetShield is invaluable. I never have to worry about choosing between my pet's health and my finances. Their customer service is exceptional.",
    author: "Sarah Williams",
    role: "Multi-pet Owner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&h=120&auto=format&fit=crop",
    petImage: "https://images.unsplash.com/photo-1583511655826-05700442b0b3?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { duration: 0.5 }
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            What <span className="text-orange-500">Pet Parents</span> Say
          </h2>
          <p className="section-subtitle">
            Real stories from pet owners who experienced the difference quality insurance makes.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl relative">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-orange-50 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex mb-8">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="order-first md:order-last">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                          <img 
                            src={testimonial.petImage} 
                            alt="Customer's pet"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-orange-500 w-8" : "bg-orange-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-orange-500 shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-orange-500 shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
