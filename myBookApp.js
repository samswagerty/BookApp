
function openForm() {
  document.getElementById("form-popup").style.display = "block";
  document.getElementById("newBookButton").style.display= "none";
}

function closeForm() {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("newBookButton").style.display= "block";
  console.log("close");
}

