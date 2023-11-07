import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Child({ onCategoryChange }) {
  const [categoryId, setCategory] = useState(null);

  useEffect(() => {
    // wait 1 sec to get details
    setTimeout(() => {
      setCategory(1);
    }, 2000);
  }, []);

  // ketika categoryId berubah maka...
  useEffect(() => {
    onCategoryChange(categoryId);
  }, [onCategoryChange, categoryId]);

  return <div></div>;
}
