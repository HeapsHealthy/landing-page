import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Send email using Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Heaps Healthy Contact <onboarding@resend.dev>",
          to: "chris@heapshealthy.com.au",
          subject: `[Contact Form] ${subject}`,
          reply_to: email,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          `,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error("Resend error:", errorData)
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Fallback: log the message if no email service is configured
    console.log("Contact form submission (no email service configured):")
    console.log({ name, email, subject, message })
    console.log(`To set up email delivery, add RESEND_API_KEY to your environment variables.`)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
