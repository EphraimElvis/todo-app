//global gapi, $
import { doc } from "prettier";
import "./styles.css";
//Google API keys
// const apiKey = "AIzaSyBe3rR8naqNYcWIXmvzEowLYd7HFWILZKQ";
// //Discovery Docs
// const discoveryDocs = [
//   "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
// ];
// //client Id
// const clientId =
//   "1006320060318-92d4obifbh5ju9c6vpeq93mlavcdns13.apps.googleusercontent.com";
// const scopes = "https://www.googleapis.com/auth/drive";
// let GoogleAuth;

// const authorizeButton = document.getElementById("authorize-button");
// const signoutButton = document.getElementById("signout-button");

const newTodo = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const fragment = document.createDocumentFragment();
//const editEle = document.querySelector("input");
//const showEl = document.querySelector(".edit");
const saveTodos = document.querySelector(".save-todos");
const showFooterLinks = document.querySelector(".filter");
const btnLinks = document.querySelectorAll(".filter li a");
const clearBtn = document.querySelector(".clear-Completed");
const completedBtn = document.querySelector('a[href="#/completed"]');
const activeBtn = document.querySelector('a[href="#/active"]');
const allBtn = document.querySelector('a[href="#/"]');
let getSelectedLink = "#/";
//let clickCount = 0;
//let prevId = 0;
showFooterLinks.style.display = "none";
//inputEle.style.display = 'none';

//google sign in buttons

const state = {
  id: -1,
  listId: -1,
  index: -1,
  prevId: 0,
  todoList: [],
  completed: [],
  allTodoList: [],
  ENTER_KEY: "Enter",
  activeBtn: false,
  completedBtn: false,
};

