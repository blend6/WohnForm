/**
 * Scroll-Choreografie 1:1 aus dem Original:
 * Reveal-Sweep, Zähler, Parallax/Zoom, Fenster-Explosion und 3D-Tür.
 * Ein rAF-Loop mit Lerp treibt alle Szenen.
 */
import { onMounted, onBeforeUnmount } from 'vue'

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const $$ = (s: string) => [...document.querySelectorAll<HTMLElement>(s)]

interface Scene { read(): number; write(p: number): void }

export function useScrollMotion() {
  let cleanup = () => {}

  onMounted(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

    /* Reveal & Zähler: Sweep statt IntersectionObserver, damit auch Ankersprünge korrekt aufdecken */
    let pendingReveal = $$('.reveal, .timeline li')
    pendingReveal.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 90}ms` })
    let pendingCount = $$('[data-count]')

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      if (reduced) { el.textContent = target + suffix; return }
      const dur = 1400
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = clamp((now - t0) / dur)
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const sweep = () => {
      const vh = innerHeight
      if (pendingReveal.length) {
        pendingReveal = pendingReveal.filter((el) => {
          if (el.getBoundingClientRect().top >= vh * 0.88) return true
          el.classList.add('in')
          return false
        })
      }
      if (pendingCount.length) {
        pendingCount = pendingCount.filter((el) => {
          if (el.getBoundingClientRect().top >= vh * 0.82) return true
          countUp(el)
          return false
        })
      }
    }

    const scenes: Scene[] = []

    /* 1) Parallax & Zoom */
    const media = $$('[data-parallax]').map((el) => ({
      el,
      box: (el.closest('.hero-media, .band-media, .ref-vis, .ph') || el.parentElement) as HTMLElement,
      amt: parseFloat(el.dataset.parallax || '') || 0.2,
      zoom: parseFloat(el.dataset.zoom || '') || 0,
    }))
    if (media.length) scenes.push({
      read: () => 0,
      write() {
        const vh = innerHeight
        for (const m of media) {
          const r = m.box.getBoundingClientRect()
          if (r.bottom < -200 || r.top > vh + 200) continue
          const t = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)
          const shift = -t * m.amt * r.height * 0.5
          const scale = 1 + m.zoom * (1 - Math.abs(clamp(t, -1, 1)))
          m.el.style.transform = `translate3d(0,${shift.toFixed(1)}px,0) scale(${(1.02 + scale - 1).toFixed(4)})`
        }
      },
    })

    /* 2) Explosionsansicht des Fensteraufbaus */
    const explode = document.getElementById('aufbau')
    const ex3d = document.getElementById('ex3d')
    const exBar = document.getElementById('exBar')
    const exLayers = $$('.ex-layer')
    const listItems = $$('#layerList li')
    const OFFSETS = [-260, -130, -10, 120, 215, 310]
    if (explode && ex3d && exBar) scenes.push({
      read() {
        const r = explode.getBoundingClientRect()
        const total = r.height - innerHeight
        return total > 0 ? clamp(-r.top / total) : 0
      },
      write(p) {
        const s = clamp((p - 0.12) / 0.68)
        ex3d.style.setProperty('--p', s.toFixed(4))
        exLayers.forEach((l, i) => { l.style.transform = `translateZ(${(OFFSETS[i] * s).toFixed(1)}px)` })
        ex3d.classList.toggle('spread', s > 0.3)
        exBar.style.width = (s * 100).toFixed(1) + '%'
        const active = clamp(Math.floor(s * 4.2), 0, listItems.length - 1)
        listItems.forEach((li, i) => li.classList.toggle('on', i === active))
      },
    })

    /* 3) Haustür schwingt auf */
    const why = document.getElementById('ueber-uns')
    const door3d = document.getElementById('door3d')
    if (why && door3d) scenes.push({
      read() {
        const r = why.getBoundingClientRect()
        return clamp((innerHeight * 0.85 - r.top) / (r.height * 0.55))
      },
      write(p) { door3d.style.setProperty('--p', p.toFixed(4)) },
    })

    /* rAF-Loop mit Lerp */
    const state = scenes.map(() => 0)
    let ticking = false
    let lastY = -1
    let raf = 0

    const frame = () => {
      let moving = false
      if (scrollY !== lastY) { lastY = scrollY; moving = true }
      scenes.forEach((sc, i) => {
        const target = sc.read()
        const cur = state[i]
        const next = reduced ? target : cur + (target - cur) * 0.12
        if (Math.abs(target - cur) > 0.0004) moving = true
        state[i] = next
        sc.write(next)
      })
      ticking = moving
      if (moving) raf = requestAnimationFrame(frame)
    }
    const kick = () => { if (!ticking) { ticking = true; raf = requestAnimationFrame(frame) } }
    const onScroll = () => { sweep(); kick() }

    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    addEventListener('load', onScroll)
    onScroll()

    cleanup = () => {
      cancelAnimationFrame(raf)
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      removeEventListener('load', onScroll)
    }
  })

  onBeforeUnmount(() => cleanup())
}
