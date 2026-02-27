import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#EFE6DA] px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 sm:flex-row">
        <Link href="/" className="font-handwriting text-lg text-[#C46A4A]">
          Heaps Healthy
        </Link>
        <p className="text-xs text-[#5E5A54]">
          {"© 2026 Heaps Healthy. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
