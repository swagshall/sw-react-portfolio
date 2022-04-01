import "./ProductList.css";
import Product from "./Product";
import { products } from "../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work</h1>
        <p className="pl-desc">
          Here is some samples of my previous work. Feel free to use and visit my other sites. 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;