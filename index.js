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
