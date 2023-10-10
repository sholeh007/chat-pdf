import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const baseClass = "mx-auto w-full max-w-screen-xl px-2.5 md:px-20"

  return <div className={cn(baseClass, className)}>{children}</div>
}
