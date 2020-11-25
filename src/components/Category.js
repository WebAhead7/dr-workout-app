import React from "react";

function Category(props) {
  const categoryStyle = {
    background: `url(${props.backgroundurl})`,
    backgroundSize: "100%",
    color: "white",
    fontSize: "24px",
    cursor: " pointer",
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
