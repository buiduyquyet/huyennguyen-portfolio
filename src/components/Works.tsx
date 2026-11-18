'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Markup } from '@/lib/markup'
import type { Project } from '@/payload-types'

type Tag = { label: string; id?: string | null }

const Tags = ({ tags, style }: { tags?: Tag[] | null; style?: React.CSSProperties }) => (
  <div className="tags" style={style}>
    {(tags ?? []).map((t, i) => (
      <span key={t.id ?? i}>{t.label}</span>
    ))}
  </div>
)

export function Works({
  projects,
  ctaLabel,
}: {
  projects: Project[]
  ctaLabel?: string | null
}) {
  const [active, setActive] = useState<Project | null>(null)

  const close = useCallback(() => {
    setActive(null)
    document.body.style.overflow = ''
  }, [])

  const openProject = (p: Project) => {
    setActive(p)
    document.body.style.overflow = 'hidden'
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  const rows: [string, string | null | undefined][] = active
    ? [
        ['Challenge', active.challenge],
        ['Objectives', active.objectives],
        ['My Role', active.role],
        ['Strategy', active.strategy],
        ['Execution', active.execution],
        ['Results', active.results],
      ]
    : []

  return (
    <>
      <div className="works-grid">
        {projects.map((p) => (
          <div className="work reveal" key={p.id} onClick={() => openProject(p)}>
            <div className="work-top">
              <span className="work-cat">{p.category}</span>
              <span className="work-arrow">↗</span>
            </div>
            <div>
              <h4>{p.title}</h4>
              <Tags tags={p.cardTags} />
            </div>
          </div>
        ))}
      </div>

      <div
        className={`modal${active ? ' open' : ''}`}
        id="modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        {active && (
          <div className="modal-box">
            <button className="modal-close" aria-label="Đóng" onClick={close}>
              ×
            </button>
            <div className="eyebrow">{active.category || 'Case Study'}</div>
            <h3>{active.title}</h3>
            <Tags tags={active.caseTags} style={{ marginBottom: 24 }} />
            <div>
              {rows
                .filter(([, v]) => v)
                .map(([label, v]) => (
                  <div className="cs-step" key={label}>
                    <b>{label}</b>
                    <p>
                      <Markup text={v} />
                    </p>
                  </div>
                ))}
            </div>
            {ctaLabel && (
              <a href="#contact" className="btn btn-primary" style={{ marginTop: 30 }} onClick={close}>
                {ctaLabel} <span className="arr">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </>
  )
}
