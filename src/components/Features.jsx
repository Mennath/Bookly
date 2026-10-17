
const features = [
  {
    icon: "♧",
    title: "Fast & Reliable Shipping",
    text: "Fast delivery for all your favorite books.",
  },
  {
    icon: "▣",
    title: "Secure Payment",
    text: "Safe and secure payment options.",
  },
  {
    icon: "↻",
    title: "Easy Returns",
    text: "Easy returns and a simple process.",
  },
  {
    icon: "☏",
    title: "24/7 Customer Support",
    text: "We are always here to help you.",
  },
];

function Features() {
  return (
    <section className="features">
      {features.map((feature) => (
        <article className="feature" key={feature.title}>
          <span className="feature-icon">
            {feature.icon}
          </span>

          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  );
}

export default Features;
