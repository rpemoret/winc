import React from "react";
import SongOverview from "./SongOverview";
import InputField from "./songinputfield";

// you can create a component that can be rendered to the DOM as a class component or a functional component

class Container extends React.Component {
  // in the constructor segment the props are defined, mostly objects within arrays

  // in the constructor segment the state is also set. If a component has a state, then it has an object that can change.

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
    console.log(this.state);
  }

  // in the render segment you can use functions to provide options like adding and filtering

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

    /* You cannot mutate the state directly, so you have to use
     a copy of the state like const list = [...this.state.SongListOptions] 
     and then 
     
     const newlist = .map over that const. 
     
     Then you can add items within the .map function, and return 
     the const list
     
     After that this.setState({SongListOptions : newlist})

     --------------------------------------------------------------------

     You can use .concat to return a new array that consists of
     multiple previously defined arrays. So you don't mutate the state
     directly again. */

    const addSongtoList = (title, author, genre) => {
      const addedsongtolist = {
        id: this.state.SongListOptions.length + 1,
        title: title,
        author: author,
        genre: genre
      };
      this.setState({
        SongListOptions: this.state.SongListOptions.concat(addedsongtolist)
      });
      console.log(title, author, genre, this.state.SongListOptions);
    };

    // in the return segment all of the previously defined components and some html are defined

    return (
      <div>
        <br></br>

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
