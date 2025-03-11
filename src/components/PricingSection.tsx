
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Basic",
    price: "$19",
    description: "Essential coverage for accidents and basic treatments.",
    features: [
      { name: "Accident Coverage", included: true },
      { name: "Illness Coverage", included: true },
      { name: "Emergency Care", included: true },
      { name: "Prescriptions", included: false },
      { name: "Dental Coverage", included: false },
      { name: "Virtual Vet Visits", included: false },
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Premium",
    price: "$39",
    description: "Comprehensive coverage for complete peace of mind.",
    features: [
      { name: "Accident Coverage", included: true },
      { name: "Illness Coverage", included: true },
      { name: "Emergency Care", included: true },
      { name: "Prescriptions", included: true },
      { name: "Dental Coverage", included: true },
      { name: "Virtual Vet Visits", included: true },
    ],
    cta: "Get Started",
    highlight: true
  },
  {
    name: "Standard",
    price: "$29",
    description: "Balanced coverage for essential health needs.",
    features: [
      { name: "Accident Coverage", included: true },
      { name: "Illness Coverage", included: true },
      { name: "Emergency Care", included: true },
      { name: "Prescriptions", included: true },
      { name: "Dental Coverage", included: false },
      { name: "Virtual Vet Visits", included: true },
    ],
    cta: "Get Started",
    highlight: false
  }
];

const PricingSection = () => {
  const [petType, setPetType] = useState("dog");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="plans" className="py-24 bg-gradient-to-b from-white to-orange-50">
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
            Simple, Transparent <span className="text-orange-500">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your pet's needs. No hidden fees, just comprehensive coverage.
          </p>

          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
              <button
                onClick={() => setPetType("dog")}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                  petType === "dog"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Dogs
              </button>
              <button
                onClick={() => setPetType("cat")}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                  petType === "cat"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Cats
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5, 
                  delay: 0.1 * index + 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                } 
              }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? "bg-white border-2 border-orange-500 shadow-xl transform md:-translate-y-4" 
                  : "bg-white border border-border shadow-sm hover:shadow"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.highlight ? "pt-10" : ""}`}>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 mb-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="#quote" 
                  className={`block text-center py-3 px-6 rounded-full font-medium transition-all ${
                    plan.highlight 
                      ? "bg-orange-500 text-white hover:bg-orange-600 shadow-sm" 
                      : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
