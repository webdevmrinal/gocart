import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
    console.log(categories)
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.data.map((item) => (
          <div className="category" key={item.id}>
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
