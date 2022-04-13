import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import "./carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigationHandler = (index) => {
    if (index < 0) {
      index = React.Children.count(children) - 1;
    } else if (index >= React.Children.count(children)) {
      index = 0;
    }

    setCurrentIndex(index);
  };

  const totalItems = React.Children.count(children);

  return (
    <div className="carousel">
      <div
        className="carousel__items__container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="navigation" style={{ transition: "translateX(-0%)" }}>
        <a href="one">
          <MdHome className="btn" />
        </a>
        <MdOutlineChevronLeft
          className="btn"
          onClick={() => navigationHandler(currentIndex - 1)}
        />
        <p onClick={(index) => navigationHandler(index)}>
          {currentIndex + 1} of {totalItems}
        </p>
        <MdOutlineChevronRight
          className="btn"
          onClick={() => navigationHandler(currentIndex + 1)}
        />
      </div>
    </div>
  );
};

export default Carousel;
