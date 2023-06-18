import React, { useState } from "react";
import './scrollToTopArrow.css'

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`scroll-to-top-arrow ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default ScrollToTopArrow;
