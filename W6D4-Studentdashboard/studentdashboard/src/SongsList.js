import React from "react";

// props worden hier "geïnitialiseerd", toegekend aan een const GroceryListItem

// daarna worden ze geretourneerd binnen een <li>, zoals aangegeven

// je kunt een key meegeven aan elk list item zodat React de volgorde van items kan bepalen

const SongsListItem = ({ clickSong, addedsong }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>

          <tr>
            <br />
            <br />
            <br />
            <li
              className="list-item"
              onClick={clickSong}
              key={addedsong.id}
              value={addedsong.title}
            >
              {addedsong.title}
            </li>
          </tr>
          <th>Genre</th>
          <tr>
            <br />
            <br />
            <br />
            <li
              className="list-item"
              onClick={clickSong}
              key={addedsong.id}
              value={addedsong.author}
            >
              {addedsong.author}
            </li>

            <br />
          </tr>
          <th>Project</th>
          <th>Rating</th>
        </tr>

        <br />
      </table>
    </div>
  );
};

export default SongsListItem;
