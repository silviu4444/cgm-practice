const sidebar = document.querySelector(".sidebar");
const sidebarButton = document.querySelector(".sidebar-button");
const menuButton = document.querySelector(".menu-button");
const loginButton = document.querySelector(".login-button");
const registerWrapper = document.getElementsByClassName("register-wrapper");

const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passswordInput = document.querySelector("#password");
const confPassword = document.querySelector("#conf-password");
const submitInput = document.querySelector("#submit");

let registerValidation = {
  username: null,
  email: null,
  password: null,
  confPassword: null,
};

const submitPermission = () => {
  console.log(registerValidation);
  if (
    registerValidation.username === true &&
    registerValidation.email === true &&
    registerValidation.password === true &&
    registerValidation.confPassword === true
  ) {
    submitInput.removeAttribute("disabled");
    submitInput.style.color = "white";
  } else {
    submitInput.setAttribute("disabled", true);
    submitInput.style.color = "gray";
  }
};

const hideOrShowItem = (item, action) => {
  if (action === "block") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
};
menuButton.addEventListener("click", () => {
  hideOrShowItem(sidebar, "block");
});

sidebarButton.addEventListener("click", () => {
  hideOrShowItem(sidebar, "none");
});

registerWrapper[0].childNodes[1].addEventListener("click", () => {
  hideOrShowItem(registerWrapper[0], "none");
  submitInput.setAttribute("disabled", true);
  submitInput.style.color = "gray";
  usernameInput.value = "";
  emailInput.value = "";
  passswordInput.value = "";
  confPassword.value = "";
});

loginButton.addEventListener("click", () => {
  hideOrShowItem(registerWrapper[0], "block");
});

const errorMessageAttributes = (data) => {
  usernameInput.style.borderColor = "white";
  usernameInput.classList.remove("shake-horizontal");
  usernameInput.parentNode.childNodes[5].innerHTML = "";
};

const validOrUnvalidStyles = (validBoolean, nodeIndex) => {
  if (validBoolean) {
    passswordInput.parentNode.childNodes[nodeIndex].style.display = "block";
    passswordInput.parentNode.childNodes[nodeIndex].style.backgroundColor =
      "#009688";
    passswordInput.parentNode.childNodes[nodeIndex].style.borderColor =
      "#009688";
  } else {
    passswordInput.parentNode.childNodes[nodeIndex].style.display = "block";
    passswordInput.parentNode.childNodes[nodeIndex].style.backgroundColor =
      "red";
    passswordInput.parentNode.childNodes[nodeIndex].style.borderColor = "red";
  }
};

usernameInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  if (e.key === "Enter") {
    passswordInput.focus();
  }
  if (inputValue.length > 14 || inputValue.length < 4) {
    usernameInput.style.borderColor = "red";
    usernameInput.parentNode.childNodes[5].innerHTML =
      "Username must be between 4 and 14 characters";
    usernameInput.parentNode.childNodes[5].style.display = "block";
    registerValidation = { ...registerValidation, username: false };
    submitPermission();
  } else if (inputValue.length <= 14 && inputValue.length >= 4) {
    usernameInput.style.borderColor = "white";
    usernameInput.parentNode.childNodes[5].style.display = "none";
    registerValidation = { ...registerValidation, username: true };
    submitPermission();
  } else {
    usernameInput.parentNode.childNodes[5].style.display = "block";
    errorMessageAttributes();
  }
  if (inputValue.length === 0) {
    usernameInput.parentNode.childNodes[5].style.display = "none";
    registerValidation = { ...registerValidation, username: false };
    submitPermission();
    errorMessageAttributes();
  }
});

emailInput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(value.indexOf("@"));
  if (value.indexOf("@") > -1) {
    registerValidation = { ...registerValidation, email: true };
    submitPermission();
  } else {
    registerValidation = { ...registerValidation, email: false };
    submitPermission();
  }
});

passswordInput.addEventListener("keyup", (e) => {
  const value = e.target.value;

  if (value.length < 6) {
    validOrUnvalidStyles(false, 17);
    registerValidation = { ...registerValidation, password: false };
    submitPermission();
    passswordInput.parentNode.childNodes[17].innerHTML =
      "Password must must have at least 4 characters"; // yes
  }
  if (value.length >= 6) {
    validOrUnvalidStyles(true, 17);
    passswordInput.parentNode.childNodes[17].innerHTML = "Valid Password";
    registerValidation = { ...registerValidation, password: true };
    submitPermission();
    setTimeout(() => {
      passswordInput.parentNode.childNodes[17].style.display = "none";
    }, 1000);

    if(confPassword.value) {
        console.log(confPassword.value)
        if(confPassword !== value) {
          registerValidation = { ...registerValidation, password: false };
          submitPermission();
        } else {
          registerValidation = { ...registerValidation, password: true };
          submitPermission();
        }
    }
  }


  if (value.length === 0) {
    passswordInput.parentNode.childNodes[17].style.display = "none";
  }

  console.log(registerValidation);
});

confPassword.addEventListener("keyup", (e) => {
  const value = e.target.value;

  if (value !== passswordInput.value) {
    validOrUnvalidStyles(false, 23);
    passswordInput.parentNode.childNodes[23].innerHTML =
      "Passwords don't match";
    registerValidation = { ...registerValidation, confPassword: false };
    submitPermission();
  } else {
    validOrUnvalidStyles(true, 23);
    passswordInput.parentNode.childNodes[23].innerHTML = "Passwords match";
    registerValidation = { ...registerValidation, confPassword: true };
    submitPermission();
    setTimeout(() => {
      passswordInput.parentNode.childNodes[23].style.display = "none";
    }, 1000);
  }
  if (value.length === 0) {
    passswordInput.parentNode.childNodes[23].style.color = "white";
    passswordInput.parentNode.childNodes[23].style.display = "none";
  }

  console.log(registerValidation);
});
