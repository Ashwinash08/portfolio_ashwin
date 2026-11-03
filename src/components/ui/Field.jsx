import { forwardRef } from 'react'
import './ui.css'

export const Field = forwardRef(function Field(
  {
    id,
    label,
    error,
    hint,
    type = 'text',
    as = 'input', // 'input' | 'textarea'
    required = false,
    className = '',
    rows = 4,
    ...props
  },
  ref
) {
  const isTextarea = as === 'textarea'
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="ui-field__label">
          {label}
          {required && <span className="ui-field__required" aria-hidden="true"> *</span>}
        </label>
      )}

      {isTextarea ? (
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="ui-field__input ui-field__textarea"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          id={id}
          type={type}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="ui-field__input"
          {...props}
        />
      )}

      {hint && !error && (
        <p id={hintId} className="ui-field__hint">
          {hint}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="ui-field__error">
          {error}
        </p>
      )}
    </div>
  )
})

