/*===== Toggle adding and removing the "responsive" on hamb. icon =======*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navlink") {
    x.className += " responsive";
  } else {
    x.className = "navlink";
  }
}

/* ========= scroll to top button =========*/
var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*========= header slider function ============ */

const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

//fade animation function
// when the element apears in the viewport
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.remove("hidden");
      change.target.classList.add("visible");
      change.target.classList.add("animate__fadeInUp");
    }
  });
}

// list of options
let options = {
  threshold: [0.2],
};

// instantiate a new Intersection Observer
let observer = new IntersectionObserver(onEntry, options);

// list of paragraphs
let elements = document.querySelectorAll(".animate__animated");

// loop through all elements
// pass each element to observe method
for (let elm of elements) {
  observer.observe(elm);
}

//smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// menu tabcontent  hide and display
function menuContent(evt, menuName) {
  // Declare all variables
  var i, tabdiv, tablinks;
  tabdiv = document.getElementsByClassName("tabdiv");
  for (i = 0; i < tabdiv.length; i++) {
    tabdiv[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(menuName).style.display = " block";
  evt.currentTarget.className += " active";
}
