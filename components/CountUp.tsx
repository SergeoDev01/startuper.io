import { useMotionValue, useSpring, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

interface CountUpProps {
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
  stiffness?: number
  damping?: number
  className?: string
  once?: boolean
}

export function CountUp({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  stiffness = 60,
  damping = 15,
  className,
  once = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once })
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness, damping })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true
      motionValue.set(to)
    }
  }, [isInView, to, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [springValue])

  const formatted = displayValue.toFixed(decimals)

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
