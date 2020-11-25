import React from "react";

function Category(props) {
  const categoryStyle = {
    background: `url(${props.backgroundurl})`,
    "background-size": "100%",
    color: "white",
    "font-size": "24px",
  };
  return (
    <button
      style={categoryStyle}
      onClick={() => props.handleClicked(props.name)}
    >
      {props.name}
    </button>
  );
}

export default Category;
