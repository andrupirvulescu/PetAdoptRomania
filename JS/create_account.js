var submit = document.getElementById("create");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var password = document.getElementById("password_reg").value;
  var email = document.getElementById("email").value;
  alert(
    "Va multumim pentru inregistrare! O sa primiti un mail de confirmare pe adresa: " +
      email +
      ". O zi frumoasa!"
  );
  window.location.href = "login.html";
});
