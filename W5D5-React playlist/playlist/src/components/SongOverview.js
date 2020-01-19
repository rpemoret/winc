import React from "react";
import SongsList from "./SongsList";

class SongOverview extends React.Component {
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
      <div className="SongList">
        <SongsList title="Songs" />
      </div>
    );
  }
}

/*
class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: []
    };
  }

  addSong = song => {
    // doe iets om de state aan te passen
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table style="width:100%">
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}
*/

export default SongOverview;
