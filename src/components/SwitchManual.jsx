import { useState } from "react";

const SwitchManual = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <label htmlFor="switch">
        <input type="checkbox" checked={isToggle} onChange={toggle} />
        <div className="slider round"></div>
      </label>
      {isToggle ? "Nyala" : "Mati"}
    </div>
  );
};

export default SwitchManual;
