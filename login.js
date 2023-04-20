var inputEmail = document.getElementById("input-email");
var inputPassword = document.getElementById("input-password");
var signInBtn = document.getElementById("sign-in");
var signUpBtn = document.getElementById("sign-up");
var container = document.getElementById("container");

signInBtn.addEventListener("click", signIn);

function signIn() {
  if (inputEmail.value === "" && inputPassword.value === "") {
    alert("Kindly enter your Email and Password to logIn!!");
  } else if (inputPassword.value === "") {
    alert("Kindly enter your password to logIn!!");
  } else if (inputEmail.value === "") {
    alert("Kindly enter your email to logIn!!");
  } else {
    confirm("Save user details");
  }
}

