
// import NodeSsh from 'node-ssh'

let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");

webPreferences: {
  nodeIntegration: true
}

function signIn() {
  
  let loginEmail = loginEmailInput.value;
  let loginPassword = loginPasswordInput.value;

  if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
    swal({
      text: "Proszę wypełnić wszystkie pola",
    });
    return;
  }

  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "home.html";
    console.log("isCorrect działa");
  } else {
    swal({
      text: "Nieprawidłowy login i/lub hasło",
    });
    console.log("isCorrect działa");
  }
}

function isCorrectEmailAndPassword(email, password) {
  const {loginToSFTP} = require('./sftp.js');
  loginToSFTP(email,password).then(success => console.log(success))
}

loginBtn.addEventListener("click", function () {
  signIn();
});

