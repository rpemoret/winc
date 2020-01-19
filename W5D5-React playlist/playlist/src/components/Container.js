import React from "react";
import SongOverview from "./SongOverview";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SongListOptions: [
        { id: 1, title: "Oranges song", genre: "", author: "" },
        { id: 2, title: "Apples song", genre: "", author: "" },
        { id: 3, title: "", genre: "", author: "" }
      ],
      SongList: [{ id: 1, title: "Another song", genre: "", author: "" }]
    };
  }

  render() {
    addSong = SongTitle => {
      // verander de state hier
      const newSong = {
        id: this.state.SongList.length + 1,
        title: SongTitle,
        genre: SongGenre,
        author: SongAuthor
      };

      this.setState(prevState => {
        const newSongList = prevState.SongList.concat(newSong);
        return {
          SongList: newSongList
        };
      });
    };

    return (
      <div className="GroceryList">
        <SongsList title="Songs" />
      </div>
    );
  }
}

export default Container;
