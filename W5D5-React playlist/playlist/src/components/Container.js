import React from "react";
import SongOverview from "./SongOverview";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GroceryItems: [
        { id: 1, title: "Oranges song" },
        { id: 2, title: "Apples song" },
        { id: 3, title: "" }
      ]
    };
  }

  addSong = SongTitle => {
    // verander de state hier
  };

  render() {
    return (
      <div className="GroceryList">
        <SongsList title="Songs" />
      </div>
    );
  }
}

export default Container;
