import { Link, NavLink } from "react-router-dom";
import { BookOpen, Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const navClass = ({ isActive }) =>
  `transition hover:text-rose ${isActive ? "text-rose" : "text-white/80"}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-base font-bold tracking-wide">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-rose"><BookOpen size={17} /></span>
          Bookshop<span className="text-rose">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[11px] md:flex">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/books" className={navClass}>Books</NavLink>
          <NavLink to="/about" className={navClass}>About Us</NavLink>
          <a href="#contact" className="text-white/80 transition hover:text-rose">Contact</a>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button aria-label="Search" className="rounded-full p-2 transition hover:bg-white/10"><Search size={16} /></button>
          <button aria-label="Shopping bag" className="rounded-full p-2 transition hover:bg-white/10"><ShoppingBag size={16} /></button>
          <Link to="/books" className="rounded-sm bg-rose px-4 py-2 text-[10px] font-semibold transition hover:bg-pink-700">Sign In</Link>
          <Link to="/books" className="rounded-sm border border-white/50 px-4 py-2 text-[10px] font-semibold hover:bg-white/10">Sign Up</Link>
        </div>
        <button className="rounded-md p-2 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"><Menu size={22} /></button>
      </div>
      {mobileOpen && <div className="mx-5 rounded-xl border border-white/10 bg-plum p-4 shadow-xl md:hidden"><div className="flex flex-col gap-4 text-sm"><NavLink onClick={() => setMobileOpen(false)} to="/">Home</NavLink><NavLink onClick={() => setMobileOpen(false)} to="/books">Books</NavLink><NavLink onClick={() => setMobileOpen(false)} to="/about">About Us</NavLink><a onClick={() => setMobileOpen(false)} href="#contact">Contact</a></div></div>}
    </header>
  );
}
