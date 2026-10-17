
// import richDad from "../assets/images/rich-dad.jpg";
// import designBook from "../assets/images/design-book.jpg";
import richDad from "../assets/images/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import designBook from "../assets/images/03e6a888f25ecc86e317e35c9f91c8c30c64b35e.jpg";

const books = [
  {
    image: richDad,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: "$30.00",
  },
  {
    image: designBook,
    title: "The Design of Books",
    author: "Debbie Berne",
    price: "$40.00",
  },
];

function Recommended() {
  return (
    <section className="recommended" id="recommended">
      <h2>Recommended For You</h2>

      <div className="recommended-list">
        {books.map((book) => (
          <article className="product-card" key={book.title}>
            <img src={book.image} alt={book.title} />

            <div className="product-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>

              <div className="stars">★★★★★</div>

              <strong>{book.price}</strong>

              <button className="add-btn">
                Add to cart
              </button>
            </div>

            <button className="favorite-btn" aria-label="Add to favorites">
              ♡
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Recommended;
