import { forwardRef } from 'react'
import './ui.css'

export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'icon'
    size = 'md',        // 'sm' | 'md' | 'lg'
    isLoading = false,
    disabled = false,
    as = 'button',
    href,
    className = '',
    onClick,
    type = 'button',
    ...props
  },
  ref
) {
  const Component = as === 'a' && href ? 'a' : 'button'
  const isButton = Component === 'button'

  const classNames = [
    'ui-btn',
    `ui-btn--${variant}`,
    `ui-btn--${size}`,
    isLoading ? 'ui-btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const commonProps = {
    ref,
    className: classNames,
    onClick: disabled || isLoading ? (e) => e.preventDefault() : onClick,
    'aria-disabled': disabled || isLoading ? true : undefined,
    ...props,
  }

  if (isButton) {
    return (
      <button
        type={type}
        disabled={disabled || isLoading}
        {...commonProps}
      >
        {isLoading && (
          <span className="ui-btn__spinner" aria-hidden="true" />
        )}
        <span className={isLoading ? 'ui-btn__content--loading' : 'ui-btn__content'}>
          {children}
        </span>
      </button>
    )
  }

  return (
    <a
      href={disabled || isLoading ? undefined : href}
      tabIndex={disabled || isLoading ? -1 : undefined}
      {...commonProps}
    >
      {isLoading && (
        <span className="ui-btn__spinner" aria-hidden="true" />
      )}
      <span className={isLoading ? 'ui-btn__content--loading' : 'ui-btn__content'}>
        {children}
      </span>
    </a>
  )
})

