const $password = document.querySelector("#password");
const $passwordRepeated = document.querySelector("#passwordRepeated");
const $errorMessage = document.querySelector("#errorMessage");
const $range = document.querySelector("#range");
const $rangeValue = document.querySelector("#rangevalue");

function checkPassword() {
  if ($password.value !== $passwordRepeated.value) {
    $errorMessage.textContent = "Values do not match. Try again!";
    $password.textContent = "";
    $passwordRepeated.textContent = "";
    $password.focus();
  } else {
    $errorMessage.textContent = "";
  }
}

function displayRatingValue() {
  $rangeValue.innerHTML = $range.value;
}

$rangeValue.textContent = $range.value;

$passwordRepeated.addEventListener("focusout", checkPassword);
$range.addEventListener("change", displayRatingValue);
$range.addEventListener("input", displayRatingValue);
