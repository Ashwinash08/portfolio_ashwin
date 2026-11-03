import { useReducedMotion } from 'framer-motion'

/**
 * Shared Motion Tokens
 * Maps directly to CSS variables defined in src/styles/tokens.css:
 * --dur-fast: 150ms | --dur-base: 250ms | --dur-slow: 450ms
 * --ease-out: cubic-bezier(0.22, 1, 0.36, 1)
 * --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
 */
export const MOTION_DURATIONS = {
  fast: 0.15,
  base: 0.25,
  slow: 0.45,
}

export const MOTION_EASINGS = {
  easeOut: [0.22, 1, 0.36, 1],
  easeInOut: [0.65, 0, 0.35, 1],
}

export const defaultTransition = {
  duration: MOTION_DURATIONS.base,
  ease: MOTION_EASINGS.easeOut,
}

/**
 * Shared Framer Motion Variants
 * Built for calm, intentional, high-performance transitions.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
}

export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

/**
 * Hook to check reduced motion preference with fallback safety
 */
export function useMotionSafe() {
  const shouldReduceMotion = useReducedMotion()
  return {
    shouldReduceMotion: Boolean(shouldReduceMotion),
    transition: shouldReduceMotion ? { duration: 0.01 } : defaultTransition,
  }
}

/**
 * Returns a reduced-motion safe variant (stripping translations and scales)
 */
export function getAccessibleVariant(variant, shouldReduceMotion) {
  if (!shouldReduceMotion || !variant) return variant

  const sanitizeState = (state) => {
    if (!state) return state
    const { y: _y, x: _x, scale: _scale, ...rest } = state
    return {
      ...rest,
      transition: { duration: MOTION_DURATIONS.fast },
    }
  }

  return {
    ...variant,
    hidden: sanitizeState(variant.hidden),
    visible: sanitizeState(variant.visible),
  }
}

