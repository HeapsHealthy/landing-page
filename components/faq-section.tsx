"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is this service for?",
    answer:
      "Our services are for generally healthy adults who want to better understand their health data and make confident lifestyle choices. A short online screening quiz helps ensure our services are right for you.",
  },
  {
    question: "Is this a medical service?",
    answer:
      "No. We provide health insights and educational information. We do not diagnose or treat medical conditions. Your GP remains your primary healthcare provider.",
  },
  {
    question: "Do I need a GP referral?",
    answer:
      "No GP referral is required. After completing a suitability check, you can order eligible tests online.",
  },
  {
    question: "What happens if something abnormal shows up?",
    answer:
      "Results are reviewed as part of our safety screening process. If a result may require further medical investigation, you\u2019ll be notified and advised to follow up with your GP.",
  },
  {
    question: "Are doctor consults included?",
    answer:
      "All results will be reviewed by one of our doctors, however doctor consultations are optional and available for those who want additional support interpreting their results.",
  },
  {
    question: "How do I know if this is right for me?",
    answer:
      "Everyone completes a short suitability check before ordering. This helps ensure our services are appropriate for you.",
  },
]

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-[#EFE6DA]"
        >
          <AccordionTrigger className="py-5 text-left font-serif text-base text-[#2E2B27] hover:no-underline hover:text-[#C46A4A] md:text-lg">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-[#5E5A54]">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
