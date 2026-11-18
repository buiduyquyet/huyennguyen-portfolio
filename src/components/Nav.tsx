'use client'

import React, { useEffect, useState } from 'react'

type Link = { label: string; href: string; id?: string | null }

export function Nav({
  logoLeft,
  logoRight,
  links,
  cta,
}: {
  logoLeft: string
  logoRight: string
  links: Link[]
  cta?: { label?: string | null; href?: string | null } | null
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : undefined}>
      <div className="container nav-in">
        <a href="#top" className="logo">
          {logoLeft}
          <span>.</span>
          {logoRight}
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {links.map((l, i) => (
            <li key={l.id ?? i}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          {cta?.label && (
            <li>
              <a href={cta.href || '#contact'} className="nav-cta" onClick={close}>
                {cta.label}
              </a>
            </li>
          )}
        </ul>
        <button
          className={`burger${open ? ' open' : ''}`}
          id="burger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
