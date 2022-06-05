let tab = document.getElementsByClassName("tab");
let detaill = document.getElementsByClassName("detaill");
const show = (evt, idName) => {
  for (i = 0; i < detaill.length; i++) {
    detaill[i].style.display = "none";
  }
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace("active", "");
  }
  document.getElementById(idName).style.display = "flex";
  evt.currentTarget.className += " active";
};
let question = document.getElementsByClassName("question");
let answer = document.getElementsByClassName("answer");
let image = document.getElementsByClassName("image");
const active = (event, idName) => {
  for (i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
  }
  for (let index = 0; index < question.length; index++) {
    // console.log(question[index]);
  }
  document.getElementById(idName).style.display = "flex";
};

let menue_hamburger = document.getElementById("menue_hamburger");
let menue_close = document.getElementById("menue_close");
// menue_close.style.display = "none";
let menue__nav = document.querySelector(".menue__nav");
menue_close.style.display = "none";

let image_blue = document.getElementById("blue");
let image_white = document.getElementById("white");
const hidMenue = () => {
  menue_hamburger.style.display = "block";
  menue__nav.style.display = "none";
  menue_close.style.display = "none";
  image_white.style.display = "none";
  image_blue.style.display = "block";
};
const showMenue = () => {
  menue_hamburger.style.display = "none";
  menue_close.style.display = "block";
  image_white.style.display = "block";
  image_blue.style.display = "none";
  menue__nav.style.display = "flex";
};
var media_query = "screen and (max-width:900px)";

// event to watch the media query
window.matchMedia(media_query).addEventListener("change", function () {
  // matched or not
  var matched = this.matches;

  if (matched) {
    menue__nav.style.display = "none";
  } else {
    image_blue.style.display = "block";
    image_white.style.display = "none";
    menue__nav.style.display = "flex";
  }
});
