import { useRef, useEffect } from 'react'
import './ui.css'

export function Tabs({
  tabs = [], // [{ id: string, label: string, count?: number }]
  activeTab,
  onChange,
  className = '',
  ariaLabel = 'Filter categories',
}) {
  const tabListRef = useRef(null)

  const handleKeyDown = (e, index) => {
    let nextIndex = null
    const count = tabs.length

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      nextIndex = (index + 1) % count
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      nextIndex = (index - 1 + count) % count
    } else if (e.key === 'Home') {
      e.preventDefault()
      nextIndex = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      nextIndex = count - 1
    }

    if (nextIndex !== null) {
      const nextTab = tabs[nextIndex]
      onChange(nextTab.id)
      const buttons = tabListRef.current?.querySelectorAll('[role="tab"]')
      buttons?.[nextIndex]?.focus()
    }
  }

  // Ensure active tab is scrolled into view in horizontal scrolling container
  useEffect(() => {
    const activeBtn = tabListRef.current?.querySelector('[aria-selected="true"]')
    if (activeBtn && tabListRef.current) {
      const container = tabListRef.current
      const btnLeft = activeBtn.offsetLeft
      const btnWidth = activeBtn.offsetWidth
      const containerWidth = container.offsetWidth
      const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2
      container.scrollTo({ left: targetScroll, behavior: 'smooth' })
    }
  }, [activeTab])

  return (
    <div className={`ui-tabs-container ${className}`}>
      <div
        ref={tabListRef}
        role="tablist"
        aria-label={ariaLabel}
        className="ui-tabs"
      >
        {tabs.map((tab, idx) => {
          const isSelected = activeTab === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              id={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`ui-tab ${isSelected ? 'ui-tab--active' : ''}`}
            >
              <span className="ui-tab__label">{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span className="ui-tab__count">{tab.count}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

