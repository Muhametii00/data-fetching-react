


interface Props {
    title: string;
    thumbnail: string;
    description: string;
    price: number;
}
export const Product= (props: Props) => {
    return <div className="products-section" id="products-section">
    <div id="delete-item" className="products-section-item">
      <div className="products-section-item__thumb">
        <img src="./src/assets/images/1.png" alt="Item Thumbnail" />
      </div>
      <div className="products-section-item__content">
        <div className="products-section-item__headings">
          <h3 className="products-section-item__title">
          {props.title}
          </h3>
  
          <p className="products-section-item__description">
          {props.description}
          </p>
        </div>
  
        <span className="products-section-item__price">
          {props.price}€
        </span>
      </div>
    </div>
    </div>

}