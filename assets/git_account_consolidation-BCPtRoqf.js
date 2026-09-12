import{j as e}from"./index-Cdwfc7Zh.js";function r(i){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i.components};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-black font-bold text-2xl !mb-2",children:e.jsx(n.p,{children:"Why I Created a Second GitHub Account — And Why I Moved Everything Back"})}),e.jsx("span",{className:"font-mono text-xs text-zinc-400",children:e.jsx(n.p,{children:"12 Sep 2026 · 6 min read"})}),e.jsx(n.hr,{}),e.jsxs(n.p,{children:["For a while I ran ",e.jsx(n.strong,{children:"two GitHub accounts"}),": one main, one separate for work vs. personal. It seemed clean in theory. In practice, it killed my visibility. So I consolidated everything back to ",e.jsx(n.a,{href:"https://github.com/albae69",children:"@albae69"}),". Here's why I split, why I regretted it, and exactly how I moved it all back."]}),e.jsx(n.h2,{children:"Why I created a second account"}),e.jsx(n.p,{children:"Separation of concerns. I wanted:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Work vs. personal:"})," keep client / office code isolated from side projects and experiments"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clean profile:"})," keep the main account curated, let the second one be messy"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Permission safety:"})," avoid accidentally pushing private work code to a public personal account, and vice versa"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Different identities:"})," different name, email, SSH key per context"]}),`
`]}),e.jsx(n.p,{children:"It felt professional. Like having a work laptop and a personal laptop."}),e.jsx(n.h2,{children:"Why it didn't work"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Split contribution graph."})," My work was invisible on my main profile. Recruiters, collaborators, and anyone checking my GitHub saw a ghost town."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Portfolio starvation."})," My best, most consistent code lived in the other account — private or disconnected from my public identity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintenance pain."})," Two SSH configs, two ",e.jsx(n.code,{children:"git config user.email"}),", two logins, constant ",e.jsx(n.code,{children:"Permission denied (publickey)"}),", switching browsers for PR reviews."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No compounding."})," Stars, followers, history — all split in half. Neither profile looked active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Work ≠ secret."})," 99% of what I wanted to show I ",e.jsx(n.em,{children:"could"})," show — I just wasn't, because it was in the wrong account."]}),`
`]}),e.jsxs(n.p,{children:["Lesson: ",e.jsx(n.strong,{children:"visibility compounds, fragmentation doesn't."})," One active profile beats two half-active ones."]}),e.jsx(n.h2,{children:"Why I moved back"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single source of truth:"})," one profile that shows what I actually do"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hiring / freelance credibility:"})," people check one link. I want that link to be alive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simpler workflow:"})," one SSH key, one email setup with ",e.jsx(n.code,{children:"+work"})," filtering if needed, one ",e.jsx(n.code,{children:"gh auth login"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ownership:"})," even for work repos I can't make public, I can still fork / mirror my learnings, templates, and side extractions to main"]}),`
`]}),e.jsxs(n.p,{children:["I didn't delete separation entirely — I just moved it from ",e.jsx(n.em,{children:"accounts"})," to ",e.jsx(n.em,{children:"orgs + repos + branches"}),"."]}),e.jsx(n.p,{children:"How I separate now:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"albae69"})," = everything public under my name"]}),`
`,e.jsx(n.li,{children:"GitHub Orgs = per-client / per-company work"}),`
`,e.jsxs(n.li,{children:["Private repos + ",e.jsx(n.code,{children:"work/"})," branches for WIP"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".gitconfig"})," with ",e.jsx(n.code,{children:"includeIf hasdir:~/work/"})," for work email"]}),`
`]}),e.jsx(n.h2,{children:"How I transferred everything back"}),e.jsx(n.p,{children:"If you're doing the same, here's the reliable path:"}),e.jsx(n.h3,{children:"1. Option A: Transfer (keeps stars, issues, history)"}),e.jsx(n.p,{children:"Best for repos you own on the second account."}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["On second account: Repo → ",e.jsx(n.strong,{children:"Settings → General → Danger Zone → Transfer ownership"})]}),`
`,e.jsx(n.li,{children:"Type repo name, enter main username, confirm"}),`
`,e.jsx(n.li,{children:"Accept transfer email on main account"}),`
`,e.jsx(n.li,{children:"Update local remote:"}),`
`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git remote -v
git remote set-url origin git@github.com:albae69/REPO-NAME.git
git pull && git push
`})}),e.jsx(n.p,{children:`Pros: preserves stars, PRs, issues, watchers.
Cons: only works repo-by-repo, need admin on both sides.`}),e.jsx(n.h3,{children:"2. Option B: Mirror push (for bulk / clean break)"}),e.jsx(n.p,{children:"Best when you have many repos or want to rename."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# bare mirror clone from old account
git clone --mirror git@github-old:OLD-USER/REPO-NAME.git
cd REPO-NAME.git

# push to new account (create empty repo first on main, no README)
git remote set-url --push origin git@github.com:albae69/REPO-NAME.git
git push --mirror

# back to normal clone for daily use
cd ..
git clone git@github.com:albae69/REPO-NAME.git
`})}),e.jsxs(n.p,{children:["Repeat with a small shell loop for all repos. Verify: branches, tags, ",e.jsx(n.code,{children:"git log --oneline --graph"})," match."]}),e.jsx(n.h3,{children:"3. Cleanup checklist I ran"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[ ] Transfer / mirror all repos"}),`
`,e.jsx(n.li,{children:"[ ] Move Gists (no auto-transfer — manual copy)"}),`
`,e.jsx(n.li,{children:"[ ] Update README badges, clone URLs, CI secrets"}),`
`,e.jsx(n.li,{children:"[ ] Update Vercel / Netlify / Cloudflare git connections"}),`
`,e.jsxs(n.li,{children:["[ ] Update local ",e.jsx(n.code,{children:"~/.ssh/config"})," — remove ",e.jsx(n.code,{children:"github-old"})," host, keep one key"]}),`
`,e.jsx(n.li,{children:"[ ] Fix global git identity:"}),`
`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git config --global user.name "albae69"
git config --global user.email "main-email@example.com"
# work override only under ~/work/
git config --global includeIf.hasdir:~/work/.path ~/.gitconfig-work
`})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[ ] ",e.jsx(n.code,{children:"gh auth login"})," only on main, ",e.jsx(n.code,{children:"gh auth logout"})," on old"]}),`
`,e.jsxs(n.li,{children:['[ ] Redirect notice on old profile README: "Moved to ',e.jsx(n.a,{href:"https://github.com/albae69",children:"@albae69"}),'"']}),`
`,e.jsx(n.li,{children:"[ ] Keep old account for 30 days (to catch CI / webhooks), then archive or delete"}),`
`]}),e.jsx(n.h2,{children:"What I'd do differently"}),e.jsxs(n.p,{children:["Don't create a second ",e.jsx(n.em,{children:"personal"})," account for work vs. personal. Create an ",e.jsx(n.strong,{children:"Organization"})," instead. You get isolation without losing identity, and you can leave the org without losing your history."]}),e.jsxs(n.p,{children:["Rule I use now: ",e.jsx(n.strong,{children:"one human = one GitHub account. Separation happens with orgs, not accounts."})]}),e.jsx(n.hr,{}),e.jsxs(n.p,{children:["Moved everything back to ",e.jsx(n.a,{href:"https://github.com/albae69",children:"github.com/albae69"}),". Green squares finally tell the truth."]}),e.jsx(n.p,{children:"If you're split across two accounts, consolidate. Future you will thank you."})]})}function o(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default};
