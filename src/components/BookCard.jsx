import { Heart, ShoppingCart, Star } from "lucide-react";

export default function BookCard({ book, dark = false, compact = false }) {
  return (
    <article className={`group min-w-0 rounded-md border p-2.5 transition hover:-translate-y-1 hover:shadow-soft ${dark ? "border-white/10 bg-white/5 text-white" : "border-gray-100 bg-white text-ink"}`}>
      <div className={`relative flex ${compact ? "h-28" : "h-36"} items-center justify-center overflow-hidden rounded-sm ${dark ? "bg-white/5" : "bg-[#f8f5f7]"}`}>
        {book.badge && <span className="absolute left-1.5 top-1.5 z-10 rounded-sm bg-rose px-1.5 py-1 text-[8px] font-semibold text-white">{book.badge}</span>}
        <button aria-label="Add to favorites" className="absolute right-1.5 top-1.5 z-10 rounded-full bg-white/95 p-1 text-plum shadow-sm transition hover:text-rose"><Heart size={11}/></button>
        <img src={book.image} alt={book.title} loading="lazy" className="h-[85%] max-w-[76%] object-contain drop-shadow-md transition duration-300 group-hover:scale-105" onError={(event) => { event.currentTarget.style.display = "none"; }} />
        <span className="pointer-events-none absolute bottom-1 left-1 right-1 text-center text-[9px] font-semibold">{book.title}</span>
      </div>
      <div className="px-0.5 pt-2">
        <div className="flex items-center justify-between gap-1">
          <span className={`truncate text-[8px] uppercase tracking-wide ${dark ? "text-white/45" : "text-muted"}`}>{book.category}</span>
          <span className="flex shrink-0 items-center gap-0.5 text-[8px] text-amber-500"><Star size={9} fill="currentColor"/>4.8</span>
        </div>
        <h3 className="mt-1 truncate text-[10px] font-semibold">{book.title}</h3>
        <p className={`mt-0.5 truncate text-[9px] ${dark ? "text-white/50" : "text-muted"}`}>{book.author}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] font-bold">${book.price.toFixed(2)}</span>
          <button aria-label={`Add ${book.title} to cart`} className="rounded-sm bg-rose p-1.5 text-white transition hover:bg-pink-700"><ShoppingCart size={11}/></button>
        </div>
      </div>
    </article>
  );
}
