export default function Home() {
  return (
    <main className="min-h-screen bg-[#06070b] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-black font-semibold">
            S
          </div>
          <span className="text-lg font-semibold">Santosyn</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-22rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute right-[-10rem] top-[6rem] h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-28 pt-16 text-center md:pb-36 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/70 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400/90 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]" />
            AUSTRALIAN SOFTWARE COMPANY
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Train Smarter.
            <br />
            <span className="bg-gradient-to-b from-teal-200 via-teal-300 to-teal-500 bg-clip-text text-transparent">
              Fight Better.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-xl">
            AI-powered tools for fighters, coaches, and combat athletes.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-teal-300 to-teal-500 px-8 py-4 text-sm font-semibold tracking-tight text-black shadow-[0_12px_40px_-20px_rgba(45,212,191,0.75)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_-26px_rgba(45,212,191,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 sm:w-auto"
            >
              View Products
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/90 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:w-auto"
            >
              Contact Us
            </a>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Built in Melbourne. Designed for serious training environments.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">About Santosyn</h2>
          <p className="mt-4 max-w-3xl text-white/65">
            Santosyn Pty Ltd is an Australian software development company building
            performance-focused mobile applications and digital tools for combat
            athletes, coaches, and modern training environments.
          </p>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Products</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="https://apps.apple.com/au/app/elite-round-timer/id6759595562"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/15 ring-1 ring-white/10 transition group-hover:bg-teal-400/20">
              <span className="text-sm font-semibold text-teal-200">ERT</span>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Elite Round Timer</h3>
              <span className="text-white/35 transition group-hover:text-white/55">↗</span>
            </div>
            <p className="mt-3 text-white/60">
              A professional round timer built for boxing and combat sports training.
            </p>
          </a>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-5 h-12 w-12 rounded-2xl bg-teal-400/20" />
            <h3 className="text-xl font-semibold">FIGHTR</h3>
            <p className="mt-3 text-white/60">
              A performance tracking app designed to help athletes train with consistency and intent.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-5 h-12 w-12 rounded-2xl bg-teal-400/20" />
            <h3 className="text-xl font-semibold">RingSense</h3>
            <p className="mt-3 text-white/60">
              An AI-powered analytics platform for combat sports performance and technical improvement.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
          <p className="mt-4 text-white/65">santosynai@outlook.com</p>
          <p className="mt-2 text-white/65">Melbourne, Victoria, Australia</p>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
            <p>Santosyn Pty Ltd</p>
            <p>ACN 695 641 215</p>
            <p>Melbourne, Victoria, Australia</p>
          </div>
        </div>
      </section>
    </main>
  );
}