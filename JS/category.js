var filtru_judet = sessionStorage.getItem("filter");
if (filtru_judet != "all") {
  var judet = document.getElementById("judet");
  judet.value = filtru_judet;
  filter_judet();
}

function filter_judet() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("judet");
  filter = input.value.toUpperCase();
  table = document.getElementById("category_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

var submit = document.getElementById("logout");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  sessionStorage.clear();
  window.location.href = "https://andrupirvulescu.github.io/PetAdoptRomania/login.html";
});
