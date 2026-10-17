
import richDad from "../assets/images/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import designBook from "../assets/images/03e6a888f25ecc86e317e35c9f91c8c30c64b35e.jpg";


const saleBooks = [
  { image: richDad, title: "Rich Dad Poor Dad", price: "$30.00" },
  { image: designBook, title: "The Design of Books", price: "$40.00" },
];


function FlashSale() {
  return (
    <section className="flash-sale" id="sale">
      <div className="sale-heading">
        <div>
          <h2>Flash Sale</h2>
          <p>Special offers on selected books.</p>
        </div>

        <div className="discount-circle">20% OFF</div>
      </div>

      <div className="sale-list">
        {saleBooks.map((book) => (
          <article className="sale-card" key={book.title}>
            <img src={book.image} alt={book.title} />

            <div>
              <h3>{book.title}</h3>
              <div className="stars">★★★★★</div>
              <strong>{book.price}</strong>

              <div className="progress">
                <span />
              </div>

              <small>Sold: 68%</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FlashSale;
