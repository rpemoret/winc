import React from "react";

// props worden hier "geïnitialiseerd", toegekend aan een const GroceryListItem

// daarna worden ze geretourneerd binnen een <li>, zoals aangegeven

// je kunt een key meegeven aan elk list item zodat React de volgorde van items kan bepalen

const GroceryListItem = props => {
  return (
    <li className="list-item" key={props.id} value={props.title}>
      {props.title}
    </li>
  );
};

export default GroceryListItem;
