import PropTypes from "prop-types";

const MyList = ({ data, title }) => {
  return (
    <>
      {title !== undefined ? <h1>My List</h1> : null}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

//add proptypes for data prop
MyList.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default MyList;
