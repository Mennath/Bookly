import book1 from "../assets/images/0d3a1ade0d5cf7e267b48d4ad0b355bac73a3db0.jpg";
import book2 from "../assets/images/e7a63dace18f214af63005731d2c8a3964cc30ae.png";
import book3 from "../assets/images/6d9d091de0e9c20b618cba0b9f935885da4cdb82.jpg";
import book4 from "../assets/images/28aba63bdc086aa49f1169be9ff5208128b5a8af.jpg";
import book5 from "../assets/images/71cd2100a54a321ee4e0f9170a9485f8f2d1f3d2.jpg";
import book6 from "../assets/images/03e6a888f25ecc86e317e35c9f91c8c30c64b35e.jpg";

const books = [
  { image: book1, title: "Design of Everyday Things" },
  { image: book2, title: "Atomic Habits" },
  { image: book3, title: "The Art of Thinking" },
  { image: book4, title: "The Craft of Research" },
  { image: book5, title: "Design of Books" },
  { image: book6, title: "Thinking, Fast and Slow" },
];

function BestSellers() {
  return (
    <section
      className="bg-[#3B2F4A] px-4 py-16 sm:px-8 lg:px-16"
      id="books"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            Reader Favorites
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Best Sellers
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {books.map((book) => (
            <article
              key={book.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl sm:p-4"
            >
              <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl  sm:h-56 lg:h-64">
                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 line-clamp-2 min-h-12 text-sm font-bold leading-6 text-gray-800 transition group-hover:text-amber-700 sm:text-base">
                {book.title}
              </h3>

              <div className="mt-3 flex items-center gap-1 text-sm text-amber-500">
                <span>★★★★★</span>
                <span className="text-xs text-gray-400">(Popular)</span>
              </div>
            </article>
          ))}
        </div>

        {/* Shop Button */}
        <div className="mt-10 text-center">
          <a
            href="#recommended"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-200"
          >
            Shop Now
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;