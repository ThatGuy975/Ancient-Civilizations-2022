document.getElementsByClassName("scroll")[0].addEventListener("click", next);
document.getElementsByClassName("DNC")[0].addEventListener("click", dnc);
document.getElementsByClassName("LTTL")[0].addEventListener("click", lttl);

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

function dnc3() {
  document.getElementsByClassName("DNC1")[0].remove();
}

function dnc() {
  let dnc1 = window.prompt(
    "I SAID IT ONCE I WILL NOT SAY IT AGAIN SO PROMISE YOU WONT AGAIN (type 'ok' or else)"
  );

  if (dnc1 === "ok") {
    window.alert("GOOD!");
  } else {
    let dnc2 = window.prompt(
      "TYPE OK AND GO TO THIS LINK --- https://www.youtube.com/watch?v=xvFZjo5PgG0 --- OR I WILL DELETE THE BUTTON!"
    );
    if (dnc2 === "ok") {
      window.alert("TOOK YOU LONG ENOUGH!");
    } else {
      dnc3();
      window.alert(
        "YOU STILL DONT LISTEN HUH WELL TOO BAD SINCE NOW THERES NOTHING TO LISTEN TOO MUAHHAHAHA"
      );
    }
  }
}

function lttl() {
  document.getElementsByClassName("body")[0].classList.add("BO");
  document.getElementsByClassName("cover")[0].classList.add("hide");
  document.getElementsByClassName("bl")[0].classList.toggle("hide");
}
