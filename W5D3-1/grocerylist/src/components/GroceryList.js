import React from "react";
import GroceryListItem from "./GroceryListItem";

// Container for GroceryListItem, states items

class GroceryList extends React.Component {
  render() {
    return (
      <div className="GroceryList">
        <GroceryListItem />
      </div>
    );
  }
}

export default GroceryList;
