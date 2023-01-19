function clickAccordion(t) {
  var pai = document.getElementsByClassName("c003_button")[t].parentElement;
  var img = document.getElementsByClassName("c003_icon")[t];
  var conteudo = pai.lastElementChild.classList.contains(
    "c003_regulamento_hide"
  );

  if (conteudo == true) {
    pai.lastElementChild.className = "c003_show";
    img.style.transform = "rotate(" + 180 + "deg)";
  } else {
    pai.lastElementChild.className = "c003_regulamento_hide";
    img.style.transform = "rotate(" + 0 + "deg)";
  }
}
