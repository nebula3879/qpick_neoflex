import type { Headphone } from "../../data/headphones";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

interface Props {
  product: Headphone;
  onOpenDetails: (p: Headphone) => void;
}

const ProductCard = ({ product, onOpenDetails }: Props) => {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} className="product-card__img" />
      <div className="product-card__info">
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__bottom">
          <span className="product-card__rate">★ {product.rate}</span>
          <span className="product-card__price">{product.price} ₽</span>
        </div>
        <div className="product-card__actions">
          <button className="product-card__buy" onClick={() => addItem(product)}>
            Купить
          </button>
          <button
            className="product-card__view"
            onClick={() => onOpenDetails(product)}
            aria-label="Подробнее"
          >
            👁
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;