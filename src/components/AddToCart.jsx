import PropTypes from "prop-types";

const AddToCart = ({ productId }) => {
  // call to backend to add to cart pass productId
  const handleAddToCart = () => {
    fetch(`http://localhost:3000/api/cart/${productId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return <button onClick={handleAddToCart}>Add To Cart</button>;
};

AddToCart.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default AddToCart;
