"use client"

import { useState } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please email us directly at chris@heapshealthy.com.au")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A8F6B]/15">
          <CheckCircle2 className="h-6 w-6 text-[#7A8F6B]" />
        </div>
        <h3 className="font-serif text-lg text-[#2E2B27]">Message sent</h3>
        <p className="max-w-xs text-sm text-[#5E5A54]">
          Thanks for reaching out. We will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" suppressHydrationWarning>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[#2E2B27]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            suppressHydrationWarning
            className="rounded-lg border border-[#E5DFD5] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2E2B27] placeholder:text-[#5E5A54]/50 focus:border-[#C46A4A] focus:outline-none focus:ring-1 focus:ring-[#C46A4A]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[#2E2B27]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            suppressHydrationWarning
            className="rounded-lg border border-[#E5DFD5] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2E2B27] placeholder:text-[#5E5A54]/50 focus:border-[#C46A4A] focus:outline-none focus:ring-1 focus:ring-[#C46A4A]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-[#2E2B27]">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What is this regarding?"
          suppressHydrationWarning
          className="rounded-lg border border-[#E5DFD5] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2E2B27] placeholder:text-[#5E5A54]/50 focus:border-[#C46A4A] focus:outline-none focus:ring-1 focus:ring-[#C46A4A]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[#2E2B27]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us more..."
          suppressHydrationWarning
          className="resize-none rounded-lg border border-[#E5DFD5] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#2E2B27] placeholder:text-[#5E5A54]/50 focus:border-[#C46A4A] focus:outline-none focus:ring-1 focus:ring-[#C46A4A]"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#C46A4A] px-6 py-3 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#B25D40] disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:ring-offset-2 focus:ring-offset-[#F1ECE4]"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  )
}
