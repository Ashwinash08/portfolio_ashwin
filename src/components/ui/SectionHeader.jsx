import './ui.css'

export function SectionHeader({
  title,
  description = null,
  eyebrow = null,
  align = 'center', // 'center' | 'left'
  className = '',
  id,
}) {
  return (
    <div
      className={`ui-section-header ui-section-header--${align} ${className}`}
      id={id}
    >
      {eyebrow && (
        <span className="ui-section-header__eyebrow">{eyebrow}</span>
      )}
      <h2 className="ui-section-header__title">{title}</h2>
      {description && (
        <p className="ui-section-header__description">{description}</p>
      )}
    </div>
  )
}

