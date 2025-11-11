import React from "react";

// Semyon / Trytonottry — Single file React landing page (TailwindCSS)
// Default export: Landing component
// Instructions: place into a React app (Vite/Create React App) with Tailwind configured.

const projects = [
  {
    name: "AutoSecFlow",
    desc: "Automation for SAST/DAST and CI/CD security workflows. CI integrations and reporting.",
    repo: "https://github.com/Trytonottry/AutoSecFlow",
    tags: ["DevSecOps", "CI/CD", "Automation"],
  },
  {
    name: "Sentinel-Vault",
    desc: "Secure data vault with recursive encryption primitives and tooling demo.",
    repo: "https://github.com/Trytonottry/Sentinel-Vault",
    tags: ["Security", "Encryption", "Python"],
  },
  {
    name: "infosec-newbie",
    desc: "Collection of learning scripts and small tools for hands-on infosec practice.",
    repo: "https://github.com/Trytonottry/infosec-newbie",
    tags: ["Learning", "Tools", "Python"],
  },
  {
    name: "sharp-vless",
    desc: "Windows VLESS client implementation — networking and systems code in C#.",
    repo: "https://github.com/Trytonottry/sharp-vless",
    tags: ["Networking", "C#", "Client"],
  },
  {
    name: "riscv-secure-os",
    desc: "Experimental minimal OS for RISC‑V — low-level systems exploration.",
    repo: "https://github.com/Trytonottry/riscv-secure-os",
    tags: ["Systems", "RISC-V", "Research"],
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#071226] text-slate-200 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0ea5a4] to-[#7c3aed] shadow-lg">
            <span className="font-semibold">ST</span>
          </div>
          <div>
            <div className="text-lg font-semibold">Semyon / <span className="text-[#7c3aed]">Trytonottry</span></div>
            <div className="text-xs text-slate-400">DevOps и DevSecOps инженер — создаю продукты, управляю серверами, автоматизирую процессы</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="https://github.com/Trytonottry" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md hover:bg-slate-700/30">GitHub</a>
          <a href="https://steamcommunity.com/id/FuckU__DopeOne/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md hover:bg-slate-700/30">Steam</a>
          <a href="mailto:popovsemyona@example.com" className="text-sm px-3 py-2 rounded-md hover:bg-slate-700/30">Email</a>
          <a href="https://t.me/Try2NotTry" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md bg-slate-700/20">Telegram</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hero */}
        <section className="lg:col-span-2">
          <div className="rounded-2xl p-8 bg-gradient-to-b from-[#071226]/60 to-[#081428]/40 border border-slate-800 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Semyon — инженер, который соединяет <span className="text-[#0ea5a4]">код</span>, <span className="text-[#7c3aed]">серверы</span> и <span className="text-[#f43f5e]">процессы</span>.
            </h1>
            <p className="mt-4 text-slate-300">Я занимаюсь DevOps, DevSecOps и автоматизацией — от железа (HP DL380p Gen8, Proxmox) до production‑ready CI/CD и контейнеризации. Ставлю задачу: создавать надёжные, безопасные и автоматизированные решения, которые приносят результат.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0ea5a4]/10 border border-[#0ea5a4]/30 hover:bg-[#0ea5a4]/20">Проекты</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#7c3aed] text-black font-medium hover:opacity-90">Связаться</a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-700">
                <div className="text-xs text-slate-400">Инфраструктура</div>
                <div className="mt-1 font-medium">HP DL380p Gen8 · Proxmox · ZeroTier</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-700">
                <div className="text-xs text-slate-400">Инструменты</div>
                <div className="mt-1 font-medium">Docker · Ansible · GitHub Actions · Prometheus</div>
              </div>
            </div>
          </div>

          {/* About / Skills */}
          <div className="mt-8 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl font-semibold">Навыки</h3>
            <p className="mt-3 text-slate-300">Python, Linux, DevOps, DevSecOps, CI/CD, инфраструктура, автоматизация, безопасность, сетевые технологии.</p>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Python','Linux','Docker','Ansible','CI/CD','Prometheus','Security','Proxmox'].map((s)=> (
                <div key={s} className="text-xs bg-slate-800/40 border border-slate-700 px-3 py-2 rounded-md">{s}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Side: Steam + Quick stats */}
        <aside className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="text-xs text-slate-400">Steam</div>
            <div className="mt-2 font-medium">Factorio · 190 ч · Любимая игра</div>
            <div className="mt-3 text-sm text-slate-400">Гайды и контент — показатель системного подхода и умения доводить проекты до результата.</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="text-xs text-slate-400">GitHub</div>
            <div className="mt-2 font-medium">94 репозиториев · 149 звёзд</div>
            <a href="https://github.com/Trytonottry" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-[#0ea5a4]">Посмотреть профиль →</a>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="text-xs text-slate-400">Готов к</div>
            <ul className="mt-2 text-sm list-disc list-inside text-slate-300">
              <li>Проекты по автоматизации</li>
              <li>DevSecOps интеграции</li>
              <li>Управляемый хостинг/администрирование</li>
            </ul>
          </div>
        </aside>

        {/* Projects */}
        <section id="projects" className="lg:col-span-3">
          <h2 className="text-2xl font-semibold mt-2">Ключевые проекты</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.name} href={p.repo} target="_blank" rel="noreferrer" className="block p-5 rounded-xl bg-gradient-to-b from-slate-900/60 to-slate-900/40 border border-slate-800 hover:scale-[1.01] transition-transform">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-lg">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.tags.join(' · ')}</div>
                </div>
                <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-4 text-xs text-slate-400">Посмотреть код на GitHub</div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="lg:col-span-3 mt-8">
          <div className="p-6 rounded-xl bg-gradient-to-b from-[#071226]/60 to-[#081428]/40 border border-slate-800">
            <h3 className="text-xl font-semibold">Связаться</h3>
            <p className="mt-2 text-slate-300">Напиши в Telegram или на почту — я обычно отвечаю быстро и предпочитаю конкретные технические запросы.</p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="https://t.me/yourusername" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-md bg-[#0ea5a4]/10 border border-[#0ea5a4]/30">Telegram</a>
              <a href="mailto:you@example.com" className="px-4 py-3 rounded-md bg-slate-700/30">Email</a>
              <a href="https://github.com/Trytonottry" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-md bg-slate-700/30">GitHub</a>
            </div>

            <div className="mt-6 text-sm text-slate-400">Коротко о коммерческих предложениях: я делаю MVP‑решения по автоматизации, Telegram‑боты с оплатой, скрейперы для тендеров и управляю выделенными серверами под проекты заказчика.</div>
          </div>
        </section>

        <footer className="lg:col-span-3 mt-8 text-center text-sm text-slate-500">
          <div className="mb-4">“Системы — это не хаос. Это упорядоченный мир идей, созданных инженерами.”</div>
          <div>© 2025 Semyon (Trytonottry). Все права защищены.</div>
        </footer>
      </main>
    </div>
  );
}
