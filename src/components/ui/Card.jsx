import { forwardRef } from 'react'
import './ui.css'

export const Card = forwardRef(function Card(
  {
    children,
    variant = 'default', // 'default' | 'interactive' | 'featured'
    className = '',
    as: Component = 'div',
    ...props
  },
  ref
) {
  const classes = [
    'ui-card',
    `ui-card--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

