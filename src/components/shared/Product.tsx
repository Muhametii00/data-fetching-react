import { Product as ProductType } from "../../Products";

interface Props {
  product: ProductType;
  onRemove: (id: number) => void;
}
export const Product = ({ product, onRemove }: Props) => {
  return (
    <div className="products-section" id="products-section">
      <div className="products-section-item">
        <div className="products-section-item__thumb">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="products-section-item__content">
          <div className="products-section-item__headings">
            <h3 className="products-section-item__title">{product.title}</h3>

            <p className="products-section-item__description">
              {product.description}
            </p>
          </div>

          <span className="products-section-item__price">{product.price}€</span>

          <div
            className="products-section-item__remove"
            onClick={() => onRemove(product.id)}
          >
            <img src="./src/assets/icons/exit.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
