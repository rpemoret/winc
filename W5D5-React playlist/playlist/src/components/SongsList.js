import React from "react";

// props worden hier "geïnitialiseerd", toegekend aan een const GroceryListItem

// daarna worden ze geretourneerd binnen een <li>, zoals aangegeven

// je kunt een key meegeven aan elk list item zodat React de volgorde van items kan bepalen

const SongsListItem = ({ clickSong, addedsong }) => {
  return (
    <table>
      <tr>
        <th></th>

        <tr>
          <br />
          <br />
          <br />
          <td
            className="list-item"
            onClick={clickSong}
            key={addedsong.id}
            value={addedsong.title}
          >
            {addedsong.title}
          </td>
        </tr>
        <th></th>
        <tr>
          <br />
          <br />
          <br />
          <td
            className="list-item"
            onClick={clickSong}
            key={addedsong.id}
            value={addedsong.author}
          >
            {addedsong.author}
          </td>

          <br />
        </tr>
        <th></th>
        <tr>
          <br />
          <br />
          <br />
          <td
            className="list-item"
            onClick={clickSong}
            key={addedsong.id}
            value={addedsong.genre}
          >
            {addedsong.genre}
          </td>

          <br />
        </tr>
        <th></th>
        <tr>
          <br />
          <br />
          <br />
          <td
            className="list-item"
            onClick={clickSong}
            key={addedsong.id}
            value={addedsong.rating}
          >
            {addedsong.rating}
          </td>

          <br />
        </tr>
      </tr>

      <br />
    </table>
  );
};

export default SongsListItem;
