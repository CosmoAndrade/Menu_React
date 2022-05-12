import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <h1>Logo</h1>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
