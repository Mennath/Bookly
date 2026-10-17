
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
    <section className="best-sellers" id="books">
      <div className="section-title">
        <h2>Best Seller</h2>
        <p>Discover our most popular books.</p>
      </div>

      <div className="book-list">
        {books.map((book) => (
          <article className="best-book" key={book.title}>
            <img src={book.image} alt={book.title} />
          </article>
        ))}
      </div>

      <a href="#recommended" className="shop-btn">
        Shop now
      </a>
    </section>
  );
}

export default BestSellers;
