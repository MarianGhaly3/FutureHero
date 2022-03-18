const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


/*===== Toggle adding and removing the "responsive" on hamb. icon =======*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navlink") {
    x.className += " responsive";
  } else {
    x.className = "navlink";
  }
}
