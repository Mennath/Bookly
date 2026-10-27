import { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import { books, categories } from "../data/books";

export default function Books() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const filteredBooks = useMemo(() => {
    let result = books.filter((book) => {
      const matchesSearch = `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || book.category === category;
      return matchesSearch && matchesCategory;
    });
    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "name") result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    return result;
  }, [search, category, sort]);

  return (
    <>
      <section className="relative bg-plum">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80')" }} />
        <Navbar />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-36 text-white lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-pink-300">Your next chapter starts here</p>
          <h1 className="mt-3 text-4xl font-bold">Explore Our Books</h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">Browse our collection and find something wonderful to read.</p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-soft md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-lg bg-gray-50 px-3"><Search size={18} className="text-muted" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by title, author, or category..." className="w-full bg-transparent py-3 text-sm outline-none" /></div>
          <div className="flex items-center gap-2 text-muted"><SlidersHorizontal size={16} /><span className="text-xs">Category</span></div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:border-rose">{categories.map((item) => <option key={item}>{item}</option>)}</select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort books" className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none focus:border-rose"><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="name">Name A–Z</option></select>
        </div>
        <div className="mb-5 mt-8 flex items-center justify-between"><p className="text-sm text-muted"><span className="font-semibold text-ink">{filteredBooks.length}</span> books found</p><button onClick={() => { setSearch(""); setCategory("All"); setSort("featured"); }} className="text-xs font-semibold text-rose hover:underline">Clear filters</button></div>
        {filteredBooks.length ? <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">{filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}</div> : <div className="rounded-xl bg-gray-50 px-6 py-16 text-center"><h2 className="font-semibold text-ink">No books found</h2><p className="mt-2 text-sm text-muted">Try a different search or category.</p></div>}
      </main>
      <Footer />
    </>
  );
}
