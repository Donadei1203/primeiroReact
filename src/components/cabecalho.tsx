import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <h1>Tecnologias S.A.</h1>
      </div>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
