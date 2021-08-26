import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollMove = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
