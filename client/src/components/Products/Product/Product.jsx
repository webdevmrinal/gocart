import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = ({id, data}) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
      </div>
      <div className="product-details">
        <span className="name">Product Name</span>
        <span className="price">&#8377;499</span>
      </div>
    </div>
  );
};

export default Product;
