import { useState } from "react";
import { useCart } from "../../context/CartContext";

interface Props {
  total: number;
  count: number;
  onClose: () => void;
}

const CheckoutModal = ({ total, count, onClose }: Props) => {
  const { items } = useCart();
  const [paid, setPaid] = useState(false);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {paid ? (
          <div style={{ textAlign: "center" }}>
            <h3>Оплата прошла успешно!</h3>
            <p style={{ marginTop: 12 }}>Спасибо за заказ на сумму {total} ₽</p>
            <button
              style={{
                marginTop: 16,
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: 10,
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3>Оформление заказа</h3>
            <p>Товаров: {count}</p>
            <ul className="modal__list">
              {items.map((i) => (
                <li key={i.id}>
                  {i.title} × {i.quantity} = {i.price * i.quantity} ₽
                </li>
              ))}
            </ul>
            <p className="modal__total">Итого: {total} ₽</p>
            <form
              className="modal__form"
              onSubmit={(e) => {
                e.preventDefault();
                setPaid(true);
              }}
            >
              <input type="text" placeholder="Имя" required />
              <input type="tel" placeholder="Телефон" required />
              <input type="text" placeholder="Адрес доставки" required />
              <button type="submit">Оплатить</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;