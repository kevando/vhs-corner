var $textArea = document.getElementById("FavoriteMovieInput");
var $form = document.getElementById("FavoriteMovieSubmissionForm");
var $title = document.getElementById("Title");
var $subtitle = document.getElementById("Subtitle");
var $button = document.getElementById("SaveForm");

var setStatus = function(msg) {
  document.getElementById("ResponseText").innerHTML = msg;
};

$textArea.addEventListener("input", onInputChange, false);
$textArea.addEventListener("keyup", onKeyUp, false);
$form.addEventListener("submit", onSubmit);

function onInputChange() {
  console.log("changed");
}
function onKeyUp() {
  console.log("key yp");
  // setStatus("key up");
}

window.addEventListener("load", function() {
  $textArea.value = $textArea.value.trim();
});

function onSubmit(e) {
  e.preventDefault();
  console.log("submitted", $textArea.value);
  if (!$textArea.value.trim()) {
    alert("Nothing was submitted.");
    showFailedState();
    return;
  }
  showSuccessState();
}

function showFailedState() {
  $subtitle.style.visibility = "hidden";
  $button.disabled = true;
  $button.innerHTML = "Submitted";
}
function showSuccessState() {
  $subtitle.style.visibility = "hidden";
  $button.style.visibility = "hidden";
  $title.innerHTML = "Favorite Movie";
  setStatus("has been added to your permenant record.");
  $textArea.disabled = true;
}

function resetForm() {
  $subtitle.style.visibility = "visible";
  $button.style.visibility = "visible";
  $title.innerHTML = "Favorite Movie Submission Form";
  setStatus("This will be added to your permenant record.");
  $textArea.value = "";
}
