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

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-12 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/70">
          AUSTRALIAN SOFTWARE COMPANY
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Train Smarter.
          <br />
          <span className="text-teal-400">Fight Better.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
          AI-powered tools for fighters, coaches, and combat athletes.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="rounded-2xl bg-teal-400 px-8 py-4 font-medium text-black transition hover:opacity-90"
          >
            View Products
          </a>
          <a
            href="#contact"
            className="rounded-2xl border border-white/10 px-8 py-4 font-medium text-white transition hover:bg-white/5"
          >
            Contact Us
          </a>
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-5 h-12 w-12 rounded-2xl bg-teal-400/20" />
            <h3 className="text-xl font-semibold">Elite Round Timer</h3>
            <p className="mt-3 text-white/60">
              A professional round timer built for boxing and combat sports training.
            </p>
          </div>

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