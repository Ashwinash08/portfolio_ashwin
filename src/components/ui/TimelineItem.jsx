import { Card } from './Card'
import { Badge } from './Badge'
import './ui.css'

export function TimelineItem({
  role,
  company,
  period,
  description,
  bullets = [],
  tags = [],
  certificate = null,
  isLast = false,
}) {
  return (
    <div className={`ui-timeline-item ${isLast ? 'ui-timeline-item--last' : ''}`}>
      <div className="ui-timeline-item__axis">
        <div className="ui-timeline-item__dot" aria-hidden="true" />
        {!isLast && <div className="ui-timeline-item__line" aria-hidden="true" />}
      </div>

      <div className="ui-timeline-item__content">
        <Card variant="interactive" className="ui-timeline-card">
          <div className="ui-timeline-card__header">
            <div>
              <h3 className="ui-timeline-card__role">{role}</h3>
              <p className="ui-timeline-card__company">{company}</p>
            </div>
            <span className="ui-timeline-card__period">{period}</span>
          </div>

          {description && (
            <p className="ui-timeline-card__description">{description}</p>
          )}

          {bullets.length > 0 && (
            <ul className="ui-timeline-card__bullets">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}

          {tags.length > 0 && (
            <div className="ui-timeline-card__tags">
              {tags.map((tag) => (
                <Badge key={tag} variant="neutral" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {certificate && (
            <div className="ui-timeline-card__actions">
              <a
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-timeline-card__cert-link"
              >
                <span>View Certificate</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

