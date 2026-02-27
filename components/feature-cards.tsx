import { Activity, TrendingUp, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Track Your Biomarkers",
    description:
      "Monitor blood work, hormones, and key health indicators all in one place.",
  },
  {
    icon: TrendingUp,
    title: "Optimise Over Time",
    description:
      "See trends, set goals, and understand what your numbers actually mean.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based Insights",
    description:
      "Actionable recommendations backed by science, not guesswork.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-[#EFE6DA] bg-[#F1ECE4] p-5 text-center transition-colors hover:border-[#E5DFD5] hover:bg-[#EFE6DA]"
        >
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#7A8F6B]/10">
            <feature.icon className="h-4 w-4 text-[#7A8F6B]" />
          </div>
          <h3 className="mb-1 font-serif text-base text-[#2E2B27]">
            {feature.title}
          </h3>
          <p className="text-xs leading-relaxed text-[#5E5A54]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
