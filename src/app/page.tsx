import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='flex mx-auto mb-4 max-w-fit items-center justify-center gap-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm text-gray-700'>
            CPdf is now <span className='font-bold'>live!</span>
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Chat with your <span className='text-violet-600'>document</span> in seconds.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          CPdf allows you to have a conversation with any PDF document you want. Simply
          upload your file and start asking questions right away.
        </p>
        <Link
          className={buttonVariants({ size: "lg", className: "mt-5" })}
          href='/dashboard'
          target='_blank'
        >
          Get Started <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>

      {/* proposition section */}
      <div className='mb-16'>
        <div className='relative isolate'>
          {/* blur effect */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div className='relative top-36 left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1875rem]' />
          </div>
          {/* image section */}
          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image
                  src='/dashboard-preview.jpg'
                  width={1364}
                  height={866}
                  alt='img'
                  quality={90}
                  priority={true}
                  className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className='mx-auto my-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Start chatting in minutes.
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Chatting to your PDF files has never been easier than CPdf.
            </p>
          </div>
        </div>
        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col gap-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-violet-600'>Step 1</span>
              <span className='text-xl font-semibold'>No need to sign up</span>
              <span className='mt-2 text-zinc-700'>
                Just click the button get started.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col gap-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-violet-600'>Step 2</span>
              <span className='text-xl font-semibold'>Upload your PDF file</span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll process your file and make it ready for you to chat with.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col gap-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-violet-600'>Step 3</span>
              <span className='text-xl font-semibold'>Start asking questions.</span>
              <span className='mt-2 text-zinc-700'>
                That&apos;s it. Try out CPdf now.
              </span>
            </div>
          </li>
        </ol>
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                width={1419}
                height={732}
                quality={85}
                alt='img'
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
