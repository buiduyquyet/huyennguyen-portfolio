import React from 'react'
import { getSiteData } from '@/lib/data'
import { Markup } from '@/lib/markup'
import { Nav } from '@/components/Nav'
import { Effects } from '@/components/Effects'
import { Works } from '@/components/Works'
import { ContactForm } from '@/components/ContactForm'
import type { Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

const pad = (n: number) => String(n).padStart(2, '0')

function SecHead({
  eyebrow,
  title,
  subtitle,
  style,
  titleStyle,
}: {
  eyebrow?: string | null
  title?: string | null
  subtitle?: string | null
  style?: React.CSSProperties
  titleStyle?: React.CSSProperties
}) {
  return (
    <div className="sec-head reveal" style={style}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && (
        <h2 className="sec-title" style={titleStyle}>
          <Markup text={title} />
        </h2>
      )}
      {subtitle && (
        <p className="sec-sub">
          <Markup text={subtitle} />
        </p>
      )}
    </div>
  )
}

export default async function HomePage() {
  const { home, settings, projects } = await getSiteData()
  const { hero, stats, about, why, services, ways, works, brands, process, insights, contact } =
    home

  const photo = about?.photo as Media | null | undefined
  const photoSrc = (photo && typeof photo === 'object' && photo.url) || about?.photoUrl || ''
  const marquee = hero?.marquee ?? []
  const year = new Date().getFullYear()

  return (
    <>
      <Effects />

      {/* ================= NAV ================= */}
      <Nav
        logoLeft={settings.logoLeft ?? ''}
        logoRight={settings.logoRight ?? ''}
        links={settings.navLinks ?? []}
        cta={settings.navCta}
      />

      {/* ================= 01. HERO ================= */}
      <header className="hero" id="top">
        <div className="hero-blob"></div>
        <div className="container">
          {hero?.eyebrow && <div className="eyebrow">{hero.eyebrow}</div>}
          <h1>
            {hero?.line1}
            {hero?.line2 && <span className="l2">{hero.line2}</span>}
            {hero?.line3 && <span className="l3">{hero.line3}</span>}
          </h1>
          {hero?.subtitle && (
            <p className="hero-sub">
              <Markup text={hero.subtitle} />
            </p>
          )}
          <div className="hero-ctas">
            {hero?.primaryCtaLabel && (
              <a href={hero.primaryCtaHref || '#contact'} className="btn btn-primary">
                {hero.primaryCtaLabel} <span className="arr">→</span>
              </a>
            )}
            {hero?.secondaryCtaLabel && (
              <a href={hero.secondaryCtaHref || '#work'} className="btn btn-outline">
                {hero.secondaryCtaLabel} <span className="arr">→</span>
              </a>
            )}
          </div>
          {!!hero?.meta?.length && (
            <div className="hero-meta">
              {hero.meta.map((m, i) => (
                <div key={m.id ?? i}>
                  {m.pulseDot && <span className="dot"></span>}
                  <Markup text={m.text} />
                </div>
              ))}
            </div>
          )}
        </div>
        {marquee.length > 0 && (
          <div className="marquee">
            <div className="marquee-track">
              {[...marquee, ...marquee].map((m, i) => (
                <span key={i}>{m.label}</span>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ================= STATS ================= */}
      {!!stats?.items?.length && (
        <div className="stats">
          <div className="container stats-grid">
            {stats.items.map((s, i) => (
              <div className="stat reveal" key={s.id ?? i}>
                <div className="stat-num" data-count={s.value}>
                  0
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= 02. ABOUT ================= */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="reveal" style={{ position: 'relative' }}>
            <div className="about-photo">
              {photoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photoSrc} alt={about?.photoAlt || photo?.alt || ''} />
              ) : (
                <div>
                  📷
                  <br />
                  Ảnh chân dung của bạn
                  <br />
                  <small>(tỉ lệ 4:5)</small>
                </div>
              )}
            </div>
            {about?.tag && <div className="about-tag">{about.tag}</div>}
          </div>
          <div className="reveal">
            {about?.eyebrow && <div className="eyebrow">{about.eyebrow}</div>}
            {about?.heading && <h3>{about.heading}</h3>}
            {about?.role && <div className="role">{about.role}</div>}
            {about?.paragraphs?.map((p, i) => (
              <p key={p.id ?? i}>
                <Markup text={p.text} />
              </p>
            ))}
            {about?.quote && (
              <blockquote>
                <Markup text={about.quote} />
              </blockquote>
            )}
            {!!about?.motto?.length && (
              <div className="motto">
                {about.motto.map((m, i) => (
                  <span key={m.id ?? i}>
                    <Markup text={m.text} />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="why" id="why">
        <div className="container">
          <SecHead eyebrow={why?.eyebrow} title={why?.title} subtitle={why?.subtitle} />
          <div className="why-grid">
            {why?.items?.map((w, i) => (
              <div className="why-card reveal" key={w.id ?? i}>
                <span className="n">/{pad(i + 1)}</span>
                <h4>{w.title}</h4>
                {w.subtitle && <span className="vi">{w.subtitle}</span>}
                <p>
                  <Markup text={w.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 03. SERVICES ================= */}
      <section id="services">
        <div className="container">
          <SecHead
            eyebrow={services?.eyebrow}
            title={services?.title}
            subtitle={services?.subtitle}
          />
          <div className="svc-grid">
            {services?.items?.map((s, i) => (
              <div className="svc reveal" key={s.id ?? i}>
                <div className="svc-num">{pad(i + 1)}</div>
                <h4>{s.title}</h4>
                <p>
                  <Markup text={s.description} />
                </p>
                {s.deliverablesLabel && <div className="out">{s.deliverablesLabel}</div>}
                <div className="tags">
                  {s.tags?.map((t, j) => (
                    <span key={t.id ?? j}>{t.label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {services?.note && (
            <p className="svc-note reveal">
              <Markup text={services.note} />
            </p>
          )}
        </div>
      </section>

      {/* ================= 04. WAYS TO WORK ================= */}
      <section className="ways" id="ways">
        <div className="container">
          <SecHead eyebrow={ways?.eyebrow} title={ways?.title} />
          <div className="ways-grid">
            {ways?.items?.map((w, i) => (
              <div className={`way${w.featured ? ' featured' : ''} reveal`} key={w.id ?? i}>
                {w.badge && <div className="badge">{w.badge}</div>}
                <h4>{w.title}</h4>
                <p>
                  <Markup text={w.description} />
                </p>
                {w.ctaLabel && (
                  <a href="#contact" data-service={w.title}>
                    {w.ctaLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 05. SELECTED WORKS ================= */}
      <section id="work">
        <div className="container">
          <SecHead eyebrow={works?.eyebrow} title={works?.title} subtitle={works?.subtitle} />
          <Works projects={projects} ctaLabel={works?.modalCtaLabel} />
          {works?.footnote && <p className="works-foot reveal">{works.footnote}</p>}
        </div>
      </section>

      {/* ================= 06. BRANDS & INDUSTRIES ================= */}
      <section className="brands" id="brands">
        <div className="container">
          <SecHead
            eyebrow={brands?.eyebrow}
            title={brands?.title}
            style={{ marginBottom: 40 }}
            titleStyle={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}
          />
          <div className="brand-grid reveal">
            {brands?.items?.map((b, i) => (
              <div className="brand" key={b.id ?? i}>
                {b.name}
              </div>
            ))}
          </div>

          {!!brands?.industries?.length && (
            <div className="ind-wrap reveal">
              {brands.industriesEyebrow && <div className="eyebrow">{brands.industriesEyebrow}</div>}
              <div className="ind-grid">
                {brands.industries.map((ind, i) => (
                  <div className="ind" key={ind.id ?? i}>
                    <h5>{ind.title}</h5>
                    <p>
                      <Markup text={ind.description} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= 07. PROCESS ================= */}
      <section id="process">
        <div className="container">
          <SecHead
            eyebrow={process?.eyebrow}
            title={process?.title}
            subtitle={process?.subtitle}
          />
          <div className="process-list">
            {process?.steps?.map((s, i) => (
              <div className="step reveal" key={s.id ?? i}>
                <div className="step-n">{pad(i + 1)}</div>
                <h4>{s.title}</h4>
                <p>
                  <Markup text={s.description} />
                </p>
              </div>
            ))}
          </div>
          {process?.ctaLabel && (
            <div className="reveal" style={{ marginTop: 50 }}>
              <a href={process.ctaHref || '#contact'} className="btn btn-primary">
                {process.ctaLabel} <span className="arr">→</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ================= 08. INSIGHTS ================= */}
      <section id="insights" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecHead eyebrow={insights?.eyebrow} title={insights?.title} />
          <div className="ins-grid">
            {insights?.items?.map((it, i) => {
              const inner = (
                <>
                  {it.category && <div className="cat">{it.category}</div>}
                  <h4>{it.title}</h4>
                  {it.linkLabel && <span className="soon">{it.linkLabel}</span>}
                </>
              )
              return it.url ? (
                <a className="ins reveal" key={it.id ?? i} href={it.url}>
                  {inner}
                </a>
              ) : (
                <div className="ins reveal" key={it.id ?? i}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= 09. CONTACT ================= */}
      <section className="contact" id="contact">
        <div className="container">
          {contact?.eyebrow && <div className="eyebrow">{contact.eyebrow}</div>}
          {contact?.title && (
            <h2 className="contact-title">
              <Markup text={contact.title} />
            </h2>
          )}
          <div className="contact-grid">
            <div className="c-info">
              {contact?.intro && (
                <p>
                  <Markup text={contact.intro} />
                </p>
              )}
              {contact?.items?.map((c, i) => (
                <div className="c-item" key={c.id ?? i}>
                  <small>{c.label}</small>
                  {c.url ? (
                    <a
                      href={c.url}
                      {...(c.newTab ? { target: '_blank', rel: 'noopener' } : {})}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            <ContactForm
              serviceOptions={contact?.serviceOptions ?? []}
              budgetOptions={contact?.budgetOptions ?? []}
              timelineOptions={contact?.timelineOptions ?? []}
              messagePlaceholder={contact?.messagePlaceholder}
              submitLabel={contact?.submitLabel}
              note={contact?.note}
              successMessage={contact?.successMessage}
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container foot">
          <a href="#top" className="logo">
            {settings.logoLeft}
            <span style={{ color: 'var(--lime)' }}>.</span>
            {settings.logoRight}
          </a>
          <div>
            © {year} {settings.footerText}
          </div>
          <div className="foot-links">
            {settings.footerLinks?.map((l, i) => (
              <a
                key={l.id ?? i}
                href={l.href}
                {...(/^https?:/.test(l.href) ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <a href="#top" className="to-top" id="toTop" aria-label="Lên đầu trang">
        ↑
      </a>
    </>
  )
}
