export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src="/11.jpeg" alt="RI7A.LUX Logo" className="logo-img" />
        <div className="logo-text">RI7A.LUX</div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À Propos</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="login-btn">Connexion</button></li>
      </ul>
    </nav>
  );
}