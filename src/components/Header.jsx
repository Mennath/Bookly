import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="/"
          className="group flex shrink-0 items-center gap-2 text-2xl font-extrabold tracking-tight text-gray-900 transition hover:text-amber-600"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl text-gray-950 transition group-hover:rotate-6">
            ▣
          </span>
          Bookly<span className="text-amber-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-semibold text-gray-700 transition hover:text-amber-600"
          >
            Home
          </a>

          <a
            href="/books"
            className="text-sm font-semibold text-gray-700 transition hover:text-amber-600"
          >
            Books
          </a>

          <a
            href="/#sale"
            className="text-sm font-semibold text-gray-700 transition hover:text-amber-600"
          >
            About Us
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => alert("Login page coming soon!")}
            className="rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 transition hover:bg-gray-100 hover:text-amber-700"
          >
            Log In
          </button>

          <button
            type="button"
            onClick={() => alert("Sign up page coming soon!")}
            className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-amber-200"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-2xl text-gray-800 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
            >
              Home
            </a>

            <a
              href="/books"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
            >
              Books
            </a>

            <a
              href="/#sale"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
            >
              About Us
            </a>
          </nav>

          <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                alert("Login page coming soon!");
              }}
              className="flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
            >
              Log In
            </button>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                alert("Sign up page coming soon!");
              }}
              className="flex-1 rounded-full bg-amber-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-amber-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;