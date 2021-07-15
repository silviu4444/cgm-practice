// localStorage.clear()
import data from "../main-section/items/shoes-list.js";
import { dialogHTML } from "./htmlElements.js";
import { appendTableRowsInCart } from "./utility-functions/utility-functions.js";
const productsData = data.products;
const openCartButton = document.querySelector(
  "body > header > div > ul > li:nth-child(1)"
);
const dialogWrapper = document.createElement("div");
dialogWrapper.classList.add("dialog-cart-wrapper");
dialogWrapper.innerHTML = dialogHTML;
document.body.appendChild(dialogWrapper);

dialogWrapper.addEventListener("click", (e) => {
  closeDialogWrapper(e);
});
const closeDialogWrapper = (e) => {
  if (e.target.className === "dialog-cart-wrapper") {
    dialogWrapper.removeAttribute("style");
    document.body.removeAttribute("style");
    dialogWrapper.removeEventListener("click", closeDialogWrapper);
  }
};
openCartButton.addEventListener("click", () => {
  dialogWrapper.style.display = "block";
  document.body.style.overflowY = "hidden";
  addItemsToDialogTable();
});

const addItemsToDialogTable = () => {
  const localStorageData = JSON.parse(localStorage.getItem("cart-items"));
  const tableBody = document.querySelector(
    "body > div.dialog-cart-wrapper > dialog > div.dialog-items-container > table > tbody"
  );
  tableBody.innerHTML = "";
  appendTableRowsInCart(localStorageData, tableBody);
  const removeButton = document.querySelectorAll(".subtotal_remove-button");
  removeButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      removeItemFromCart(index, localStorageData);
    });
  });

  const plusButton = document.querySelectorAll(".increase-item");
  const minusButton = document.querySelectorAll(".decrease-item");

  plusButton.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      increaseOrDecreaseItem(button, index, localStorageData);
    });
  });
  minusButton.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      increaseOrDecreaseItem(button, index, localStorageData);
    });
  });
};

const removeItemFromCart = (index, localStorageItems) => {
  const articlesData = { ...localStorageItems };
  articlesData.numberOfItems -= articlesData.items[index].nrOfItems;
  articlesData.items.splice(index, 1);
  localStorage.setItem("cart-items", JSON.stringify(articlesData));
  openCartButton.children[1].innerHTML = articlesData.numberOfItems;
  addItemsToDialogTable();
};

const increaseOrDecreaseItem = (button, index, localStorageItems) => {
  const buttonAction = button.classList.value;
  const articlesData = { ...localStorageItems };
  let nrOfItems = articlesData.items[index].nrOfItems;
  nrOfItems <= 5 && buttonAction === "decrease-item"
    ? (nrOfItems--, articlesData.numberOfItems--)
    : (nrOfItems++, articlesData.numberOfItems++);
  articlesData.items[index].nrOfItems = nrOfItems;
  if (nrOfItems === 0) {
    removeItemFromCart(index, localStorageItems);
  }
  localStorage.setItem("cart-items", JSON.stringify(articlesData));
  openCartButton.children[1].innerHTML = articlesData.numberOfItems;
  addItemsToDialogTable();
};
