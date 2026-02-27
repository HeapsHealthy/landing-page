import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <Navbar />

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 md:px-12">
        <div className="mx-auto w-full max-w-4xl py-16 md:py-24">

          {/* Hero content with phone */}
          <div className="relative flex flex-col items-center md:flex-row md:items-start md:gap-12">

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              {/* Decorative pill */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7A8F6B]/30 bg-[#7A8F6B]/10 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7A8F6B] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7A8F6B]" />
                </span>
                <span className="text-xs font-medium text-[#7A8F6B]">
                  Launch late 2026
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-5 font-serif text-4xl leading-tight tracking-tight text-[#2E2B27] text-balance md:text-5xl lg:text-6xl">
                Health optimisation for people who like to <span className="text-[#C46A4A]">know their numbers</span>
              </h1>

              {/* Sub-headline */}
              <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-[#5E5A54] text-pretty md:mx-0">
                A straightforward, data-driven approach to understanding and improving your health.
              </p>

              {/* CTA */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center md:items-center">
                <Link
                  href="/how-it-works"
                  className="inline-block rounded-full bg-[#C46A4A] px-8 py-3 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#B05A3C]"
                >
                  See how it works
                </Link>
                <span className="text-sm text-[#5E5A54]">or</span>
                <div className="group relative">
                  <a
                    href="#about"
                    className="text-sm font-medium text-[#2E2B27] underline decoration-[#7A8F6B] underline-offset-4 transition-colors group-hover:text-[#7A8F6B]"
                  >
                    See what we{"'"}re about
                  </a>
                  <a href="#about" className="absolute left-1/2 top-full mt-2 -translate-x-1/2">
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" className="transition-transform group-hover:translate-y-1">
                      <path d="M10 2C9.5 8 10.5 16 10 24C9.5 28 10.5 32 10 34" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 34C7.5 31 5 28.5 2.5 27" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M10 34C12.5 31 15 28.5 17.5 27" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone mockup with annotations - hidden on mobile, visible on md+ */}
            <div className="relative z-10 mb-8 hidden shrink-0 md:block">
              <div className="relative w-[200px] lg:w-[220px]" style={{ perspective: "800px" }}>
                <div
                  className="rounded-[25px] border-[3px] border-[#524E4A] bg-[#524E4A] p-[2.5px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  style={{
                    transform: "rotateY(-12deg) rotateX(4deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Side buttons */}
                  <div className="absolute -right-[6px] top-[80px] h-[40px] w-[3px] rounded-r-sm bg-[#625E5A]" />
                  <div className="absolute -left-[6px] top-[60px] h-[24px] w-[3px] rounded-l-sm bg-[#625E5A]" />
                  <div className="absolute -left-[6px] top-[95px] h-[36px] w-[3px] rounded-l-sm bg-[#625E5A]" />
                  <div className="absolute -left-[6px] top-[140px] h-[36px] w-[3px] rounded-l-sm bg-[#625E5A]" />
                  {/* Screen */}
                  <div className="overflow-hidden rounded-[24px] bg-[#FAF7F2]">
                    <Image
                      src="/images/dashboard-screenshot.png"
                      alt="Heaps Healthy personalised dashboard showing biomarker results including Fasting Glucose and Vitamin D with historical trends"
                      width={320}
                      height={693}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                {/* Annotation: Track your biomarkers - right side, ~1/3 down */}
                <div className="absolute left-[101%] top-[33%] flex items-center gap-1">
                  <svg width="50" height="20" viewBox="0 0 50 20" fill="none" className="shrink-0">
                    <path d="M48 9C42 8 36 11 28 10C22 9 18 12 12 10" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 4.5C9 7 4 9 2.5 10.5C4.5 11 9 13.5 12.5 16" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span className="font-handwriting text-2xl leading-tight text-[#7A8F6B] lg:text-3xl">
                    Track your<br />biomarkers
                  </span>
                </div>

                {/* Annotation: Optimise over time - left side, ~3/4 down */}
                <div className="absolute right-[105%] top-[77%] flex items-center gap-2 lg:right-[110%]">
                  <span className="whitespace-nowrap font-handwriting text-2xl text-[#7A8F6B] lg:text-3xl">
                    Optimise over time
                  </span>
                  <svg width="50" height="20" viewBox="0 0 50 20" fill="none" className="shrink-0 -scale-x-100">
                    <path d="M48 11C42 12 36 9 28 10C22 11 18 8 12 10" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 4.5C9 7 4 9 2.5 10.5C4.5 11 9 13.5 12.5 16" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* About / Aims section */}
        <section id="about" className="mx-auto w-full max-w-3xl px-6 pb-20 pt-8 md:px-0 md:pb-28 md:pt-12">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-[#8B6F47]">
            What we stand for
          </p>
          <h2 className="mb-10 text-center font-serif text-2xl text-[#2E2B27] text-balance md:text-3xl">
            Our values
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Know your numbers",
                description: "Give people access to their own health data so they can make informed, confident decisions about their wellbeing.",
              },
              {
                title: "Lifestyle is King",
                description: "We believe the best levers you can pull for good health are sleep, diet, exercise and stress management.",
              },
              {
                title: "Support, not replace, your GP",
                description: "Complement the existing healthcare system by giving people insights to have better conversations with their doctors.",
              },
            ].map((aim) => (
              <div
                key={aim.title}
                className="rounded-xl border border-[#EFE6DA] bg-[#F1ECE4] p-6 transition-colors hover:border-[#E5DFD5] hover:bg-[#EFE6DA]"
              >
                <h3 className="mb-2 font-serif text-base text-[#2E2B27]">
                  {aim.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5E5A54]">
                  {aim.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the founder section */}
        <section className="mx-auto w-full max-w-3xl px-6 pb-20 md:px-0 md:pb-28">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-[#8B6F47]">
            The story behind Heaps Healthy
          </p>
          <h2 className="mb-10 text-center font-serif text-2xl text-[#2E2B27] text-balance md:text-3xl">
            Meet the founder
          </h2>

          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
            {/* Photo */}
            <div className="relative w-48 shrink-0 md:w-56">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/chris-founder.png"
                  alt="Chris, Co-founder of Heaps Healthy"
                  width={400}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Choc milk tattoo overlay */}
              <div className="absolute -bottom-8 -left-8 h-24 w-24 overflow-hidden rounded-full border-2 border-[#FAF7F2] shadow-md md:h-28 md:w-28">
                <Image
                  src="/images/choc-milk-tattoo.jpeg"
                  alt="Choc milk tattoo"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Hand-drawn "real tattoo" annotation */}
              <div className="absolute -bottom-14 -left-28 flex items-end gap-1 md:-bottom-16 md:-left-32">
                <span className="whitespace-nowrap font-handwriting text-lg text-[#7A8F6B] md:text-xl">
                  real tattoo
                </span>
                <svg width="50" height="36" viewBox="0 0 50 36" fill="none" className="shrink-0">
                  <path d="M2 34C8 30 16 24 24 18C32 12 40 8 46 4" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" />
                  <path d="M46 4C42 5 39 3 38 2" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M46 4C44 8 43 10 44 12" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#5E5A54]">
              <p className="font-serif text-lg text-[#2E2B27]">
                Hi, I{"'"}m Chris, Co-founder of Heaps Healthy.
              </p>
              <p>
                I wish I had an inspirational health transformation story to share with you. But the truth is, I{"'"}m just an everyday guy who had a pretty routine upbringing in this beautiful country. There{"'"}s no dramatic before-and-after. No life-altering diagnosis.
              </p>
              <p>
                All I have is a story about choccy milk.
              </p>
              <p>
                It may not look like it, but like most of us, I struggle with discipline around food and healthy eating habits. Don{"'"}t get me wrong — I get it right most of the time. But I also get it wrong, often — and not because I don{"'"}t know better.
              </p>
              <p>
                Information isn{"'"}t the problem. Execution is.
              </p>
              <p>
                Whether it{"'"}s from Peter Attia, Rhonda Patrick, or Andrew Huberman, there is an abundance of exceptional, zero-cost information available to help us live healthier lives. The hard part is walking the walk.
              </p>
              <p>
                In other words, I know I shouldn{"'"}t be eating heaps of highly palatable, highly processed foods — but you{"'"}d better believe I{"'"}m snagging a Twirl at the checkout, finishing the whole packet of Tim Tams, or binging on whatever I can get my hands on late into the evening. Sometimes it feels almost impossible to say no.
              </p>
              <p>
                This is the modern struggle: discipline and accountability. And it{"'"}s leading us toward a metabolic nightmare. All the information in the world is useless if you can{"'"}t put it into practice.
              </p>
              <p>
                Over the last few years, I{"'"}ve watched my cholesterol steadily creep up. Even after it was flagged as high — and I was advised to {'"'}cut the extra fat off your steak and move more{'"'} — it continued to rise. Eventually, through one of my health heroes mentioned above, I learned I should reduce my saturated fat intake.
              </p>
              <p>
                It turns out that a daily ritual of Mungalli chocolate milk (13g saturated fat) plus a Whittaker{"'"}s coconut slab (13.5g saturated fat) might not be the smartest choice. Nothing wrong with the products — they{"'"}re great. Everything wrong with my overconsumption.
              </p>
              <p>
                I saw {'"'}25g protein{'"'} written on the bottle and thought, {'"'}Perfect — that{"'"}s basically a protein shake.{'"'} Silly me.
              </p>
              <p>
                The good news? My cholesterol is now on its way down — entirely through better dietary choices (with the occasional choccy milk or coconut slab still making an appearance). That journey is part of the inspiration behind Heaps Healthy.
              </p>
              <p>
                A service where you can know your numbers, improve your habits, and take control of your health.
              </p>
              <p>
                Welcome.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
