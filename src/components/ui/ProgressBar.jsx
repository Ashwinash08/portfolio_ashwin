import { motion } from 'framer-motion'
import { MOTION_DURATIONS, MOTION_EASINGS } from '../../motion'
import './ui.css'

export function ProgressBar({
  value = 0,
  max = 100,
  label = '',
  showLabel = false,
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={`ui-progress ${className}`}>
      {showLabel && (
        <div className="ui-progress__header">
          {label && <span className="ui-progress__label">{label}</span>}
          <span className="ui-progress__value">{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        className="ui-progress__track"
        role="progressbar"
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
      >
        <motion.div
          className="ui-progress__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: MOTION_DURATIONS.slow,
            ease: MOTION_EASINGS.easeOut,
          }}
        />
      </div>
    </div>
  )
}

