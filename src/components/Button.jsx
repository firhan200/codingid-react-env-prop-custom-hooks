import PropTypes from "prop-types";

function Button({ label, color }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
