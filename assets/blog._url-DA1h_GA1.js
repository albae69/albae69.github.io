import{j as e,u as c,R as a,L as o}from"./index--S2t0dUw.js";import"https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";function i(s){const n={p:"p",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx("h1",{className:"text-black font-bold text-2xl",children:"Hello World!"}),`\r
12 June 2025`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"This is my first post build with mdx-js/react."})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}function t(s){const n={p:"p",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx("h1",{className:"text-black font-bold text-2xl",children:"Summary"}),`\r
15 Dec 2025`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"hmm... what i'm doing."}),`
`,e.jsx(n.p,{children:"wasted year += 1"})]})}function h(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}function l(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-black font-bold text-2xl !mb-2",children:e.jsx(n.p,{children:"Revamping My Personal Website"})}),e.jsx("span",{className:"font-mono text-xs text-zinc-400",children:e.jsx(n.p,{children:"29 July 2026 · 5 min read"})}),e.jsx(n.hr,{}),e.jsx(n.p,{children:"I recently gave my personal website a complete overhaul. Here's a breakdown of what changed, why, and what I learned along the way."}),e.jsx(n.h2,{children:"The Goal"}),e.jsxs(n.p,{children:["I wanted something ",e.jsx(n.strong,{children:"futuristic yet clean"}),' — a "White Matrix" aesthetic with subtle grid backgrounds, glassmorphism cards, and a cohesive color palette. Something that feels tech-forward but remains readable and professional.']}),e.jsx(n.h2,{children:"Stack"}),e.jsx(n.p,{children:"Built with:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React 19"})," + ",e.jsx(n.strong,{children:"TypeScript"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vite 6"})," — fast bundling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TanStack Router"})," — type-safe routing with auto code-splitting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind CSS v4"})," — utility-first styling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MDX"})," — blog content as Markdown + JSX"]}),`
`]}),e.jsx(n.h2,{children:"Design System"}),e.jsx(n.h3,{children:"Grid Background"}),e.jsx(n.p,{children:"The foundation of the futuristic look is a subtle grid overlay:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`body {
  background-image:
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px),
    linear-gradient(0deg, var(--grid-color) 1px, transparent 1px);
  background-size: 60px 60px;
}
`})}),e.jsx(n.h3,{children:"Glassmorphism"}),e.jsxs(n.p,{children:["Cards and UI elements use a glass effect with ",e.jsx(n.code,{children:"backdrop-filter: blur()"})," — giving that sleek, modern depth without overwhelming the content."]}),e.jsx(n.h3,{children:"Color Palette — Emerald Tech"}),e.jsxs(n.p,{children:["After experimenting with indigo, I switched to ",e.jsx(n.strong,{children:"emerald & teal"})," accents. The palette feels fresh, professional, and stands out without being aggressive."]}),e.jsxs(n.p,{children:[`| Role            | Color                   |
| --------------- | ----------------------- |
| Primary accent  | `,e.jsx(n.code,{children:"#059669"}),` (emerald-600) |
| Hover state     | `,e.jsx(n.code,{children:"#10B981"}),` (emerald-500) |
| Card background | White with 60% opacity  |`]}),e.jsx(n.h2,{children:"Key Changes"}),e.jsx(n.h3,{children:"1. Hero Section (`/`)"}),e.jsx(n.p,{children:"The home page went from a simple greeting to a full hero section with:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Decorative ",e.jsx(n.code,{children:"// _index"})," monospace prefix"]}),`
`,e.jsx(n.li,{children:"Glow effect on the name"}),`
`,e.jsx(n.li,{children:"Tech stack snippet card"}),`
`,e.jsx(n.li,{children:"Two clear CTAs: View Projects & Contact Me"}),`
`]}),e.jsx(n.h3,{children:"2. About Page (`/about`)"}),e.jsx(n.p,{children:"Completely rebuilt with data from my CV:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Professional summary"}),`
`,e.jsx(n.li,{children:"6-category skill matrix (Frontend, Backend, Mobile, Database, Cloud, Tools)"}),`
`,e.jsx(n.li,{children:"Experience timeline with 5 companies"}),`
`,e.jsx(n.li,{children:"Contact links (Email, GitHub, LinkedIn)"}),`
`,e.jsx(n.li,{children:"Education & languages section"}),`
`]}),e.jsx(n.h3,{children:"3. Projects (`/projects`)"}),e.jsxs(n.p,{children:["Expanded from 2 projects to ",e.jsx(n.strong,{children:"8 real projects"})," from my career:"]}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"EMR System (Flutter, Go, AWS)"}),`
`,e.jsx(n.li,{children:"DEX Crypto Trading App"}),`
`,e.jsx(n.li,{children:"Hokben Mobile Apps"}),`
`,e.jsx(n.li,{children:"BUMA Driver Behavior module"}),`
`,e.jsx(n.li,{children:"SMART PLN mobile app"}),`
`,e.jsx(n.li,{children:"And more"}),`
`]}),e.jsx(n.p,{children:"Each project card has tech stack badges, bullet points, and live links."}),e.jsx(n.h3,{children:"4. Blog"}),e.jsx(n.p,{children:"Upgraded from a plain list to glass card style with numbering, hover effects, and a proper back-navigation on post detail pages."}),e.jsx(n.h3,{children:"5. Navigation"}),e.jsx(n.p,{children:"Sticky glass navbar with:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Active link indicator"}),`
`,e.jsx(n.li,{children:"Mobile hamburger menu"}),`
`,e.jsxs(n.li,{children:["Monospace ",e.jsx(n.code,{children:"// albae69"})," logo prefix"]}),`
`]}),e.jsx(n.h2,{children:"Lessons Learned"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS specificity matters"})," — the global ",e.jsx(n.code,{children:"a { color }"})," selector was overriding button text colors. Scoping styles properly saved headaches."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind + CSS variables"})," pair beautifully for theming. Changing from indigo to emerald was as simple as updating a few variables and doing a find-and-replace."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MDX is great"})," for content that needs custom React components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TanStack Router"})," auto code-splitting gives performance wins with zero config."]}),`
`]}),e.jsx(n.h2,{children:"What's Next?"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Dark mode toggle"}),`
`,e.jsx(n.li,{children:"Page transition animations"}),`
`,e.jsx(n.li,{children:"Better mobile optimizations"}),`
`,e.jsx(n.li,{children:"More blog posts!"}),`
`]}),e.jsx(n.hr,{}),e.jsxs(n.p,{children:["Thanks for reading. Code is on ",e.jsx(n.a,{href:"https://github.com/albae69",children:"GitHub"}),"."]})]})}function x(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}const r={em(s){return e.jsx("i",{...s})}};function j(s){switch(s){case"hello_world":return e.jsx(d,{components:r});case"summary":return e.jsx(h,{components:r});case"revamp":return e.jsx(x,{components:r});default:return e.jsxs("p",{className:"text-zinc-500",children:["Post not found."," ",e.jsx(o,{to:"/blog",className:"text-emerald-500",children:"See all posts"})]})}}const u=function(){const{url:n}=c({from:a.id});return e.jsxs("article",{className:"py-8",children:[e.jsxs(o,{to:"/blog",className:"font-mono text-xs text-emerald-400 hover:text-emerald-600 transition-colors no-underline mb-4 inline-flex items-center gap-1",children:[e.jsx("svg",{className:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Back to blog"]}),e.jsx("div",{className:"glass rounded-xl p-6 border border-black/5 mt-4",children:j(n)})]})};export{u as component};
