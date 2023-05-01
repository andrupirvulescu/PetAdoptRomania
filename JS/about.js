var user = sessionStorage.getItem("user");
var pass = sessionStorage.getItem("pass");

if (user == null && pass == null) {
  window.location.href = "login.html";
}

var submit = document.getElementById("logout");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  sessionStorage.clear();
  window.location.href = "login.html";
});
