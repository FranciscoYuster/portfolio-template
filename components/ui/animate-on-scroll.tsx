"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"
  delay?: number
  once?: boolean
}

export function AnimateOnScroll({
  children,
  className,
  threshold = 0.1,
  animation = "fade-up",
  delay = 0,
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "translate-y-[-10px] opacity-0",
    "fade-left": "translate-x-[-10px] opacity-0",
    "fade-right": "translate-x-10 opacity-0",
    "zoom-in": "scale-95 opacity-0",
    "zoom-out": "scale-105 opacity-0",
  }

  const visibleClass = "translate-y-0 translate-x-0 scale-100 opacity-100"

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700", animationClasses[animation], isVisible && visibleClass, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
