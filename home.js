document.getElementsByClassName("scroll")[0].addEventListener("click", next);

function next() {
  document.getElementsByClassName("cover-title")[0].classList.toggle("hide");
  document.getElementsByClassName("name-text")[0].classList.toggle("hide");
  document.getElementsByClassName("pg1")[0].classList.toggle("hide");
  document.getElementsByClassName("pg1")[1].classList.toggle("hide");
  document.getElementsByClassName("scroll-text")[0].classList.toggle("back");
  document.getElementsByClassName("scroll-text")[0].classList.toggle("next");
  try {
    document.getElementsByClassName("back")[0].innerHTML = "Back";
  } catch {}
  try {
    document.getElementsByClassName("next")[0].innerHTML = "Next";
  } catch {}
  document.getElementsByClassName("scroll-img")[0].classList.toggle("prev-img");
  document.getElementsByClassName("scroll-img")[0].classList.toggle("next-img");
}
