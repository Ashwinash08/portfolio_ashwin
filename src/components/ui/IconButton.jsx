import { forwardRef } from 'react'
import './ui.css'

export const IconButton = forwardRef(function IconButton(
  {
    children,
    'aria-label': ariaLabel,
    title,
    onClick,
    variant = 'ghost', // 'ghost' | 'default' | 'primary'
    size = 'md',        // 'sm' | 'md' | 'lg'
    className = '',
    as = 'button',
    href,
    type = 'button',
    ...props
  },
  ref
) {
  const Component = as === 'a' && href ? 'a' : 'button'
  const classes = [
    'ui-icon-btn',
    `ui-icon-btn--${variant}`,
    `ui-icon-btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const resolvedTitle = title || ariaLabel

  if (Component === 'a') {
    return (
      <a
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        title={resolvedTitle}
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      title={resolvedTitle}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
})

