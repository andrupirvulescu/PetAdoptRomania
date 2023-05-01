$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
});

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

  var user = $("#username").val();
  var pass = $("#password").val();
  sessionStorage.setItem("user", user);
  sessionStorage.setItem("pass", pass);
  window.location.href = "home.html";
});

var submit = document.getElementById("create");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var name = $("#name").val();
  var password = $("#password_reg").val();
  var email = $("#email").val();
  alert(
    "Va multumim pentru inregistrare! O sa primiti un mail de confirmare pe adresa: " +
      email +
      ". O zi frumoasa!"
  );
  window.location.href = "home.html";
});
