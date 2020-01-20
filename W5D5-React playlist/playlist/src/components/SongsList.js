import React from "react";

// props worden hier "geïnitialiseerd", toegekend aan een const GroceryListItem

// daarna worden ze geretourneerd binnen een <li>, zoals aangegeven

// je kunt een key meegeven aan elk list item zodat React de volgorde van items kan bepalen

const SongsListItem = ({ clickSong, addedsong }) => {
  return (
    <div>
      <table>
        <li
          className="list-item"
          onClick={clickSong}
          key={addedsong.id}
          value={addedsong.title}
        >
          <span>{addedsong.title}</span>
        </li>

        <br />

        <li
          className="list-item"
          onClick={clickSong}
          key={addedsong.id}
          value={addedsong.author}
        >
          <span>{addedsong.author}</span>
        </li>
      </table>
    </div>
  );
};

export default SongsListItem;
