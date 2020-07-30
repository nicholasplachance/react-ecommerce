import React from "react";
import Directory from "../components/directory/directory.component";
import "./homepage.styles.scss";

//HomePage is a functional component because we do not need access to any life cycle methods or storing state

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

// Export default since this is the only thing we will need to export

export default HomePage;
