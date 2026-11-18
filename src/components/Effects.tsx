'use client'

import { useEffect } from 'react'

/** Hiệu ứng reveal khi cuộn, bộ đếm số liệu, nút "lên đầu trang" và chọn sẵn dịch vụ. */
export function Effects() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    /* REVEAL + COUNTER */
    const timers: ReturnType<typeof setInterval>[] = []
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          en.target.classList.add('in')
          const num = en.target.querySelector<HTMLElement>('[data-count]')
          if (num && !num.dataset.done) {
            num.dataset.done = '1'
            const end = Number(num.dataset.count) || 0
            if (end > 0) {
              let cur = 0
              const t = setInterval(() => {
                cur++
                num.textContent = cur + '+'
                if (cur >= end) clearInterval(t)
              }, 1200 / end)
              timers.push(t)
            }
          }
          io.unobserve(en.target)
        })
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    /* TO TOP */
    const toTop = document.getElementById('toTop')
    const onScroll = () => toTop?.classList.toggle('show', window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    /* Chọn sẵn dịch vụ khi bấm CTA ở "Ways to Work" */
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLElement>('[data-service]')
      if (!a) return
      const select = document.getElementById('serviceSelect') as HTMLSelectElement | null
      const value = a.dataset.service
      if (select && value && Array.from(select.options).some((o) => o.value === value)) {
        select.value = value
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      io.disconnect()
      timers.forEach(clearInterval)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return null
}
