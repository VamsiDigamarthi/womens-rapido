import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return null;
}