//create todo
function addTodo(todoVal) {
  //update state id's
  state.listId += 1;
  state.id += 1;
  state.index += 1;
  state.todoList.push({ id: state.listId, name: todoVal });
  state.allTodoList.push({ id: state.listId, name: todoVal });
  const listItem = document.createElement("li");
  const crossTodoItem = document.createElement("input");
  const checkBox = document.createElement("span");
  const editEle = document.createElement("input");
  const todoLabel = document.createElement("label");
  const view = document.createElement("div");
  editEle.style.display = "none";
  view.classList.add("view");
  crossTodoItem.classList.add("toggle");
  checkBox.classList.add("toggle");
  listItem.dataset.listItemId = state.index;
  todoLabel.textContent = todoVal;
  editEle.value = todoVal;
  todoLabel.style.display = "inline-block";
  crossTodoItem.setAttribute("type", "checkbox");

  todoLabel.addEventListener("dblclick", (e) => {
    //get list item id
    ////let currentId = Number(listItem.dataset.listItemId);

    // clickCount += 1;
    // if (clickCount == 1) {
    //   prevId = currentId;
    // }

    //get all edit input
    //const allEditInput = document.querySelectorAll('input[class="edit"]');

    //disable previous list edit
    // if (clickCount > 1) {
    //   for (let i = 0; i < allEditInput.length; i++) {
    //     if (prevId) {
    //       console.log("all edit ", allEditInput[i]);
    //       allEditInput[
    //         i
    //       ].parentElement.firstElementChild.lastChild.setAttribute(
    //         "style",
    //         "display: inline-block"
    //       );
    //       allEditInput[i].setAttribute("style", "display: none");
    //       allEditInput[i].classList.remove("edit");
    //       allEditInput[i].parentElement.classList.remove("editing");
    //       allEditInput[i].parentElement.removeAttribute("style");
    //       allEditInput[
    //         i
    //       ].parentElement.firstElementChild.lastChild.removeAttribute("style");

    //       allEditInput[
    //         i
    //       ].parentElement.firstElementChild.lastChild.textContent =
    //         allEditInput[i].value;
    //       allEditInput[i].parentElement.firstElementChild.removeAttribute(
    //         "style"
    //       );
    //       console.log("state ", state);
    //     }
    //   }
    //}

    editEle.setAttribute("style", "display: inline-block");
    editEle.classList.add("edit");
    listItem.classList.add("editing");
    todoLabel.style.display = "none";
    listItem.style.display = "flex";
    document.querySelector(".toggle").style.visibility = "hidden";
    view.style.width = "4%";
    //view.removeAttribute("style");
  });

  crossTodoItem.addEventListener("change", (e) => {
    let eleId = Number(listItem.dataset.listItemId);
    //completeTask(todoLabel);
    if (crossTodoItem.checked) {
      todoLabel.classList.add("completed");
      listItem.classList.add("completed");
      //state.completed.push({id:eleId, task:todoLabel.textContent});
      //check under which link is selected
      if (getSelectedLink == "#/") {
        state.completed.push({ id: eleId, task: todoLabel.textContent });
      } else {
        if (getSelectedLink == "#/active" || getSelectedLink == "#/completed") {
          state.completed.push({ id: eleId, task: todoLabel.textContent });
          listItem.style.display = "none";
        }
      }
      //update new state
      const newState = state.todoList.filter((todo) => {
        if (todo.id !== eleId) {
          return todo;
        }
      });
      state.todoList = newState;
    } else {
      let eleId = Number(listItem.dataset.listItemId);
      let todoVal = todoLabel.textContent;

      todoLabel.classList.remove("completed");
      listItem.classList.remove("completed");
      todoLabel.removeAttribute("class");
      listItem.removeAttribute("class");

      //updated completed state
      const completedState = state.completed.filter((todo) => {
        if (todo.id !== eleId) {
          console.log(todo);
          return todo;
        }
      });
      state.completed = completedState;
    }

    //state.todoList.push({id:eleId, name:todoVal});
    //check under which link is selected
    if (getSelectedLink == "#/") {
      state.todoList.push({ id: eleId, name: todoVal });
    } else {
      if (getSelectedLink == "#/active" || getSelectedLink == "#/completed") {
        state.todoList.push({ id: eleId, name: todoVal });
        listItem.style.display = "none";
      }
    }
  });
  //enter key to accept value
  editEle.addEventListener("keydown", (e) => {
    let id = Number(listItem.dataset.listItemId);
    if (e.code == state.ENTER_KEY) {
      todoLabel.textContent = editEle.value;
      state.todoList[id].name = editEle.value;
      listItem.classList.remove("editing");
      editEle.classList.remove("edit");
      editEle.style.display = "none";
      todoLabel.setAttribute("style", "display: inline-block");
      view.style.width = "100%";
      todoLabel.removeAttribute("style");
      view.removeAttribute("style");
      listItem.removeAttribute("style");
      document.querySelector(".toggle").style.visibility = "visible";
    }
  });

  listItem.appendChild(view);
  view.appendChild(crossTodoItem);
  view.appendChild(checkBox);
  view.appendChild(todoLabel);

  listItem.appendChild(editEle);
  fragment.appendChild(listItem);
  todoList.appendChild(fragment);
}

//add new todo list
newTodo.addEventListener("keydown", (e) => {
  if (e.code === state.ENTER_KEY) {
    if (newTodo.value.length !== 0) {
      //check if item is adding under completed todo
      if (getSelectedLink == "#/completed") {
        addTodo(newTodo.value);
        const completedTodo = document.querySelectorAll(".todo-list li");
        for (let i = 0; i < completedTodo.length; i++) {
          if (completedTodo[i].classList.value == "completed") {
            completedTodo[i].style.display = "block";
          } else {
            completedTodo[i].style.display = "none";
          }
        }
      } else {
        addTodo(newTodo.value);
      }

      showFooterLinks.style.display = "flex";
      newTodo.value = "";
    } else {
      newTodo.value = "";
    }
  }
});

//clear completed todo and remove completed node
clearBtn.addEventListener("click", (e) => {
  const removeAll = document.querySelectorAll(".completed");
  let getLenth = removeAll.length;
  let counter = 0;
  while (counter < getLenth) {
    removeAll[counter].remove();
    console.log("Deleted......", counter);
    state.completed = [];
    counter += 1;
  }
});

//show completed todo
completedBtn.addEventListener("click", (e) => {
  const completedTodo = document.querySelectorAll(".todo-list li");
  getSelectedLink = e.target.hash;
  //set selected link border
  for (let i = 0; i < btnLinks.length; i++) {
    if (btnLinks[i].hash == getSelectedLink) {
      btnLinks[i].classList.add("selected");
    } else {
      btnLinks[i].classList.remove("selected");
    }
  }

  //show completed todos
  for (let i = 0; i < completedTodo.length; i++) {
    console.log(completedTodo[i]);
    if (completedTodo[i].classList.value == "completed") {
      completedTodo[i].style.display = "block";
    } else {
      completedTodo[i].style.display = "none";
    }
  }
});

