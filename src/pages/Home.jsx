import { ArrowRight, Truck, ShieldCheck, Headphones, RotateCcw, Search, Clock3, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import SectionTitle from "../components/SectionTitle";
import { books } from "../data/books";

const features = [
  { icon: Truck, title: "Fast & Reliable Shipping", text: "Quick delivery to your doorstep." },
  { icon: ShieldCheck, title: "Secure Payments", text: "Safe and protected transactions." },
  { icon: RotateCcw, title: "Easy Returns", text: "Simple returns for peace of mind." },
  { icon: Headphones, title: "24/7 Customer Support", text: "We are always here to help you." },
];

export default function Home() {
  const bestRef = useRef(null);
  const scrollBooks = (direction) => bestRef.current?.scrollBy({ left: direction * 210, behavior: "smooth" });

  return (
    <>
      <section className="relative overflow-hidden bg-plum">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=90')" }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b141f]/85 via-[#241b2b]/55 to-[#241b2b]/45"/>
        <Navbar/>
        <div className="relative mx-auto flex min-h-[390px] max-w-6xl items-center justify-center px-5 pb-8 pt-24 text-center text-white sm:min-h-[440px]">
          <div className="w-full max-w-xl">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.3em] text-pink-300">Welcome to Bookshop</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">Discover Your Next<br/><span className="text-pink-300">Great Read</span></h1>
            <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-white/75 sm:text-sm">A book is a dream that you hold in your hands. Find the perfect story for your next chapter.</p>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/books?search=${encodeURIComponent(e.currentTarget.search.value)}`; }} className="mx-auto mt-6 flex max-w-sm items-center rounded-full bg-white p-1 shadow-xl">
              <Search className="ml-3 shrink-0 text-muted" size={15}/>
              <input name="search" placeholder="Search books..." className="min-w-0 flex-1 px-3 py-2 text-[11px] text-ink outline-none"/>
              <button aria-label="Search books" className="rounded-full bg-rose p-2.5 text-white hover:bg-pink-700"><Search size={13}/></button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-6 px-5 py-8 sm:grid-cols-4 sm:py-10">
        {features.map(({icon: Icon,title,text}) => <div key={title} className="flex gap-2.5"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush text-rose"><Icon size={13}/></span><div><h3 className="text-[10px] font-semibold text-ink">{title}</h3><p className="mt-1 text-[9px] leading-4 text-muted">{text}</p></div></div>)}
      </section>

      <section className="bg-plum py-9 sm:py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center"><SectionTitle eyebrow="Chosen by our readers" title="Best Seller" description="Our most-loved books, selected just for you." light center/></div>
          <div className="relative mt-7">
            <button aria-label="Previous books" onClick={() => scrollBooks(-1)} className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-rose sm:block"><ChevronLeft size={15}/></button>
            <div ref={bestRef} className="scrollbar-hide flex snap-x gap-3 overflow-x-auto pb-2">
              {books.map((book) => <div key={book.id} className="w-[132px] shrink-0 snap-start sm:w-[150px]"><BookCard book={book} dark/></div>)}
            </div>
            <button aria-label="Next books" onClick={() => scrollBooks(1)} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-rose sm:block"><ChevronRight size={15}/></button>
          </div>
          <div className="mt-5 text-center"><Link to="/books" className="inline-flex items-center gap-2 rounded-sm bg-rose px-5 py-2.5 text-[10px] font-semibold text-white hover:bg-pink-700">Browse More <ArrowRight size={12}/></Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <div className="mb-5 flex items-end justify-between gap-3"><SectionTitle eyebrow="Handpicked for you" title="Recommended For You" description="A few reads we think you will love."/><Link to="/books" className="shrink-0 text-[10px] font-semibold text-rose hover:underline">View all →</Link></div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {books.slice(0,2).map((book) => <div key={book.id} className="flex gap-3 rounded-md border border-gray-100 p-3 shadow-sm"><div className="flex h-28 w-20 shrink-0 items-center justify-center rounded-sm bg-[#f8f5f7]"><img src={book.image} alt={book.title} className="max-h-[90%] max-w-[85%] object-contain" onError={(e)=>{e.currentTarget.style.display="none"}}/></div><div className="min-w-0 flex-1 py-1"><p className="text-[8px] uppercase tracking-wider text-rose">{book.category}</p><h3 className="mt-1 text-xs font-bold text-ink">{book.title}</h3><p className="mt-1 text-[10px] text-muted">{book.author}</p><div className="mt-2 flex items-center gap-1 text-[9px] text-amber-500">★★★★★ <span className="text-muted">(124 reviews)</span></div><div className="mt-3 flex items-center justify-between gap-2"><span className="text-xs font-bold">${book.price.toFixed(2)}</span><Link to="/books" className="rounded-sm bg-rose px-3 py-2 text-[9px] font-semibold text-white hover:bg-pink-700">Add to Cart</Link></div></div></div>)}
        </div>
      </section>

      <section className="border-y border-gray-100 bg-[#fbf9fb] py-9 sm:py-11">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 flex items-center justify-between gap-4"><SectionTitle eyebrow="Don't miss out" title="Flash Sale" description="Special prices on selected reader favorites."/><div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full border border-rose text-center text-rose"><span className="text-[9px] font-bold">30:00:00</span><span className="text-[6px] uppercase">left</span></div></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {books.slice(0,2).map((book) => <div key={book.id} className="flex gap-3 rounded-md bg-plum p-3 text-white shadow-sm"><div className="flex h-28 w-20 shrink-0 items-center justify-center rounded-sm bg-white/10 p-2"><img src={book.image} alt={book.title} className="max-h-full max-w-full object-contain" onError={(e)=>{e.currentTarget.style.display="none"}}/></div><div className="min-w-0 flex-1 py-1"><span className="rounded-sm bg-rose px-1.5 py-1 text-[7px] font-bold uppercase">-20% sale</span><h3 className="mt-2 text-[11px] font-semibold">{book.title}</h3><p className="mt-1 text-[9px] text-white/50">{book.author}</p><div className="mt-2 text-xs font-bold">${(book.price*.8).toFixed(2)} <span className="ml-1 text-[9px] font-normal text-white/40 line-through">${book.price.toFixed(2)}</span></div><Link to="/books" className="mt-2 inline-flex items-center gap-1 rounded-sm bg-rose px-3 py-1.5 text-[8px] font-semibold hover:bg-pink-700">Shop Now <ArrowRight size={10}/></Link></div></div>)}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
