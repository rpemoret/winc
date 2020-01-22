import React from "react";
import SongOverview from "./SongOverview";
import InputField from "./songinputfield";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SongListInput: "",
      AuthorInput: "",
      SongListOptions: [
        {
          id: 1,
          title: "Oranges song",
          genre: "bla",
          author: "Fruitfly",
          rating: ""
        },
        { id: 2, title: "Apples song", genre: "", author: "", rating: "" },
        { id: 3, title: "", genre: "", author: "", rating: "" }
      ]
    };
  }

  render() {
    const addSong = SongTitle => {
      // verander de state hier
      const newSong = {
        id: this.state.SongList.length + 1,
        title: SongTitle
      };

      this.setState(prevState => {
        const newSongList = prevState.SongList.concat(newSong);
        return {
          SongList: newSongList
        };
      });
    };

    const addSongtoList = addedsong => {
      const addedsongtolist = {
        id: this.state.SongListOptions.length + 1,
        title: addedsong,
        author: addedsong,
        genre: addedsong
      };
      this.setState({
        SongListOptions: this.state.SongListOptions.concat(addedsongtolist)
      });
    };

    return (
      <div>
        <h3>------</h3>

        <InputField onSubmit={addSongtoList} />
        <SongOverview
          SongListOptions={this.state.SongListOptions}
          SongOverview={SongOverview}
        />

        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Container;

/*
    const handleClickSongTitle = event => {
      const clickedSong = event.target.getAttribute("value");
      const currentSongList = this.state.SongList;
      const newSongListItem = currentSongList.filter(
        addeditem => addeditem.title === clickedSong
      );

      newSongListItem.length === 0 ? addSong(clickedSong) : null;
    };
    */
