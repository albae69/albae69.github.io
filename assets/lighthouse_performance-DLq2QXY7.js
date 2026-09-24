import{j as e}from"./main-hqXyxPFD.js";import"./index-D2_OjkuW.js";function i(n){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...n.components};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-black font-bold text-2xl !mb-2",children:e.jsx(t.p,{children:"From 42 to 100: How I Improved My Lighthouse Score"})}),e.jsx("span",{className:"font-mono text-xs text-zinc-400",children:e.jsx(t.p,{children:"September 24, 2026 · 8 min read"})}),e.jsx(t.hr,{}),e.jsx(t.p,{children:"A portfolio can look fast while still being slow to load. That was the case for mine: a beautiful 3D avatar, animated hero content, analytics, custom fonts, and a React app were all competing for the same first few seconds."}),e.jsxs(t.p,{children:["A Lighthouse run against the deployed site gave me a performance score of ",e.jsx(t.strong,{children:"42"}),". The first version of my optimization work was enough to make the site feel dramatically faster, but it still fluctuated between 98 and 99. The final changes made local production runs reach a stable ",e.jsx(t.strong,{children:"100"})," on both mobile and desktop."]}),e.jsxs(t.p,{children:["The important part was not adding a performance library. I changed ",e.jsx(t.em,{children:"when"})," work happened."]}),e.jsx(t.h2,{children:"The starting point"}),e.jsx(t.p,{children:"The first Lighthouse run showed several expensive problems happening at once:"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"FCP:"})," 4.2 seconds"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"LCP:"})," 4.4 seconds"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"TBT:"})," 3.57 seconds"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Initial transfer:"})," about 962 KiB"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Three.js chunk:"})," roughly 939 KB minified, or 254 KB compressed"]}),`
`]}),e.jsx(t.p,{children:"The 3D avatar was the biggest dependency, but it was not the only problem. Analytics was loading during the audit, Google Fonts were render-blocking, and hero content was hidden behind reveal animations."}),e.jsx(t.p,{children:"Lighthouse was not complaining about one isolated issue. The entire startup path was crowded."}),e.jsx(t.h2,{children:"1. Keep the 3D experience, remove it from the critical path"}),e.jsx(t.p,{children:"The avatar is interactive, but most visitors do not interact with it immediately. Loading Three.js, React Three Fiber, and Drei before React finished mounting made the 3D feature block the page."}),e.jsx(t.p,{children:"I kept the feature and moved it behind an interaction boundary. The first render uses a small WebP image. Pointer, touch, or keyboard activity loads the full 3D component."}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`useEffect(() => {
  let mounted = true
  const events = ['pointerdown', 'pointermove', 'keydown', 'touchstart'] as const

  const loadOrbit = () => {
    if (!mounted) return

    void import('./AvatarOrbit').then(({ default: Avatar }) => {
      if (mounted) setAvatarOrbit(() => Avatar)
    })
  }

  for (const event of events) {
    window.addEventListener(event, loadOrbit, { once: true, passive: true })
  }

  return () => {
    mounted = false
    for (const event of events) window.removeEventListener(event, loadOrbit)
  }
}, [])
`})}),e.jsx(t.p,{children:"The heavy chunk still exists in the build, but it is no longer part of the initial page load. This is progressive enhancement: visitors get a useful image immediately, then get the richer experience when they show intent to use it."}),e.jsx(t.h2,{children:"2. Defer analytics until there is interaction"}),e.jsx(t.p,{children:"Analytics should not compete with the first visit. Firebase and Google Analytics were previously loaded soon after the page started, which added network requests and main-thread work while Lighthouse was still measuring the page."}),e.jsx(t.p,{children:"I changed analytics into a one-time interaction loader:"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`let analyticsLoaded = false

function loadAnalytics() {
  if (analyticsLoaded) return
  analyticsLoaded = true

  // Load Firebase and gtag here.
}

