import { useHover } from "@uidotdev/usehooks";
import PropTypes from "prop-types";

const ProductImage = ({ image }) => {
  const [ref, isHovering] = useHover();

  return (
    <div className="product-image">
      {isHovering ? "Hovered" : null}
      <br />
      <img ref={ref} src={image} alt="product" />
    </div>
  );
};

//proptypes validation
ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductImage;
