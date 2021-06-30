const sidebar = document.querySelector(".sidebar");
const sidebarOpenButton = document.querySelector(".menu-button");
const sidebarCloseButton = document.querySelector(".menu-button-sidebar");
const loginButton = document.querySelector(".login-button");

const registerWrapper = document.querySelector(".register-wrapper");
const registerWrapperCloseButton = document.querySelector(
  ".register-wrapper-close-button"
);

const onClickSideBar = (content, className) => {
  content.classList.toggle(className);
};

sidebarOpenButton.addEventListener("click", () => {
  onClickSideBar(sidebar, "display-sidebar");
});
sidebarCloseButton.addEventListener("click", () => {
  onClickSideBar(sidebar, "display-sidebar");
});
registerWrapperCloseButton.addEventListener("click", () => {
  onClickSideBar(registerWrapper, "display-register-wrapper");
});
loginButton.addEventListener("click", () => {
  onClickSideBar(registerWrapper, "display-register-wrapper");
});
