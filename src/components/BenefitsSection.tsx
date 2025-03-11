
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Wallet, 
  Clock, 
  Search,
  PiggyBank
} from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    title: "Comprehensive Coverage",
    description: "From accidents to illnesses, surgeries to medications, we've got your pet covered for all major health issues."
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-orange-500" />,
    title: "Access to Best Vets",
    description: "Get treatment from any licensed veterinarian, specialist, or emergency clinic in the country."
  },
  {
    icon: <Wallet className="w-10 h-10 text-orange-500" />,
    title: "Fast Reimbursements",
    description: "Submit claims online and get reimbursed quickly, often within days of your visit."
  },
  {
    icon: <Clock className="w-10 h-10 text-orange-500" />,
    title: "24/7 Pet Helpline",
    description: "Access to veterinary professionals around the clock for any pet health concern."
  },
  {
    icon: <Search className="w-10 h-10 text-orange-500" />,
    title: "No Networks",
    description: "Visit any licensed vet anywhere - no network restrictions or referrals needed."
  },
  {
    icon: <PiggyBank className="w-10 h-10 text-orange-500" />,
    title: "Customizable Plans",
    description: "Tailor coverage to fit your budget with adjustable deductibles, limits, and reimbursement levels."
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: 0.1 * index,
            ease: [0.25, 0.1, 0.25, 1]
          } 
        }
      }}
      className="feature-card hover-lift group"
    >
      <div className="mb-4 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-100">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
      <p className="text-muted-foreground">{benefit.description}</p>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="benefits" className="py-24 bg-white">
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
            Why Choose <span className="text-orange-500">PetShield</span> Insurance
          </h2>
          <p className="section-subtitle">
            We offer the most comprehensive coverage for your furry companions with plans designed to fit every need and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