for (const event of ['pointerdown', 'pointermove', 'keydown', 'touchstart']) {
  window.addEventListener(event, loadAnalytics, { once: true, passive: true })
}
`})}),e.jsx(t.p,{children:"The first visitor to interact starts analytics. A visitor who only reads the page does not pay for it during the critical rendering path."}),e.jsx(t.h2,{children:"3. Give the browser something to paint before React boots"}),e.jsxs(t.p,{children:["React is useful, but it is not required for the first frame. I added a small static shell directly to ",e.jsx(t.code,{children:"index.html"})," with the name, role, and profile image. The shell has its own inline CSS, so it can appear before the application bundle is parsed."]}),e.jsx(t.p,{children:"Then I delayed the application entry until the browser had a frame to paint:"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<script type="module">
  requestAnimationFrame(() => import('/src/main.tsx'))
<\/script>
`})}),e.jsx(t.p,{children:"Vite turns that dynamic import into a small initial chunk and a separate application chunk. The shell gets first paint, then React loads and replaces the empty root. The shell is removed after React mounts and the boot image is ready."}),e.jsx(t.p,{children:"I also deferred the application stylesheet from the render-blocking path. The small inline shell is enough to establish first paint, while the full application stylesheet loads alongside the app."}),e.jsx(t.p,{children:"This change had a bigger effect than shaving a few kilobytes from JavaScript. It changed the order of work:"}),e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"HTML arrives."}),`
`,e.jsx(t.li,{children:"Browser paints the static shell."}),`
`,e.jsx(t.li,{children:"React and application styles load."}),`
`,e.jsx(t.li,{children:"Interactive page replaces the shell."}),`
`]}),e.jsx(t.h2,{children:"4. Stop reveal animations from delaying LCP"}),e.jsx(t.p,{children:"The hero had reveal animations around the heading, subtitle, and profile area. Those animations looked good, but they made important content wait for opacity and transform transitions before becoming fully visible."}),e.jsx(t.p,{children:"LCP rewards content that is visible early, not content that eventually becomes visible after a carefully timed animation. I removed the reveal wrappers from the above-the-fold heading and avatar. Animations remain elsewhere on the page, where they do not compete with the first meaningful frame."}),e.jsx(t.p,{children:"This was a small code change with a much larger effect than adding another optimization package."}),e.jsx(t.h2,{children:"5. Match image size to its job"}),e.jsx(t.p,{children:"The original profile image was 400×400 and was being used for the initial shell, the React fallback, and the 3D texture. Those are three different jobs."}),e.jsx(t.p,{children:"I created smaller WebP assets:"}),e.jsxs(t.p,{children:[`| Asset | Role | Approximate size |
| --- | --- | ---: |
| `,e.jsx(t.code,{children:"profile-240.webp"}),` | First-paint boot shell | 7.6 KB |
| `,e.jsx(t.code,{children:"profile-320.webp"}),` | Static React fallback | 13.9 KB |
| `,e.jsx(t.code,{children:"profile-400.webp"})," | High-resolution 3D texture | 37 KB |"]}),e.jsx(t.p,{children:"The boot image is preloaded with high priority because it is the likely LCP image. The 400px version is no longer downloaded until the visitor asks for the 3D experience."}),e.jsx(t.p,{children:"The result is not just a smaller file. It is less wasted image decoding and fewer bytes competing with JavaScript on a slow connection."}),e.jsx(t.h2,{children:"Results"}),e.jsxs(t.p,{children:["The final local production build produced a Lighthouse performance score of ",e.jsx(t.strong,{children:"100"})," across three mobile runs and ",e.jsx(t.strong,{children:"100"})," on desktop."]}),e.jsx(t.p,{children:"Representative mobile results were:"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"FCP:"})," about 1.1 seconds"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"LCP:"})," about 1.5 seconds"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"TBT:"})," 0–1 ms"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Initial transfer:"})," about 198 KB"]}),`
`]}),e.jsx(t.p,{children:"Compared with the original deployed run, FCP fell from 4.2 seconds to roughly 1.1 seconds, LCP fell from 4.4 seconds to roughly 1.5 seconds, and the initial transfer dropped from 962 KiB to about 198 KB."}),e.jsx(t.p,{children:"The exact public score can still vary with GitHub Pages caching, network latency, browser version, and Lighthouse settings. A perfect local lab score is not a promise that every real user will see 100. It does mean the critical path is now much smaller and more predictable."}),e.jsx(t.h2,{children:"What I learned"}),e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Defer by intent."})," A feature does not need to load before a visitor asks to use it."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"First paint should not depend on a large framework."})," A small HTML shell can buy useful paint time without becoming a second application."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Preload only the real LCP asset."})," Preloading every image can make the beginning slower, not faster."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Measure deployed and local builds separately."})," Hosting latency and cache state matter, but local runs are useful for comparing code changes."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Performance does not require removing personality."})," The 3D avatar, animations, and analytics all stayed. They just stopped blocking the first visit."]}),`
`]}),e.jsx(t.p,{children:"I did not rewrite the site in a different framework or delete the features that made it interesting. I changed their timing."}),e.jsx(t.p,{children:"The best optimization was not a clever configuration. It was making the page do less work before it had permission to do that work."}),e.jsx(t.hr,{}),e.jsxs(t.p,{children:["Code and implementation details are available on ",e.jsx(t.a,{href:"https://github.com/albae69",children:"GitHub"}),"."]})]})}function r(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{r as default};
