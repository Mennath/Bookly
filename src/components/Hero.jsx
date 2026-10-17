
function Hero() {
  return (
    <div className="hero-content">
      <h1>
        Discover Your
        <br />
        Next Favorite Book
      </h1>

      <p>
        Find your next great read and explore
        a world full of stories.
      </p>

      <form className="search-box">
        <input
          type="search"
          placeholder="Search for books..."
        />

        <button type="submit" aria-label="Search">
          🔍
        </button>
      </form>
    </div>
  );
}

export default Hero;
