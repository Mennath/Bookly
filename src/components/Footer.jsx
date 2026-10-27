import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-plum text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-7 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2 text-sm font-bold"><span className="grid h-7 w-7 place-items-center rounded bg-rose"><BookOpen size={14}/></span>Bookshop<span className="text-rose">.</span></Link>
          <p className="mt-2 max-w-sm text-[10px] leading-5 text-white/55">Your favorite place to discover books, stories, and new ideas.</p>
          <p className="mt-2 text-[9px] text-white/40">© 2026 Bookshop. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-[10px] text-white/65">
          <Link className="hover:text-white" to="/">Home</Link><Link className="hover:text-white" to="/books">Books</Link><Link className="hover:text-white" to="/about">About</Link><a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <a href="#contact" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-rose"><Facebook size={13}/></a>
          <a href="#contact" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-rose"><Instagram size={13}/></a>
          <a href="#contact" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-rose"><Twitter size={13}/></a>
          <span className="ml-2 rounded-full border border-white/15 px-3 py-1 text-[9px] text-white/45">EN · USD</span>
        </div>
      </div>
    </footer>
  );
}
