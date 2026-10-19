function Footer() {
  return (
    <footer className="bg-gray-950 px-4 pb-6 pt-12 text-gray-300 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Logo and Description */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-800 pb-8 text-center md:flex-row md:text-left">
          <a
            href="/"
            className="group flex items-center gap-3 text-3xl font-extrabold tracking-tight text-white transition hover:text-amber-400"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-2xl text-gray-950 transition group-hover:rotate-6">
              ▣
            </span>
            Bookly<span className="text-amber-400">.</span>
          </a>

          <p className="max-w-md text-sm leading-6 text-gray-400">
            Discover your next favorite book and enjoy the journey of reading
            with Bookly.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center justify-between gap-6 py-7 md:flex-row">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-7 gap-y-4"
          >
            <a
              href="/"
              className="text-sm transition-colors hover:text-amber-400"
            >
              Home
            </a>

            <a
              href="/books"
              className="text-sm transition-colors hover:text-amber-400"
            >
              Books
            </a>

            <a
              href="/#recommended"
              className="text-sm transition-colors hover:text-amber-400"
            >
              About Us
            </a>

            <a
              href="/#sale"
              className="text-sm transition-colors hover:text-amber-400"
            >
              Contact
            </a>
          </nav>

          <a
            href="mailto:hello@bookly.com"
            className="text-sm text-gray-400 transition-colors hover:text-amber-400"
          >
            hello@bookly.com
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-5 text-center">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Bookly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;