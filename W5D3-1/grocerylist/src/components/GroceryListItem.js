import React from "react";

// props worden hier "geïnitialiseerd", toegekend aan een const GroceryListItem

const GroceryListItem = props => {
  return <li>{props.title}</li>;
};

export default GroceryListItem;
