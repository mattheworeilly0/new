
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about PetShield insurance</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm border px-6">
            <AccordionTrigger className="text-lg font-medium py-4">What does pet insurance cover?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Our pet insurance covers a wide range of veterinary care including accidents, illnesses, surgeries, 
              medications, emergency care, and depending on your plan, routine checkups and preventative care.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm border px-6">
            <AccordionTrigger className="text-lg font-medium py-4">How do claims work?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Filing a claim is simple. After your pet receives treatment, submit your itemized vet bill through our 
              online portal or mobile app. Most claims are processed within 5-7 business days, and reimbursement is 
              sent directly to your preferred payment method.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm border px-6">
            <AccordionTrigger className="text-lg font-medium py-4">Is there a waiting period?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Yes, there is a waiting period of 14 days for illness coverage and 48 hours for accident coverage. 
              This begins from the effective date of your policy. Preventative care coverage has no waiting period.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm border px-6">
            <AccordionTrigger className="text-lg font-medium py-4">Are pre-existing conditions covered?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Pre-existing conditions that occurred before enrollment or during waiting periods are not covered. 
              However, if a condition is completely cured and treatment-free for 180 days, it may no longer be 
              considered pre-existing (except for knee and ligament conditions).
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm border px-6">
            <AccordionTrigger className="text-lg font-medium py-4">Can I visit any veterinarian?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Yes, you can visit any licensed veterinarian, specialist, or emergency clinic in the United States 
              or Canada. There are no network restrictions with our insurance plans.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
