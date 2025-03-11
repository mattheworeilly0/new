
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CalendarIcon, PenLine, Cat, Dog, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const [petType, setPetType] = useState("dog");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!breed || !age || !zipCode) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulating form submission
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Quote Request Received!",
        description: "We'll get back to you with your personalized quote shortly.",
      });
    }, 1000);
  };

  return (
    <section id="quote" className="py-24 bg-gradient-to-b from-orange-50 to-white">
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
            Get Your <span className="text-orange-500">Free Quote</span> Today
          </h2>
          <p className="section-subtitle">
            It only takes a minute to see how much you could save on pet healthcare.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.5,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              } 
            }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-border"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-8">
                <div className="mb-6">
                  <p className="font-medium mb-3">What type of pet do you have?</p>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPetType("dog")}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border ${
                        petType === "dog" 
                          ? "border-orange-500 bg-orange-50" 
                          : "border-border hover:border-orange-200"
                      } transition-all`}
                    >
                      <Dog className={`w-8 h-8 ${petType === "dog" ? "text-orange-500" : "text-muted-foreground"}`} />
                      <span className={petType === "dog" ? "font-medium" : ""}>Dog</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPetType("cat")}
                      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border ${
                        petType === "cat" 
                          ? "border-orange-500 bg-orange-50" 
                          : "border-border hover:border-orange-200"
                      } transition-all`}
                    >
                      <Cat className={`w-8 h-8 ${petType === "cat" ? "text-orange-500" : "text-muted-foreground"}`} />
                      <span className={petType === "cat" ? "font-medium" : ""}>Cat</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="breed" className="block text-sm font-medium mb-1">
                      Pet's Breed
                    </label>
                    <div className="relative">
                      <PenLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        id="breed"
                        type="text"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        placeholder={petType === "dog" ? "e.g., Labrador Retriever" : "e.g., Siamese"}
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-medium mb-1">
                      Pet's Age
                    </label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <select
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="input-field pl-10 appearance-none"
                        required
                      >
                        <option value="">Select age</option>
                        <option value="under1">Under 1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="4-7">4-7 years</option>
                        <option value="8plus">8+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                      Your ZIP Code
                    </label>
                    <input
                      id="zipCode"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="e.g., 90210"
                      className="input-field"
                      required
                      maxLength={5}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto sm:flex-1"
                  >
                    Get My Free Quote
                  </button>
                </div>

                <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>
                    By submitting this form, you agree to our{" "}
                    <Link to="#" className="text-orange-500 underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-orange-500 underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="mb-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  We've received your quote request and we're working on calculating the perfect plan for your pet.
                  You'll receive your personalized quote via email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mx-auto"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
