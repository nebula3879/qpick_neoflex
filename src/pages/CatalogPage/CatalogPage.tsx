import { useState } from "react";
import { headphones, wirelessHeadphones } from "../../data/headphones";
import type { Headphone } from "../../data/headphones";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/ProductModal/ProductModal";
import "./CatalogPage.css";

const CatalogPage = () => {
  const [selected, setSelected] = useState<Headphone | null>(null);

  return (
    <section>
      <h2 className="page-title">Наушники</h2>
      <div className="products-grid">
        {headphones.map((p) => (
          <ProductCard key={p.id} product={p} onOpenDetails={setSelected} />
        ))}
      </div>

      <h2 className="page-title page-title--section">Беспроводные наушники</h2>
      <div className="products-grid">
        {wirelessHeadphones.map((p) => (
          <ProductCard key={p.id} product={p} onOpenDetails={setSelected} />
        ))}
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default CatalogPage;