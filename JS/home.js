var user = sessionStorage.getItem("user");
var pass = sessionStorage.getItem("pass");

if (user == null && pass == null) {
  window.location.href = "login.html";
}

var all = document.getElementById("button");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "all");
  window.location.href = "category.html";
});

var all = document.getElementById("button_sibiu");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "sibiu");
  window.location.href = "category.html";
});

var all = document.getElementById("button_alba");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "alba");
  window.location.href = "category.html";
});

var all = document.getElementById("button_hunedoara");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "hunedoara");
  window.location.href = "category.html";
});

var all = document.getElementById("button_valcea");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "valcea");
  window.location.href = "category.html";
});

var all = document.getElementById("button_brasov");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "brasov");
  window.location.href = "category.html";
});

var all = document.getElementById("button_cluj");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "cluj");
  window.location.href = "category.html";
});

var all = document.getElementById("button_mures");
all.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("filter", "mures");
  window.location.href = "category.html";
});

var submit = document.getElementById("logout");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  sessionStorage.clear();
  window.location.href = "login.html";
});