//show active todo list
activeBtn.addEventListener("click", (e) => {
  const activeTodo = document.querySelectorAll(".todo-list li");
  getSelectedLink = e.target.hash;
  console.log("state ", state);
  //set selected link border
  for (let i = 0; i < btnLinks.length; i++) {
    if (btnLinks[i].hash == getSelectedLink) {
      btnLinks[i].classList.add("selected");
    } else {
      btnLinks[i].classList.remove("selected");
    }
  }

  //show active todos
  for (let i = 0; i < activeTodo.length; i++) {
    if (activeTodo[i].classList.value !== "completed") {
      activeTodo[i].style.display = "block";
    } else {
      activeTodo[i].style.display = "none";
    }
  }
});

//show all todo's
allBtn.addEventListener("click", (e) => {
  const showAllTodo = document.querySelectorAll(".todo-list li");
  getSelectedLink = e.target.hash;
  //set selected link border
  for (let i = 0; i < btnLinks.length; i++) {
    if (btnLinks[i].hash == getSelectedLink) {
      btnLinks[i].classList.add("selected");
    } else {
      btnLinks[i].classList.remove("selected");
    }
  }

  //show all todos
  for (let i = 0; i < showAllTodo.length; i++) {
    showAllTodo[i].style.display = "block";
    //showAllTodo[i].removeAttribute('style');
  }
});

//Google api Auth
window.onload = handleClientLoad();
let GoogleAuth;
let SCOPE = "https://www.googleapis.com/auth/drive";

function handleClientLoad() {
  //Load the API'c client and auth2 modules.
  // Call the initClient function after the modules load.
  gapi.load("client:auth2", initClient);
}

function initClient() {
  let discoveryUrl =
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
  gapi.client
    .init({
      apiKey: "AIzaSyBe3rR8naqNYcWIXmvzEowLYd7HFWILZKQ",
      clientId:
        "1006320060318-92d4obifbh5ju9c6vpeq93mlavcdns13.apps.googleusercontent.com",
      scope: SCOPE,
      discoveryDocs: [discoveryUrl],
    })
    .then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();
      //Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      GoogleAuth.currentUser.get();

      setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $("#sign-in-or-out-button").click(function () {
        handleAuthClick();
      });
      $("#revoke-access-button").click(function () {
        revokeAccess();
      });
    })
    .then(() => {
      getTodoId();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
    //User is authorized and has clicked 'sign out' button.
    GoogleAuth.signOut();
  } else {
    GoogleAuth.signIn();
  }
}

function revokeAccess() {
  GoogleAuth.disconnect();
}

function setSigninStatus() {
  let user = GoogleAuth.currentUser.get();
  let isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    $("#sign-in-or-out-button").html("Sign out");
    $("#revoke-access-button").css("display", "inline-block");
    $("#revoke-access-button").css({
      display: "inline-block",
      "background-color": " rgb(29 27 27 / 99%)",
      padding: ".7rem",
      "margin-left": "10px",
      color: "#fff",
      "font-size": " .9rem",
      "border-radius": "9px",
      cursor: "pointer",
    });
    $("#auth-status").html(
      "You are currently signed in and have granted " + "access to this app."
    );
    $("#auth-status").css({
      color: "#197719",
    });
    $("#sign-in-or-out-button").css({
      "font-size": ".9rem",
      background: "#2f2d2d",
      color: "#fff",
      "border-radius": "9px",
      padding: "0.7rem",
      "margin-left": "1rem",
      cursor: "pointer",
    });
  } else {
    $("#sign-in-or-out-button").html("Sign In / Authorize");
    $("#sign-in-or-out-button").css({
      display: "inline-block",
      "background-color": " rgb(29 27 27 / 99%)",
      padding: ".7rem",
      color: "#fff",
      "font-size": " .9rem",
      "border-radius": "9px",
      cursor: "pointer",
    });
    $("#revoke-access-button").css("display", "none");
    $("#auth-status").html(
      "You have not authorized this app to save to google drive and you are " +
        "signed out."
    );
    $("#auth-status").css({
      color: "red",
    });
  }
}

