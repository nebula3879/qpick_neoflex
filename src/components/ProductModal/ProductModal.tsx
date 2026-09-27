import type { Headphone } from "../../data/headphones";
import { useCart } from "../../context/CartContext";

interface Props {
  product: Headphone;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  const { addItem } = useCart();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={product.img} alt={product.title} className="modal__img" />
        <h3>{product.title}</h3>
        <p>Рейтинг: ★ {product.rate}</p>
        <p className="modal__total">Цена: {product.price} ₽</p>
        <button
          style={{
            marginTop: 16,
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: 10,
            cursor: "pointer",
            width: "100%",
          }}
          onClick={() => {
            addItem(product);
            onClose();
          }}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductModal;