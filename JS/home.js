var user = sessionStorage.getItem("user");
var pass = sessionStorage.getItem("pass");

<<<<<<< HEAD
=======

>>>>>>> 26362de366252dca07ca6a8e8f4e339c55d112b2
if (user == null && pass == null) {
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/login.html";
}

var logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
  event.preventDefault();

  sessionStorage.clear();
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/login.html";
});

var all = document.getElementById("button");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "all");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_sibiu");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "sibiu");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_alba");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "alba");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_hunedoara");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "hunedoara");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_valcea");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "valcea");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_brasov");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "brasov");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_cluj");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "cluj");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var all = document.getElementById("button_mures");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "mures");
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/category.html";
});

var submit = document.getElementById("logout");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  sessionStorage.clear();
  window.location.href = "login.html";
});
