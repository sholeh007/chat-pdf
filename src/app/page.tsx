import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="flex mx-auto mb-4 max-w-fit items-center justify-center gap-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm text-gray-700">
            CPdf is now <span className="font-bold">live!</span>
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-violet-600">document</span> in seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          CPdf allows you to have a conversation with any PDF document you want. Simply
          upload your file and start asking questions right away.
        </p>
        <Link
          className={buttonVariants({ size: "lg", className: "mt-5" })}
          href="/dashboard"
          target="_blank"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* proposition section */}
    </>
  )
}
