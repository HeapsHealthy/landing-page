import { Check, X } from "lucide-react"

export function AudienceTiles() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* This IS for you */}
      <div className="rounded-xl border border-[#7A8F6B]/30 bg-[#7A8F6B]/8 p-6 md:p-8">
        <div className="mb-4 flex items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7A8F6B]">
            <Check className="h-4 w-4 text-[#FAF7F2]" />
          </div>
          <h3 className="font-serif text-lg text-[#2E2B27] md:text-xl">
            This is for you if you:
          </h3>
        </div>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#3A3A3A]">
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A8F6B]" />
            Are generally healthy and take an active, preventative approach to your health.
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A8F6B]" />
            {"Like understanding your numbers \u2014 blood markers, fitness metrics, performance data."}
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A8F6B]" />
            Want objective insights to help guide lifestyle and training decisions.
          </li>
        </ul>
      </div>

      {/* This may NOT be for you */}
      <div className="rounded-xl border border-[#EFE6DA] bg-[#F1ECE4] p-6 md:p-8">
        <div className="mb-4 flex items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C46A4A]/80">
            <X className="h-4 w-4 text-[#FAF7F2]" />
          </div>
          <h3 className="font-serif text-lg text-[#2E2B27] md:text-xl">
            This may not be for you if you:
          </h3>
        </div>
        <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#3A3A3A]">
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C46A4A]/60" />
            Are looking for diagnosis, treatment, or urgent medical care.
          </li>
        </ul>
      </div>
    </div>
  )
}
