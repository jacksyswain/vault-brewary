import React from "react"
import * as React from "react"
import { cn } from "../../lib/utils"

export const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-gold text-black px-6 py-3 text-sm font-medium transition hover:bg-gold/90",
      className
    )}
    {...props}
  />
))
