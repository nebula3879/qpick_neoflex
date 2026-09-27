import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { totalCount } = useCart();

  return (
    <header className="header">
      <Link to="/" className="header__logo">QPICK</Link>
      <div className="header__icons">
        <button className="header__icon" aria-label="Избранное">
          ♡
          <span className="header__badge">2</span>
        </button>
        <Link to="/cart" className="header__icon" aria-label="Корзина">
          🛒
          {totalCount > 0 && <span className="header__badge">{totalCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;