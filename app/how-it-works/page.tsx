import { Fragment } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { ClipboardCheck, ShoppingCart, Syringe, LayoutDashboard, HeartPulse, ArrowRight, ArrowDown } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Take the suitability quiz",
    description:
      "Answer a few quick questions so we can understand your goals and make sure our service is the right fit for you.",
    image: "/images/step-01-quiz.jpg",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Order tests online",
    description:
      "Choose blood tests, curated bundles, or VO\u2082 max assessments that suit your health goals \u2014 all ordered online with clear, simple guidance.",
    image: "/images/step-02-order.jpg",
  },
  {
    number: "03",
    icon: Syringe,
    title: "Get your blood taken / test done",
    description:
      "Visit one of our trusted pathology or exercise physiology partners to complete your testing \u2014 simple, efficient, and hassle-free.",
    image: "/images/step-03-test.jpg",
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "See your results",
    description:
      "Receive clear, educational insights to help you understand your results in your personalised dashboard.",
    image: "/images/step-04-results.jpg",
  },
  {
    number: "05",
    icon: HeartPulse,
    title: "Make lifestyle changes to improve your health",
    description:
      "Use your insights to guide healthier lifestyle decisions around nutrition, training, and daily habits.",
    image: "/images/step-05-lifestyle.jpg",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 px-6 md:px-12">
        {/* Page header */}
        <div className="mx-auto max-w-3xl pt-16 text-center md:pt-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#8B6F47]">
            The process
          </p>
          <h1 className="font-serif text-3xl leading-tight tracking-tight text-[#2E2B27] text-balance md:text-4xl lg:text-5xl">
            How it works
          </h1>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-5xl py-16 md:py-20">
          {/* Mobile: vertical stack */}
          <div className="flex flex-col items-center md:hidden">
            {steps.map((step, index) => (
              <div key={step.number} className="flex w-full flex-col items-center">
                <div className="group w-full overflow-hidden rounded-xl border border-[#EFE6DA] bg-[#F1ECE4] transition-colors hover:border-[#E5DFD5] hover:bg-[#EFE6DA]">
                  <div className="relative h-32 w-full">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <span className="mb-2 block font-handwriting text-2xl text-[#C46A4A]/40">
                      {step.number}
                    </span>
                    <h3 className="mb-1 font-serif text-base text-[#2E2B27]">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#5E5A54]">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex h-8 items-center justify-center text-[#C46A4A]/40">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: horizontal row */}
          <div className="hidden items-stretch gap-0 md:flex">
            {steps.map((step, index) => (
              <Fragment key={step.number}>
                <div className="group flex w-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#EFE6DA] bg-[#F1ECE4] transition-colors hover:border-[#E5DFD5] hover:bg-[#EFE6DA]">
                  <div className="relative h-28 w-full shrink-0 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 text-center">
                    <span className="mb-2 block font-handwriting text-2xl text-[#C46A4A]/40">
                      {step.number}
                    </span>
                    <h3 className="mb-1 font-serif text-sm text-[#2E2B27] lg:text-base">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#5E5A54]">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex w-8 shrink-0 items-center justify-center text-[#C46A4A]/40">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-2xl pb-16 md:pb-24">
          <p className="mb-2 text-center text-xs font-medium uppercase tracking-widest text-[#8B6F47]">
            FAQ
          </p>
          <h2 className="mb-8 text-center font-serif text-2xl text-[#2E2B27] md:text-3xl">
            Frequently asked questions
          </h2>
          <FaqSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
