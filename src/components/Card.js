import { useContext } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { UserContext } from "../contex/UserContext";

const Card = ({ img, title, star, reviews, prevPrice, newPrice,isShow }) => {
 
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
            <div>
              <button className="bag-btn" hidden={isShow}>Edit</button>
              <button className="bag-btn" hidden={isShow}>Delete</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
