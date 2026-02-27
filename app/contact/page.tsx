import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"


export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <Navbar />

      <main className="flex-1 px-6 md:px-12">
        {/* Page header */}
        <div className="mx-auto max-w-3xl pt-16 text-center md:pt-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#8B6F47]">
            Get in touch
          </p>
          <h1 className="mb-4 font-serif text-3xl leading-tight tracking-tight text-[#2E2B27] text-balance md:text-4xl lg:text-5xl">
            Contact us
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-[#5E5A54] text-pretty">
            Have a question or want to learn more? We would love to hear from you.
          </p>
        </div>

        {/* Contact content */}
        <div className="mx-auto max-w-xl py-16 md:py-20">
          <div className="rounded-xl border border-[#EFE6DA] bg-[#F1ECE4] p-6 md:p-8">
            <h2 className="mb-1 font-serif text-xl text-[#2E2B27]">
              Send us a message
            </h2>
            <p className="mb-6 text-sm text-[#5E5A54]">
              Fill in the form below and we will get back to you as soon as we can.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
