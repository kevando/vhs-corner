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

  if (!$textArea.value.trim()) {
    alert("Nothing was submitted.");
    // showFailedState();
  } else {
    showSuccessState();
    // setTimeout(openSendEmail, 1500);
  }

}

function showFailedState() {
  // document.querySelector(".subtitle").style.visibility = "hidden";
  document.querySelector(".submit").disabled = true;
  document.querySelector(".submit").innerHTML = "Submitted";
}
function showSuccessState() {
  // document.querySelector(".subtitle").style.visibility = "hidden";
  document.querySelector(".submit").style.display = "none";
  document.querySelector(".title").innerHTML = "Favorite Movie";
  // setStatus("has been added to your permenant record.");
  document.querySelector("textarea").disabled = true;

  document.getElementById("ShareLink").style.opacity = 1.0;

  var urlString = "mailto:?subject=Hey, did you know my favorite movie is " + $textArea.value.trim() + "?&body=What is your favorite movie?";

  document.getElementById("ShareLink").href = urlString;
}

function openSendEmail() {
  var urlString = "mailto:?subject=Hey, did you know my favorite movie is " + $textArea.value.trim() + "?&body=I am curious, what is your favorite movie?";

  window.open(urlString);
}

function resetForm() {
  $textArea.value = "";
}
