import{j as e}from"./index-CkxuFrrT.js";function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-black font-bold text-2xl !mb-2",children:e.jsx(n.p,{children:"Building Interactive Portfolio Features with React"})}),e.jsx("span",{className:"font-mono text-xs text-zinc-400",children:e.jsx(n.p,{children:"September 8, 2026 · 8 min read"})}),e.jsx(n.hr,{}),e.jsx(n.p,{children:"Adding interactive features to a portfolio website can make it more engaging and memorable. Here's how I built custom cursor effects, scroll animations, dark mode, and more using React."}),e.jsx(n.h2,{children:"Why Interactive Features?"}),e.jsxs(n.p,{children:["A static portfolio shows what you've built. An interactive portfolio shows ",e.jsx(n.strong,{children:"how you think"}),". Small details like smooth animations and thoughtful hover effects demonstrate attention to detail — a quality every developer should have."]}),e.jsx(n.h2,{children:"1. Custom Cursor Effect"}),e.jsx(n.p,{children:"The custom cursor creates a unique visual identity. Instead of the default system cursor, users see a dot with a trailing ring that follows with a slight delay."}),e.jsx(n.h3,{children:"The Hook: useMousePosition"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}
`})}),e.jsx(n.h3,{children:"Desktop Only Detection"}),e.jsx(n.p,{children:"Custom cursors are useless on touch devices. I detect mobile using:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  return () => window.removeEventListener('resize', checkMobile)
}, [])
`})}),e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"isMobile"})," is true, the component returns ",e.jsx(n.code,{children:"null"})," — no cursor rendered, no event listeners attached."]}),e.jsx(n.h2,{children:"2. Scroll Animations with Intersection Observer"}),e.jsx(n.p,{children:"Scroll animations reveal content as users scroll down the page, creating a sense of progression."}),e.jsx(n.h3,{children:"The Hook: useInView"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export function useInView({ threshold = 0.1, triggerOnce = true }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (triggerOnce && entry.isIntersecting) {
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [threshold, triggerOnce])

  return { ref, inView }
}
`})}),e.jsx(n.h3,{children:"ScrollReveal Component"}),e.jsx(n.p,{children:"This component wraps content and animates it when it enters the viewport:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function ScrollReveal({ children, direction = 'up', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1 })

  const getTransform = () => {
    if (!inView) {
      switch (direction) {
        case 'up': return 'translateY(40px)'
        case 'left': return 'translateX(40px)'
        case 'scale': return 'scale(0.95)'
        default: return 'translateY(40px)'
      }
    }
    return 'translate(0) scale(1)'
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: \`opacity 600ms ease \${delay}ms, transform 600ms ease \${delay}ms\`,
      }}
    >
      {children}
    </div>
  )
}
`})}),e.jsx(n.h3,{children:"Staggered Animations"}),e.jsxs(n.p,{children:["By passing different ",e.jsx(n.code,{children:"delay"})," values to child elements, items animate in sequence:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{items.map((item, index) => (
  <ScrollReveal key={item.id} delay={index * 100}>
    <Card {...item} />
  </ScrollReveal>
))}
`})}),e.jsx(n.h2,{children:"3. Dark Mode Toggle"}),e.jsx(n.p,{children:"Dark mode is now expected by users. I implemented it with three requirements:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistence"})," — Save preference to localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"System Detection"})," — Default to ",e.jsx(n.code,{children:"prefers-color-scheme"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smooth Transition"})," — No flash of wrong theme"]}),`
`]}),e.jsx(n.h3,{children:"The Hook: useTheme"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved as Theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return { theme, toggleTheme }
}
`})}),e.jsx(n.h3,{children:"CSS Variables Approach"}),e.jsxs(n.p,{children:["Instead of Tailwind's ",e.jsx(n.code,{children:"dark:"})," prefix everywhere, I use CSS variables:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --background-color: #fafafa;
  --text-color: #52525b;
  --card-bg: rgba(255, 255, 255, 0.6);
}

.dark {
  --background-color: #0a0a0b;
  --text-color: #a1a1aa;
  --card-bg: rgba(24, 24, 27, 0.6);
}
`})}),e.jsx(n.p,{children:"This approach:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reduces class duplication"}),`
`,e.jsx(n.li,{children:"Makes theme switching instant"}),`
`,e.jsx(n.li,{children:"Works with any CSS framework"}),`
`]}),e.jsx(n.h2,{children:"4. Magnetic Button Effect"}),e.jsx(n.p,{children:"Magnetic buttons follow the cursor when hovered, creating a playful interaction."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function MagneticButton({ children, strength = 0.3 }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    ref.current.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  )
}
`})}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"strength"})," prop controls how much the button follows the cursor."]}),e.jsx(n.h2,{children:"5. Scroll Progress Bar"}),e.jsx(n.p,{children:"A thin progress bar at the top shows how far the user has scrolled."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return progress
}
`})}),e.jsx(n.p,{children:"Used in the header:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<div
  className="h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600"
  style={{ width: \`\${scrollProgress}%\` }}
/>
`})}),e.jsx(n.h2,{children:"6. Back to Top Button"}),e.jsx(n.p,{children:"Simple but effective UX improvement:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 p-3 bg-emerald-500 text-white rounded-full"
    >
      ↑
    </button>
  )
}
`})}),e.jsx(n.h2,{children:"7. Mobile Menu Animation"}),e.jsx(n.p,{children:"CSS transitions make the mobile menu feel polished:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.mobile-menu {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 300ms ease, opacity 300ms ease;
}

.mobile-menu.open {
  max-height: 256px;
  opacity: 1;
}
`})}),e.jsx(n.p,{children:"Each link gets a staggered delay:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:"style={{\n  transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms',\n}}\n"})}),e.jsx(n.h2,{children:"Performance Considerations"}),e.jsx(n.p,{children:"Interactive features can hurt performance if not careful:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disable cursor on mobile"})," — No point rendering hidden elements"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:"will-change"})," sparingly"]})," — Only on animated elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Debounce scroll handlers"})," — Or use ",e.jsx(n.code,{children:"requestAnimationFrame"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clean up event listeners"})," — Always return cleanup functions"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.code,{children:"triggerOnce"})," for scroll animations"]})," — Don't re-observe elements"]}),`
`]}),e.jsx(n.h2,{children:"Conclusion"}),e.jsx(n.p,{children:"Interactive features don't need to be complex. Most of these implementations are under 50 lines of code each. The key is:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose"})," — Each feature should enhance UX, not distract"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance"})," — Always consider the cost"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"})," — Respect ",e.jsx(n.code,{children:"prefers-reduced-motion"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progressive enhancement"})," — Works without JS, better with it"]}),`
`]}),e.jsx(n.p,{children:"The result? A portfolio that stands out and shows you care about craft."}),e.jsx(n.hr,{}),e.jsxs(n.p,{children:["Built with React, TypeScript, and Tailwind CSS. Source code on ",e.jsx(n.a,{href:"https://github.com/albae69",children:"GitHub"}),"."]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default};
