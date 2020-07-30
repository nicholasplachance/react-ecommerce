import React from "react";
import "./menu-item.styles.scss";
// Functional component - to start

// destructor props to grab just the values needed, and to create cleaner code

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// export defaul due to it being the only thing exported

export default MenuItem;
