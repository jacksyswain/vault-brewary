import React from "react"
import { cn } from "../../lib/utils"

export function Card({ className, ...props }) {
  return <div className={cn("rounded-xl border border-gold/30 bg-[#0f0f0f]", className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-4", className)} {...props} />
}
