import React from "react";

const ProgressBar = () => {
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        <button
          className={`${index === activeIndex ? "active__bar" : ""}`}
          onClick={() => {
            navigationHandler(index);
          }}
        >
          {index + 1}
        </button>;
      })}
    </div>
  );
};

export default ProgressBar;
