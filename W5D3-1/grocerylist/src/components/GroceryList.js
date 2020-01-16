import React from "react";
import GroceryListItem from "./GroceryListItem";

// Container for GroceryListItem, states items
// Na het JSX element, de const GroceryListItem komen de attributes ervan zoals title
// props are basically attributes

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GroceryItems: [
        <GroceryListItem title="Oranges" />,
        <GroceryListItem title="Apples" />
      ]
    };
  }

  additem = GroceryItems => {
    // verander de state hier
  };

  render(props) {
    return (
      <div className="GroceryList">
        <GroceryListItem title="Oranges" />
        <GroceryListItem title="Apples" />
      </div>
    );
  }
}

export default GroceryList;

// you have to .map the object (const myList) because otherwise you get an error
