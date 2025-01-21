import { useEffect, useState } from "react";

const useDimesion = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const updateDimension = () => {
    innerHeight = window.innerHeight;
    innerWidth = window.innerWidth;

    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
  };

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return dimension;
};

export default useDimesion;
