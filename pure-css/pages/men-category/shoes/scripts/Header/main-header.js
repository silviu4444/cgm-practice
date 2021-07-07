import { registerHTML, mainNavigationHTML, loginHTML } from "./htmlElements.js";
const mainNavigationOpenButton = document.querySelector(
  ".main-header__menu-button"
);
const registerButton = document.querySelector(
  ".main-header__user-menu_login-button"
);

const openCategoryMenu = (category) => {
  const categoryPath = category.toLowerCase();
  const categoryMenuHTML = `
  <div class="category-menu-links">
    <p><a href="/pure-css/pages/${categoryPath}-category/shoes/shoes.html">Shoes</a></p>
  </div>`;
  const navigation = document.querySelector(".main-navigation");
  const categoryMenu = document.createElement("div");
  categoryMenu.classList.add("category-menu");
  categoryMenu.innerHTML = categoryMenuHTML;
  navigation.appendChild(categoryMenu);
  const categoryMenuLinksContainer = categoryMenu.children[0];
  const onClick = (e) => {
    e.stopPropagation();
    if (categoryMenuLinksContainer && e.target !== categoryMenuLinksContainer) {
      navigation.children[2].remove();
      document.body.removeEventListener("click", onClick);
    }
  };
  document.body.addEventListener("click", onClick);
};

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
    addingAParentElementInDOM(elementType, className, htmlToInsert, closeBtnClass)
    if (className === "main-navigation") {
      initializingTheSubMenu(className);
    }
    if (additionalMenu) {
      openAnAdditionalMenu(additionalMenu);
    }
  }
};

const addingAParentElementInDOM = (elementType, className, htmlToInsert, closeBtnClass) => {
  const element = document.createElement(elementType);
    element.setAttribute("class", className);
    element.innerHTML = htmlToInsert;
    document.body.insertBefore(element, document.body.children[1]);
    const closeBtn = document.querySelector(`.${closeBtnClass}`);
    closeBtn.addEventListener("click", () => {
      document.body.children[1].remove();
    });
}

const initializingTheSubMenu = (className) => {
  const mainNavigation = document.querySelector(`.${className}`);
  const subNavigator = document.querySelectorAll(".nav-link");
  subNavigator.forEach((item) => {
    item.addEventListener("click", (e) => {
      const category = e.path[1].children[0].innerHTML;
      e.stopPropagation();
      if (mainNavigation.children[2]) {
        mainNavigation.children[2].remove();
      }
      openCategoryMenu(category);
    });
  });
};

const openAnAdditionalMenu = (additionalMenu) => {
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
  DOMUpdater("div", "login-form", loginHTML, "login-close-button", {
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
