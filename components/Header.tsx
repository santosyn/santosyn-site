import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#06070b]/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          aria-label="Santosyn home"
          className="text-[28px] font-semibold tracking-[0.18em] text-white"
        >
          SANTOSYN
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
          <a className="transition hover:text-white" href="#products">
            Products
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
