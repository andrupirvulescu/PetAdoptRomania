var user = sessionStorage.getItem("user");
var pass = sessionStorage.getItem("pass");

if (user !== null && pass !== null) {
  window.location.href = "home.html";
} else {
  alert("Va rugam sa va logati din nou!");
}

var submit = document.getElementById("login");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  sessionStorage.setItem("user", user);
  sessionStorage.setItem("pass", pass);
  window.location.href = "home.html";
});
