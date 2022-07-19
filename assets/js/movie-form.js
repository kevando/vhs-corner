var $textArea = document.getElementById("FavoriteMovieInput");
var $form = document.getElementById("FavoriteMovieSubmissionForm");
var $title = document.getElementById("Title");
var $subtitle = document.getElementById("Subtitle");
var $button = document.getElementById("SaveForm");


$textArea.addEventListener("input", onInputChange, false);
$textArea.addEventListener("keyup", onKeyUp, false);
$form.addEventListener("submit", onSubmit);


function setStatus(msg) {
  // document.getElementById("ResponseText").innerHTML = msg;
};

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

  // setTimeout(resetForm,700);
  // return false;

  // console.log("submitted", $textArea.value);
  if (!$textArea.value.trim()) {
    alert("Nothing was submitted.");
    // showFailedState();
  } else {
    showSuccessState();
    setTimeout(openSendEmail, 1500);
  }

}

function showFailedState() {
  document.querySelector(".subtitle").style.visibility = "hidden";
  document.querySelector(".submit").disabled = true;
  document.querySelector(".submit").innerHTML = "Submitted";
}
function showSuccessState() {
  document.querySelector(".subtitle").style.visibility = "hidden";
  document.querySelector(".submit").style.visibility = "hidden";
  document.querySelector(".title").innerHTML = "Favorite Movie";
  // setStatus("has been added to your permenant record.");
  document.querySelector("textarea").disabled = true;
}

function openSendEmail() {
  var urlString = "mailto:?subject=Hey, did you know my favorite movie is " + $textArea.value.trim() + "?&body=What is your favorite movie?";

  window.open(urlString);
}

function resetForm() {
  // $subtitle.style.visibility = "visible";
  // $button.style.visibility = "visible";
  // $title.innerHTML = "Favorite Movie Submission Form";
  // setStatus("This will be added to your permenant record.");
  $textArea.value = "";
}
