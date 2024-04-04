import { BsFillBagFill } from "react-icons/bs";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../contex/UserContext";

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedProduct, setEditedProduct] = React.useState({
    id,
    img,
    title,
    star,
    reviews,
    prevPrice,
    newPrice,
  });

  const { user } = useContext(UserContext);
    let isShow = user.role === "admin" ? true : false; 

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${title}?`);
    if (confirmDelete) {
      setIsVisible(false);
      alert(`Product ${title} has been deleted.`);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e, field) => {
    setEditedProduct({
      ...editedProduct,
      [field]: e.target.value,
    });
  };

  const handleSaveEdit = () => {
    alert(`Product ${editedProduct.title} has been edited.`);
    setIsEditing(false);
    
  };

  return (
    <>
      {isVisible && (
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedProduct.title}
                  onChange={(e) => handleInputChange(e, "title")}
                />
                {/* Render additional input fields for other product details if needed */}
              </>
            ) : (
              <h3 className="card-title">{title}</h3>
            )}
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
              <div className="spacing={2}" style={{ display: isShow ? "flex" : "none" }}>
                <Stack direction="row">
                  {isEditing ? (
                    <Button variant="outlined" onClick={handleSaveEdit}>
                      Save
                    </Button>
                  ) : (
                    <Button variant="outlined" onClick={handleEdit}>
                      Edit
                    </Button>
                  )}
                  <Button variant="outlined" onClick={handleDelete}>
                    Delete
                  </Button>
                </Stack>
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Card;
