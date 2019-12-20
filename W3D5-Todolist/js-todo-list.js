// keys, values, entries om een object op te splitsen object.keys(json).map
// .map pakt pakt een kopie van de keys

document.addEventListener("DOMContentLoaded", () => {
  getlistitems();
  setlist();
  addlistitem();
  addelistener();
  addelistenerdelete();
});

// ophalen

const getlistitems = async function() {
  const res = await fetch(
    `https://wincacademydatabase.firebaseio.com/rene/tasks.json`
  );
  const json = await res.json();
  const tasks = Object.keys(json).map(key => ({
    id: key,
    description: json[key].description,
    done: json[key].done
  }));
  return tasks;
};
getlistitems().then(tasks => {
  console.log(tasks);
});

getlistitems();

// in DOM zetten, eerst wachten op getlistitems() functie

const setlist = async () => {
  const listpoints = document.getElementById("listpoints");
  const data = await getlistitems();
  data.forEach(tasks => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `Added: ${tasks.description}, done:  ${tasks.done}`
    );
    li.appendChild(liContent);
    listpoints.appendChild(li);
  });
};

setlist();

// add button eventlistener

const addelistener = async function() {
  const buttonadd = document.getElementById("buttonadd");
  buttonadd.addEventListener("click", () => {
    const input = document.getElementById("js-todo-input");

    const taskitem = {
      description: `${input.value}`,
      done: false
    };
    addlistitem(taskitem);
  });
};

addelistener();

// adding to list

const addlistitem = async function(taskitem) {
  const add = `https://wincacademydatabase.firebaseio.com/rene/tasks.json`;
  const additem = taskitem;
  try {
    const added = await fetch(
      `https://wincacademydatabase.firebaseio.com/rene/tasks.json`,
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(additem),
        headers: { "Content-Type": "application/json" }
      }
    );
    const json = await added.json();
    console.log("Added", JSON.stringify(json));
    return json;
  } catch (error) {
    console.log("Error", error);
  }
};

addlistitem();

// delete button eventlistener

const addelistenerdelete = async function() {
  const buttondelete = document.getElementById("buttondelete");
  buttondelete.addEventListener("click", () => {
    const input = document.getElementById("listpoints");

    const taskitemdelete = {
      description: "",
      done: ""
    };
    addlistitem(taskitemdelete);
  });
};

addelistenerdelete();

// delete item from list

const listitem = async function(taskitem) {
  const deletelistitem =
    `https://wincacademydatabase.firebaseio.com/rene/tasks.json` + taskitem;
  const deleteitem = taskitem;
  try {
    const deletelistitem = await fetch(
      `https://wincacademydatabase.firebaseio.com/rene/tasks.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }
    );
    console.log("Delete");
  } catch (error) {
    console.log("Error", error);
  }
};
