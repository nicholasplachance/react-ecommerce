import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";
// Functional component - to start

// destructor props to grab just the values needed, and to create cleaner code

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

// export default due to it being the only thing exported
// wrapping export in 'withRouter' it will return us back a component with access to 'history, match, and location' props

export default withRouter(MenuItem);