function updateSigninStatus() {
  setSigninStatus();
}

//generate a json and save to text file
//retrieve as a text file and then read the file.

//use google drive patch for the updating the file
//create a new file with e.g todos appended to it
// search for the id withconcatenated name and if it exist
// save to the same file

//save todos to google drive
//create the file name .json
//save to the file .json

// let data = { name: "John Doe", age: 30, city: "New York" };

// var jsonData = JSON.stringify(data);
//get a file id
var fileId;
// //get todoFile
function getTodoId() {
  //alert(fileId);
  //if (fileId) {
  gapi.client.drive.files
    .list({
      mimeType: "application/vnd.google-apps.document",
      q: "name='myTodos.json'",
    })
    .then((res) => {
      fileId = res.result.files[0].id;
      loadTodoList();
      console.log("Response Search id ", res.result.files[0].id);
      console.log("Response Search", res.result.files[0].name);

      // function example() {
      //let file =
      //("https://drive.google.com/file/d/1fNJZzxmHBCUBecs4oPClRs9sKbQvcj3P/view?usp=drivesdk");
      const reader = new Request(res.result.files[0].name);
      let mimeType = {
        method: "GET",
        //mode: "no-cors",
      };
      fetch(reader, mimeType)
        .then((res) => console.log("fetch res ", res.json()))
        .then((data) => console.log("data result ", data))
        .catch((err) => console.log("fetch err", err));
      //}
    });
}

// function example() {
//   let file =
//     "https://drive.google.com/file/d/1fNJZzxmHBCUBecs4oPClRs9sKbQvcj3P/view?usp=drivesdk";
//   const reader = new Request(file);
//   let mimeType = {
//     method: "GET",
//     mode: "no-cors",
//   };
//   fetch(reader, mimeType)
//     .then((res) => console.log("fetch res ", res))
//     .catch((err) => console.log("fetch err", err));
// }

function loadTodoList() {
  gapi.client.drive.files
    .get({
      fileId: fileId,
      fields: "webViewLink",
    })
    .then((res) => {
      console.log("loaded webview link ", res);
      //example();
    });
}

function saveToFile(jsonData) {
  const boundary = "-------314159265358979323846";
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  const contentType = "application/json";

  let metadata = {
    name: "myTodos.json",
    appProperties: {
      additionalID: "todoceg2af2ge72e78",
    },
    mimeType: contentType,
  };

  let multipartRequestBody =
    delimiter +
    "Content-Type: application/json\r\n\r\n" +
    JSON.stringify(metadata) +
    delimiter +
    "Content-Type: " +
    contentType +
    "\r\n\r\n" +
    jsonData +
    close_delim;

  if (fileId) {
    alert(fileId);
    //use this to update file
    gapi.client
      .request({
        path: `https://www.googleapis.com/upload/drive/v3/files/${fileId}`,
        method: "PATCH",
        params: { uploadType: "multipart" },
        headers: {
          "Content-Type": 'multipart/related; boundary="' + boundary + '"',
        },
        body: multipartRequestBody,
      })
      .then((res) => {
        console.log("response ", res);
      });
  } else if (fileId === undefined) {
    gapi.client
      .request({
        path: `https://www.googleapis.com/upload/drive/v3/files/`,
        method: "POST",
        params: { uploadType: "multipart" },
        headers: {
          "Content-Type": 'multipart/related; boundary="' + boundary + '"',
        },
        body: multipartRequestBody,
      })
      .then(() => {
        //get file id
        getTodoId();
      })
      .then((res) => {
        console.log("response ", res);
      });
  }
}

//add css grid
//do the update

// //save todos
saveTodos.addEventListener("click", () => {
  let todoElement = {};
  let todo = [];
  for (let i = 0; i < state.todoList.length; i++) {
    todoElement = state.todoList[i];
    //todoElement.name = state.todoList[i].name;
    todo.push(todoElement);
    //console.log("json files ", JSON.stringify(state.todoList[i]));
  }
  todo = JSON.stringify(todo);
  //console.log("all ", todo);
  //save todos to google drive
  saveToFile(todo);
});
