import { registerHTML, mainNavigationHTML, loginHTML } from "./htmlElements.js";
const mainNavigationOpenButton = document.querySelector(
  ".main-header__menu-button"
);
const registerButton = document.querySelector(
  ".main-header__user-menu_login-button"
);

const DOMUpdater = (
  elementType,
  className,
  htmlToInsert,
  closeBtnClass,
  additionalMenu
) => {
  if (document.body.children[1].classList.value === className) {
    return;
  } else {
    const element = document.createElement(elementType);
    element.setAttribute("class", className);
    element.innerHTML = htmlToInsert;
    document.body.insertBefore(element, document.body.children[1]);
    const closeBtn = document.querySelector(`.${closeBtnClass}`);
    closeBtn.addEventListener("click", () => {
      document.body.children[1].remove();
    });
    if (additionalMenu) {
      const openMenu = document.querySelector(
        `.${additionalMenu.classOfbuttonThatOpensTheRegisterMenu}`
      );
      openMenu.addEventListener("click", () => {
        document.body.children[1].remove();
        DOMUpdater(
          "div",
          additionalMenu.className,
          additionalMenu.htmlToInsert,
          additionalMenu.closeBtnClass
        );
      });
    }
  }
};

mainNavigationOpenButton.addEventListener("click", () => {
  DOMUpdater(
    "nav",
    "main-navigation",
    mainNavigationHTML,
    "menu-button-navigation"
  );
});

registerButton.addEventListener("click", () => {
  DOMUpdater("div", "login-form", loginHTML, "close-button", {
    className: "register-wrapper",
    htmlToInsert: registerHTML,
    closeBtnClass: "register-wrapper__close-button",
    classOfbuttonThatOpensTheRegisterMenu: "form_register-btn",
  });
});
if (window.innerWidth > 600) {
  DOMUpdater(
    "nav",
    "main-navigation",
    mainNavigationHTML,
    "menu-button-navigation"
  );
}
