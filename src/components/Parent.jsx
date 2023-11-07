import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [categoryId, setCategory] = useState(null);

  return (
    <>
      <h1>{categoryId}</h1>
      {/* callback */}
      <Child
        onCategoryChange={
          (categoryId) /* value ini dari child */ => setCategory(categoryId)
        }
      />
    </>
  );
}
