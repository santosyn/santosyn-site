import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#06070b]/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          aria-label="Santosyn home"
        >
          <Image
            src="/logo.png"
            alt="Santosyn"
            width={200}
            height={48}
            priority
            className="h-[34px] w-auto"
          />
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

