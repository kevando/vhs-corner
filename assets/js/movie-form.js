

/* 
     Favorite Movie Input Form

 -____-

*/



var $input = document.getElementById("FavoriteMovieInput");
var $form = document.getElementById("FavoriteMovieSubmissionForm");
var $button = document.getElementById("SaveForm");

window.addEventListener("load", onLoad);

function onLoad() {
    $input.value = $input.value.trim(); // clear spaces
}

$form.addEventListener("submit", onSubmit);


function onSubmit(e) {
    e.preventDefault();

    if (!$input.value.trim()) failedState();
    else successState();
}

function failedState() {
    alert("YOU SUBMITTED NOTHING");
    $button.disabled = true;
    $button.value = "You Failed";
}
function successState() {

    $button.style.display = "none";
    $input.style.visibility = "hidden";
    // $input.disabled = true;


    document.querySelector("h3").innerHTML = "Favorite Movie Submitted"
    document.getElementById("ShareLink").style.opacity = 1.0;

    var urlString = "mailto:?subject=📼 ?&body=Hi Mom, Did you know my favorite movie is "+ $input.value+"? What's your favorite movie?";

    document.getElementById("ShareLink").href = urlString;
}

function openSendEmail() {
    // var urlString = "mailto:?subject=Hey, did you know my favorite movie is " + $textArea.value.trim() + "?&body=I am curious, what is your favorite movie?";

    // window.open(urlString);
}
