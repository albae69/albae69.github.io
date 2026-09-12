import{j as e}from"./index-Cdwfc7Zh.js";function t(s){const n={code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-black font-bold text-2xl !mb-2",children:e.jsx(n.p,{children:"My Stack for New Projects"})}),`
`,e.jsx("span",{className:"font-mono text-xs text-zinc-400",children:e.jsx(n.p,{children:"11 September 2026 · 6 min read"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["People ask me all the time: ",e.jsx(n.em,{children:'"If you were starting a new project today, what would you use?"'})," This is my answer — the stack I reach for by default, why I chose each piece, and the exact commands to get started."]}),`
`,e.jsx(n.h2,{children:"The Short Answer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Web"})," — React + Next.js"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile"})," — React Native or Flutter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backend"})," — Express (Node) or Go"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Runtime"})," — Bun (drop-in Node replacement)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AI tooling"})," — GitHub Copilot + DeepSeek Flash v4 via OpenRouter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Routing"})," — TanStack Router"]}),`
`]}),`
`,e.jsx(n.p,{children:"Everything is TypeScript-first where possible, boring where it matters, and fast to scaffold."}),`
`,e.jsx(n.h2,{children:"Web: React + Next.js"}),`
`,e.jsxs(n.p,{children:["For anything that renders in a browser, I default to ",e.jsx(n.strong,{children:"React"})," with ",e.jsx(n.strong,{children:"Next.js"})," on top."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React"})," — the ecosystem is unmatched. Every library, every answer on Stack Overflow, every AI model knows React."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Next.js"})," — file-based routing, SSR/SSG out of the box, API routes when I don't need a separate backend. One command and I'm shipping."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx create-next-app@latest my-app
`})}),`
`,e.jsxs(n.p,{children:["For smaller, client-heavy projects (like this portfolio) I'll drop Next.js and use ",e.jsx(n.strong,{children:"Vite"})," instead — faster dev server, less magic:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm create vite@latest my-app -- --template react-ts
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`bun create vite my-app --template react-ts
`})}),`
`,e.jsx(n.h2,{children:"Runtime: Bun"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Bun"})," is my default runtime — a drop-in Node replacement that's dramatically faster:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Package manager"})," — ",e.jsx(n.code,{children:"bun install"})," is faster than npm or yarn, and it reads ",e.jsx(n.code,{children:"package.json"})," directly."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Runtime"})," — runs JS/TS natively, no build step needed for scripts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test runner"})," — ",e.jsx(n.code,{children:"bun test"})," is built in, zero config."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`bun init
bun add express
bun run dev
`})}),`
`,e.jsx(n.p,{children:"One tool for install, run, and test — fewer moving parts."}),`
`,e.jsx(n.h2,{children:"Mobile: React Native or Flutter"}),`
`,e.jsx(n.p,{children:"Two options, depending on the project:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React Native"})," — when I want to share types and logic with a React web app. One codebase, two platforms, same mental model."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flutter"})," — when the UI needs to feel truly native and polished. Dart is pleasant, and the widget system is the best in the business."]}),`
`]}),`
`,e.jsxs(n.p,{children:["On this machine I manage Flutter through ",e.jsx(n.strong,{children:"FVM"})," (Flutter Version Management), so the SDK isn't on ",e.jsx(n.code,{children:"PATH"})," — I call the pinned version directly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`/Users/bae/fvm/versions/<version>/bin/flutter create my_app
/Users/bae/fvm/versions/<version>/bin/flutter run
`})}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.code,{children:"android/local.properties"})," → ",e.jsx(n.code,{children:"flutter.sdk"})," to see which version a project pins."]}),`
`,e.jsx(n.h2,{children:"Backend: Express or Go"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Express"})," — my default for quick APIs, prototypes, and anything that should stay in the JS/TS world. Minimal, well-known, zero surprises."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm init -y
npm install express
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Go"})," — when I need performance, strong typing, or a single static binary. Great for services that will live a long time and need to be fast. The standard library covers most of what I need, so dependencies stay small."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`go mod init my-service
go run .
`})}),`
`,e.jsx(n.h2,{children:"AI Tooling: GitHub Copilot + DeepSeek Flash v4"}),`
`,e.jsx(n.p,{children:"Every new project starts with AI assistance wired in:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GitHub Copilot"})," — my daily driver in the editor. Autocomplete, chat, and agent mode for multi-file changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DeepSeek Flash v4"})," — the model I run through ",e.jsx(n.strong,{children:"OpenRouter"}),". Fast, cheap, and good enough for most coding tasks."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# OpenRouter gives you one API for many models
curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \\
  -d '{"model": "deepseek/deepseek-chat-v4-flash", "messages": [{"role": "user", "content": "hello"}]}'
`})}),`
`,e.jsx(n.p,{children:"One API key, every model — swap models without touching your code."}),`
`,e.jsx(n.h2,{children:"Routing: TanStack Router"}),`
`,e.jsxs(n.p,{children:["For client-heavy React apps (like this site), I use ",e.jsx(n.strong,{children:"TanStack Router"})," instead of Next.js routing:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-safe routes"})," — links and params are checked at compile time, not runtime."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto code-splitting"})," — each route becomes its own chunk with zero config."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tanstack/react-router
`})}),`
`,e.jsx(n.h2,{children:"Why These Choices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript everywhere"})," — one language across web, mobile (React Native), and backend (Express). Context switching costs nothing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Boring is fast"})," — every tool above is mainstream. Hiring, debugging, and AI assistance all get easier when you're on the beaten path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Right tool per layer"})," — React for the web, Flutter/RN for mobile, Go when the backend needs to be fast. No one-size-fits-all dogma."]}),`
`]}),`
`,e.jsx(n.h2,{children:"The Golden Rule"}),`
`,e.jsx(n.p,{children:"The stack is a starting point, not a contract. If a project needs something different — a database, a queue, a different framework — I swap that one piece and keep the rest. The goal is to spend zero time on setup and all of it on the actual problem."})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default};
