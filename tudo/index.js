let titleinput = document.querySelector(".input");
let textarea = document.querySelector("textarea");
let alltudo = document.querySelector(".alltudo");
alltudo.classList.add("alltudo");

let add = document.querySelector("#add");
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (titleinput.value != "" && textarea.value != "") {
    titleinput.placeholder="Title"
    textarea.placeholder="description"
    addtudo();
  } else {
    titleinput.placeholder = "please enter a title";

    textarea.placeholder = "please enter a description";
  }
});

let addtudo = () => {
  let tudo = document.createElement("div");
  tudo.classList.add("tudo");
  let title = document.createElement("div");
  title.innerText = titleinput.value;
  title.classList.add("title");
  tudo.appendChild(title);
  let hr = document.createElement("hr");
  tudo.appendChild(hr);
  let info = document.createElement("div");
  info.classList.add("info");
  info.innerText = textarea.value;
  tudo.appendChild(info);
  let buttondiv = document.createElement("div");
  buttondiv.classList.add("button");
  let button = document.createElement("button");
  button.innerText = "complete";
  button.classList.add("h");
  button.classList.add("buttonstyle");
  buttondiv.appendChild(button);
  tudo.appendChild(buttondiv);
  alltudo.appendChild(tudo);
  button.addEventListener("click", () => {
    alltudo.removeChild(tudo);
  });
  textarea.value = "";
  titleinput.value = "";
};


if(2==alltudo.classList.length){
    console.log("hello")
}
