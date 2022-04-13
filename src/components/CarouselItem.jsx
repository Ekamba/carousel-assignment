import React from "react";

const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel__item" style={{ width: width }}>
      {children}
    </div>
  );
};

export default CarouselItem;
