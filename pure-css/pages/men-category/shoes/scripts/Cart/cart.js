import data from "../main-section/items/shoes-list.js";
import { dialogHTML } from "./htmlElements.js";
const productsData = data.products;
const openCartButton = document.querySelector(
  "body > header > div > ul > li:nth-child(1)"
);
const dialogWrapper = document.createElement("div");
dialogWrapper.classList.add("dialog-cart-wrapper");
dialogWrapper.innerHTML = dialogHTML;
document.body.appendChild(dialogWrapper);
dialogWrapper.addEventListener("click", (e) => {
  if (e.target.className === "dialog-cart-wrapper") {
    dialogWrapper.removeAttribute("style");
    document.body.removeAttribute("style");
  }
});
// localStorage.clear()
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
  localStorageData.items.forEach((item) => {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("tbody_table-row");
    tableRow.innerHTML = `
        <td>
                <div class="item-details">
                  <img src="${productsData[item.id - 1].colors[item.colors]}"/>
                  <div class="item-details__info">
                    <strong>${item.nrOfItems} x ${item.name}</strong>
                    <p>Size:${item.sizes}</p>
                    <span>Color: ${item.colors}</span>
                  </div>
                </div>
              </td>
              <td><p>${productsData[item.id - 1].price}$</p></td>
              <td>
                <button class="increase-item"><i class="fas fa-plus"></i></button>
                <input type="text" value="${item.nrOfItems}" disabled/>
                <button class="decrease-item"><i class="fas fa-minus"></i></button>
              </td>
              <td>
                <div class="subtotal_table-row">
                  <div class="subtotal">
                    ${(
                      productsData[item.id - 1].price * item.nrOfItems
                    ).toFixed(2)}$
                  </div>
                  <button class="subtotal_remove-button">
                    Remove
                  </button>
                </div>
              </td>
        `;
    tableBody.appendChild(tableRow);
  });
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
  const buttonBehaviour = button.classList.value;
  const articlesData = { ...localStorageItems };
  if (articlesData.items[index].nrOfItems <= 5) {
    if (buttonBehaviour === "decrease-item") {
      articlesData.items[index].nrOfItems--;
      articlesData.numberOfItems--;
    } else {
      articlesData.items[index].nrOfItems++;
      articlesData.numberOfItems++;
    }
  }
  if (articlesData.items[index].nrOfItems === 6) {
    articlesData.items[index].nrOfItems--;
    articlesData.numberOfItems--;
  }
  if(articlesData.items[index].nrOfItems === 0) {
    removeItemFromCart(index, localStorageItems)
  }
  localStorage.setItem("cart-items", JSON.stringify(articlesData));
  openCartButton.children[1].innerHTML = articlesData.numberOfItems;
  addItemsToDialogTable();
};
