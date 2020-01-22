import React from "react";
import SongListItem from "./SongsList";

class SongOverview extends React.Component {
  render() {
    const { SongListOptions } = this.props;
    const listItems = SongListOptions
      ? SongListOptions.map(addedsong => (
          <SongListItem
            key={addedsong.id}
            addedsong={addedsong}
            title={addedsong.title}
            author={addedsong.author}
            genre={addedsong.genre}
          />
        ))
      : " ";

    return (
      <React.Fragment>
        <ul>{listItems}</ul>
      </React.Fragment>
    );
  }
}

export default SongOverview;

/*
const SongsListItem = props => {
  return (
    <li className="list-item" key={props.id} value={props.title}>
      {props.title}
      {props.genre}
      {props.author}
      {props.rating}
    </li>
  );
};
*/

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
