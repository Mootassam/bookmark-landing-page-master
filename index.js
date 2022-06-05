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
