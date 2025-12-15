import{j as n}from"./index-ZnLZzt9o.js";import"https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";function o(t){const e={p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:[n.jsx("h1",{className:"text-black font-bold text-2xl",children:"Hello World!"}),`\r
12 June 2025`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.p,{children:"This is my first post build with mdx-js/react."})]})}function i(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}function s(t){const e={p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:[n.jsx("h1",{className:"text-black font-bold text-2xl",children:"Summary"}),`\r
15 Dec 2025`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.p,{children:"hmm... what i'm doing."}),`
`,n.jsx(e.p,{children:"wasted year += 1"})]})}function l(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}const r={em(t){return n.jsx("i",{...t})}};function m(t){switch(t){case"hello_world":return n.jsx(i,{components:r});case"summary":return n.jsx(l,{components:r});default:return null}}const u=function(){const{pathname:e}=window.location,c=e.split("/")[2];return n.jsx("div",{className:"my-4",children:m(c)})};export{u as component};
