---
layout: default
title: Movie Form
---

<!-- @format -->

<form id="FavoriteMovieSubmissionForm">

<h2 id="Title" onclick="resetForm()">Favorite Movie Submission Form</h2>
<p id="Subtitle">type the name of your favorite movie in the field below</p>

<div>
  <textarea placeholder="Type here..." id="FavoriteMovieInput" rows="13" cols="40" tabindex="4"> </textarea>
</div>

<div>
  <input id="SaveForm" name="saveForm" type="submit" value="Submit">
</div>

</form>

<br><br><br><br><br><br><br><br>

<p id="ResponseText" style="min-height:20px;font-family: Courier">This will go on your permanent record.</p>

<!-- <p>VHS Corner is not affiliated with the Department of Permanent Records.</p> -->

<br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br>

<script src="/assets/js/movie-form.js"></script>
