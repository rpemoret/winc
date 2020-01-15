import React from "react";

// you have to .map the object (const myList) because otherwise you get an error

const GroceryListItem = props => {
  myList.map(props => <li key={myList.id}></li>);
  return (
    <div className="GroceryList">
      <ul>
        <li>{props.title}</li>
        <li>{"Oranges"}</li>
        <li>{"Apples"}</li>
        <li>{"bgtefewf"}</li>
        <li>{"beowffewkweffwef"}</li>
        <li>{"dfefwgr"}</li>
      </ul>
    </div>
  );
};
console.log(GroceryListItem);

const myList = [
  { id: "1", title: "Oranges" },
  { id: "2", title: "Apples" },
  { id: "3", title: "bla" },
  { id: "4", title: "bla" }
];

export default GroceryListItem;

/*
function ListItems(props) {
  return <div className="GroceryList"></div>;
}
*/
