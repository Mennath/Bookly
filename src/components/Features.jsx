const features = [
  {
    icon: "♧ ",
    title: "Fast & Reliable Shipping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  },
  {
    icon: "▣  \u2669",
    title: "Secure Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  },
  {
    icon: "↻",
    title: "Easy Returns",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  },
  {
    icon: "☏",
    title: "24/7 Customer Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  },
];

function Features() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-6  shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:bg-white hover:shadow-xl sm:p-7"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-700 transition-all duration-300 group-hover:rotate-3 group-hover:bg-amber-600 group-hover:text-white">
              {feature.icon}
            </div>

            <h3 className="text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-amber-700">
              {feature.title}
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              {feature.text}
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-20" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;