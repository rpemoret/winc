/*const addmoviestodom = movies.map(function(mapmovie) {
  return mapmovie;
});
*/

// A --- get the "list" id with document.getElementById
// B --- create element "li" for Each item in the array with setmovies.forEach
// C --- create nodes inside the "li" elements with document.createTextNode with content from movie.Title
// D --- add the "li" items
// E --- add the content to the "li" items
// F --- same for images

const addMoviestoDOM = function(setmovies) {
  const list = document.getElementById("list");

  // - itereren is bij een array .forEach en niet een for loop

  setmovies.forEach(function(movie) {
    // - bijv. de .forEach of .map functie heeft als parameter een array

    let listItem = document.createElement("li");
    const contentOfListItem = document.createTextNode(movie.Title);
    // - als je tekst wil plaatsen moet je naast createElement ook createTextNode en append gebruiken, of .textContent = text

    list.appendChild(listItem);
    listItem.appendChild(contentOfListItem);

    // - add images
    let node = document.createElement("li");
    let imgnode = document.createElement("img");
    imgnode.src = movie.Poster;
    node.appendChild(imgnode);
    document.getElementById("list").appendChild(node);

    console.log(movie);
  });
};

addMoviestoDOM(movies);

const filterFunction = function() {
  const setfilter = document.getElementsByName("");

  filterbutton.addEventListener("change", function() {
    filterFunction();
  });

  document.addEventListener("DOMContentLoaded", event => {
    addMoviestoDOM();
  });
};

// - de DOM moet eerst leeggemaakt worden voordat je er iets anders in zet
// - niet .forEach en .map tegelijk gebruiken
// - als je tekst wil plaatsen moet je naast createElement ook createTextNode en append gebruiken, of .textContent = text
