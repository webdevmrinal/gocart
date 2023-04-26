import "./SingleProduct.scss";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
import { useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product?.img?.data?.[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product?.title}</span>
            <span className="price">&#8377;{product?.price}</span>
            <span className="desc">{product?.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span
                  onClick={() => {
                    quantity <= 0 ? setQuantity(0) : setQuantity(quantity - 1);
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span onClick={() => setQuantity(quantity + 1)}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category :
                <span>{" " + product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share :
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={product.categories.data[0].id}/>
      </div>
    </div>
  );
};

export default SingleProduct;
