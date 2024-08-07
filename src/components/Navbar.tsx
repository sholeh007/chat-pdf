import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"

export default function Navbar() {
  return (
    <nav className='sticky h-14 z-10 top-0 w-full border-b border-gray-200 bg-white/75 transition-all backdrop-blur-lg'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between h-14 border-b border-zinc-200'>
          <Link href='/' className='flex font-semibold'>
            <span>CPdf</span>
          </Link>
          <Link href='/dashboard' className={buttonVariants({ size: "sm" })}>
            Get Started
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
