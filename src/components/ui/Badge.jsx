import './ui.css'

export function Badge({
  children,
  variant = 'neutral', // 'neutral' | 'accent' | 'success'
  className = '',
  size = 'md', // 'sm' | 'md'
  icon = null,
  ...props
}) {
  const classes = [
    'ui-badge',
    `ui-badge--${variant}`,
    `ui-badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {icon && <span className="ui-badge__icon" aria-hidden="true">{icon}</span>}
      <span className="ui-badge__label">{children}</span>
    </span>
  )
}

