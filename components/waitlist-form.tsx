"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-[#7A8F6B]/30 bg-[#7A8F6B]/10 px-5 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A8F6B]">
          <Check className="h-4 w-4 text-[#FAF7F2]" />
        </div>
        <p className="text-sm text-[#2E2B27]">
          {"You're on the list. We'll be in touch soon."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 flex-1 rounded-lg border border-[#E5DFD5] bg-[#FAF7F2] px-4 text-sm text-[#2E2B27] placeholder:text-[#5E5A54]/60 outline-none transition-colors focus:border-[#C46A4A] focus:ring-1 focus:ring-[#C46A4A]"
      />
      <button
        type="submit"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#C46A4A] px-6 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#A8563B]"
      >
        Join the Waitlist
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
