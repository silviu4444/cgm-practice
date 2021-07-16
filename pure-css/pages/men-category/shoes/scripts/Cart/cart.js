// localStorage.clear()
import data from "../main-section/items/shoes-list.js";
import { dialogHTML } from "./htmlElements.js";
import { appendTableRowsInCart, updateDialogCheckout } from "./utility-functions/utility-functions.js";
const productsData = data.products;
const openCartButton = document.querySelector(
  "body > header > div > ul > li:nth-child(1)"
);
const setLocalStorage = (dataToSet) => {
  localStorage.setItem("cart-items", JSON.stringify(dataToSet));
  openCartButton.children[1].innerHTML = dataToSet.numberOfItems;
};
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
  const increaseOrDecreaseEvent = (button) => {
    button.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        increaseOrDecreaseItem(btn, index, localStorageData);
      });
    });
  };
  increaseOrDecreaseEvent(minusButton);
  increaseOrDecreaseEvent(plusButton);
  updateDialogCheckout(localStorageData);
};

const removeItemFromCart = (index, localStorageItems) => {
  const articlesData = { ...localStorageItems };
  articlesData.numberOfItems -= articlesData.items[index].nrOfItems;
  articlesData.items.splice(index, 1);
  setLocalStorage(articlesData);
  addItemsToDialogTable();
};

const increaseOrDecreaseItem = (button, index, localStorageItems) => {
  const buttonAction = button.classList.value;
  const articlesData = { ...localStorageItems };
  let nrOfSameItem = articlesData.items[index].nrOfItems;
  const decreaseCondition =
    nrOfSameItem <= 5 && buttonAction === "decrease-item";
  const increaseCondition =
    nrOfSameItem <= 4 && buttonAction === "increase-item";
  decreaseCondition ? (nrOfSameItem--, articlesData.numberOfItems--) : null;
  increaseCondition ? (nrOfSameItem++, articlesData.numberOfItems++) : null;
  articlesData.items[index].nrOfItems = nrOfSameItem;
  if (nrOfSameItem === 0) {
    removeItemFromCart(index, localStorageItems);
  }
  setLocalStorage(articlesData);
  addItemsToDialogTable();
};
