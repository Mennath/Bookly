import richDad from "../assets/images/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import designBook from "../assets/images/03e6a888f25ecc86e317e35c9f91c8c30c64b35e.jpg";

const saleBooks = [
  { image: richDad, title: "Rich Dad Poor Dad", price: "$30.00" },
  { image: designBook, title: "The Design of Books", price: "$40.00" },
];

function FlashSale() {
  return (
    <section
      className="bg-gray-50 px-4 py-16 sm:px-8 lg:px-16"
      id="sale"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
              Limited Time Offer
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Flash Sale
            </h2>

            <p className="mt-3 text-gray-500">
              Special offers on selected books. Don't miss out!
            </p>
          </div>

          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-200 transition-transform duration-300 hover:scale-110">
            <span className="text-2xl font-extrabold">20%</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              OFF
            </span>
          </div>
        </div>

        {/* Sale Books */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {saleBooks.map((book) => (
            <article
              key={book.title}
              className="group flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl sm:flex-row sm:items-center sm:p-6"
            >
              {/* Book Image */}
              <div className="relative flex h-56 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-4 sm:h-60 sm:w-44">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                  -20%
                </span>

                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Book Details */}
              <div className="flex flex-1 flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  Special Offer
                </span>

                <h3 className="mt-2 text-xl font-bold leading-7 text-gray-900 transition-colors group-hover:text-amber-700">
                  {book.title}
                </h3>

                <div
                  className="mt-3 text-lg tracking-widest text-amber-500"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <strong className="text-2xl font-extrabold text-gray-900">
                    {book.price}
                  </strong>

                  <span className="text-sm text-gray-400 line-through">
                    {book.price === "$30.00" ? "$37.50" : "$50.00"}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-500">Stock sold</span>
                    <span className="font-bold text-red-600">68%</span>
                  </div>

                  <div
                    className="h-2.5 overflow-hidden rounded-full bg-gray-100"
                    role="progressbar"
                    aria-label="Stock sold"
                    aria-valuenow={68}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-amber-400 to-red-500 transition-all duration-700 group-hover:w-[75%]" />
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Selling fast — grab your copy!
                  </p>
                </div>

                <a
                  href="/books"
                  className="mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-200"
                >
                  Shop Now <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlashSale;