
import libraryImage from "../assets/images/533643aa8db82414f48d43a992d009dda3961386.png";

const missionCards = [
  {
    title: "Quality Selection",
    description:
      "Discover a carefully selected collection of books for every reader.",
  },
  {
    title: "Exceptional Service",
    description:
      "We help you find your favorite books and enjoy a smooth shopping experience.",
  },
  {
    title: "Our Bookstore",
    description:
      "Explore books from different genres and find your next great read.",
  },
];

const features = [
  {
    icon: "♧",
    title: "Fast & Reliable Shipping",
    description:
      "Get your favorite books delivered safely and quickly to your doorstep.",
  },
  {
    icon: "▤",
    title: "Secure Payment",
    description:
      "Enjoy a simple and secure checkout experience with every purchase.",
  },
  {
    icon: "↻",
    title: "Easy Returns",
    description:
      "Shop with confidence with our easy and convenient return process.",
  },
  {
    icon: "☏",
    title: "24/7 Customer Support",
    description:
      "Our support team is always here to help with your questions.",
  },
];

export default function About() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for contacting Bookly!");
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative mx-4 mt-4 flex min-h-[350px] items-center justify-center overflow-hidden bg-cover bg-center px-6 py-16 text-center text-white sm:mx-6 md:mx-10"
        style={{
          backgroundImage: `url(${libraryImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-pink-300">
            Discover the world of books
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            About Bookshop
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-200">
            Discover your next favorite book and explore a world
            of knowledge, imagination, and inspiration.
          </p>

          <a
            href="#mission"
            className="mt-6 inline-block rounded bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Discover More
          </a>
        </div>
      </section>

      {/* Our Mission */}
      <section
        id="mission"
        className="mx-auto max-w-6xl px-5 py-14 sm:px-8"
      >
        <h2 className="mb-3 text-center text-2xl font-bold">
          Our Mission
        </h2>

        <p className="mx-auto mb-9 max-w-xl text-center text-sm leading-6 text-gray-500">
          We believe every book opens a new door to knowledge,
          creativity, and imagination.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {missionCards.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 h-1 w-12 rounded bg-pink-500" />

              <h3 className="mb-3 text-base font-bold">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                {item.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-block text-sm font-medium text-pink-600 transition hover:text-pink-800"
              >
                View More →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative mx-4 overflow-hidden bg-[#453b4e] text-white sm:mx-6 md:mx-10"
      >
        <div className="relative z-10 grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 md:px-14 md:py-16">
          {/* Contact Form */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pink-300">
              Contact Us
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Have a Question?
              <br />
              Get in Touch
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-300">
              Have a question about our books or services?
              Send us a message and we will be happy to help.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-300 focus:border-pink-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-300 focus:border-pink-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full resize-y rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-300 focus:border-pink-400"
              />

              <button
                type="submit"
                className="rounded bg-pink-600 px-6 py-3 text-sm font-semibold transition hover:bg-pink-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-7 md:pl-8 md:pt-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-pink-600 text-xl">
                ☎
              </span>

              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="mt-2 text-sm text-gray-300">
                  +1 234 567 8900
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-pink-600 text-xl">
                ✉
              </span>

              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="mt-2 break-all text-sm text-gray-300">
                  hello@bookly.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-pink-600 text-xl">
                ⌖
              </span>

              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Bookly Online Bookstore
                  <br />
                  Serving readers everywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="text-center sm:text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#453b4e]/10 text-2xl text-[#453b4e]">
              {feature.icon}
            </span>

            <h3 className="mt-4 text-sm font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              {feature.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
