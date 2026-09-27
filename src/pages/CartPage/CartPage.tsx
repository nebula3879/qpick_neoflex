import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import "./CartPage.css";

const CartPage = () => {
  const { items, changeQuantity, removeItem, totalPrice, totalCount } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section>
      <div className="cart-header">
        <h2 className="page-title">Корзина</h2>
        <Link to="/" className="cart-header__back">← Вернуться к покупкам</Link>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.length === 0 && <p className="cart-empty">Корзина пуста</p>}
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item__img" />
              <div className="cart-item__info">
                <h4>{item.title}</h4>
                <p className="cart-item__price">{item.price} ₽</p>
                <div className="cart-item__qty">
                  <button onClick={() => changeQuantity(item.id, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <div className="cart-item__right">
                <button
                  className="cart-item__remove"
                  onClick={() => removeItem(item.id)}
                  aria-label="Удалить"
                >
                  🗑
                </button>
                <p className="cart-item__total">{item.price * item.quantity} ₽</p>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <aside className="cart-summary">
            <div className="cart-summary__row">
              <span>ИТОГО</span>
              <span>{totalPrice} ₽</span>
            </div>
            <button
              className="cart-summary__checkout"
              onClick={() => setCheckoutOpen(true)}
            >
              Перейти к оформлению
            </button>
          </aside>
        )}
      </div>

      {checkoutOpen && (
        <CheckoutModal
          total={totalPrice}
          count={totalCount}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </section>
  );
};

export default CartPage;