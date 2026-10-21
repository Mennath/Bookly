import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import libraryImage from "../assets/images/533643aa8db82414f48d43a992d009dda3961386.png";

function Hero() {
  const [search, setSearch] = useState("");
 

 function handleSearch(event) {
  event.preventDefault();

  const query = search.trim();

  const target = query
    ? `/books?search=${encodeURIComponent(query)}`
    : "/books";

  window.location.href = target;
}

  return (
   <section
  id="home"
  className="relative isolate overflow-hidden bg-cover bg-center px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
  style={{
    backgroundImage: `url(${libraryImage})`,
  }}
>
  {/* طبقة شفافة فوق الصورة لتوضيح الكلام */}
  <div className="absolute inset-0 -z-10 bg-black/55" />

  {/* باقي كود الـ Hero بتاعك يفضل زي ما هو */}
      {/* Background Decorations */}
     
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
         

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your
            <br />
            Next{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Favorite Book
            </span>
          </h1>

         
          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mx-auto mt-9 flex max-w-2xl items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-amber-900/5 transition focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-100 sm:rounded-full sm:p-2.5"
          >
            <span
              aria-hidden="true"
              className="pl-3 text-xl text-gray-400 sm:pl-4"
            >
              🔍
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for books..."
              aria-label="Search for books"
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
            />

            <button
              type="submit"
              className="shrink-0 rounded-xl bg-amber-600 px-5 py-3 font-bold text-white transition duration-300 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-200 sm:rounded-full sm:px-8"
            >
              Search
            </button>
          </form>

         
        </div>
      </div>
    </section>
  );
}

export default Hero;