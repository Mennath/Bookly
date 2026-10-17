
function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <span className="logo-icon">▣</span>
        Bookly
      </a>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#sale">About Us</a>
      </nav>

      <div className="header-buttons">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
