import data from "../../main-section/items/shoes-list.js";
const productsData = data.products;
const appendTableRowsInCart = (localStorageData, pathToAppend) => {
  const conditionalButtons = (index, item) => {
    let td = "";
    const numberOfSameItemInCart = localStorageData.items[index].nrOfItems;
    if (numberOfSameItemInCart > 1 && numberOfSameItemInCart < 5) {
      td += `
      <button class="decrease-item"><i class="fas fa-minus"></i></button>
      <input type="text" value="${item.nrOfItems}" disabled/>
      <button class="increase-item"><i class="fas fa-plus"></i></button>
          `;
    }
    if (numberOfSameItemInCart === 1) {
      td += `
      <button class="decrease-item" style="visibility:hidden;"><i class="fas fa-minus"></i></button>
      <input type="text" value="${item.nrOfItems}" disabled/>
      <button class="increase-item"><i class="fas fa-plus"></i></button>
      `;
    }
    if (numberOfSameItemInCart === 5) {
      td += `
      <button class="decrease-item"><i class="fas fa-minus"></i></button>
      <input type="text" value="${item.nrOfItems}" disabled/>
      <button class="increase-item" style="visibility:hidden;"><i class="fas fa-plus"></i></button>
          `;
    }
    return td;
  };
  localStorageData.items.forEach((item, index) => {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("tbody_table-row");
    tableRow.innerHTML = `
            <td>
                    <div class="item-details">
                      <img src="${
                        productsData[item.id - 1].colors[item.colors]
                      }"/>
                      <div class="item-details__info">
                        <strong>${item.nrOfItems} x ${item.name}</strong>
                        <p>Size:${item.sizes}</p>
                        <span>Color: ${item.colors}</span>
                      </div>
                    </div>
                  </td>
                  <td><p>${productsData[item.id - 1].price}$</p></td>
                  <td>
                    ${conditionalButtons(index, item)}
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
    pathToAppend.appendChild(tableRow);
  });
};

const calcTotalPrice = () => {
  const localStorageData = JSON.parse(localStorage.getItem('cart-items'));
  let price = 0;
  localStorageData.items.forEach((item) => {
    price += productsData[item.id - 1].price * item.nrOfItems;
  });
  return price;
};
const deliveryAddition = (selectedValue) => {
    return (calcTotalPrice() + parseInt(selectedValue)).toFixed(2);
};
const updateDialogCheckout = (localStorageData) => {
  const dialogCheckout = document.querySelector(
    "body > div > dialog > div.dialog-checkout > div.dialog-checkout__container"
  );
  const [totalItems, subTotal, selector, totalPrice] = [
    dialogCheckout.children[0],
    dialogCheckout.children[1].children[1],
    dialogCheckout.children[2],
    dialogCheckout.children[3].children[1],
  ];
  totalItems.innerHTML = `${localStorageData.numberOfItems} items in your bag`;
  subTotal.innerHTML = `${calcTotalPrice().toFixed(2)} $`;
  selector.addEventListener("change", (e) => {
    const selectorValue = e.target.value;
    localStorageData.numberOfItems > 0 && selectorValue !=="not-selected"
      ? (totalPrice.innerHTML = `${deliveryAddition(selectorValue)} $`)
      : (totalPrice.innerHTML = `${calcTotalPrice().toFixed(2)} $`);
  });

  const deliveryOptionPrice = selector.value;
  localStorageData.numberOfItems > 0 && deliveryOptionPrice !== "not-selected"
    ? (totalPrice.innerHTML = `${deliveryAddition(deliveryOptionPrice)} $`)
    : (totalPrice.innerHTML = `${calcTotalPrice().toFixed(2)} $`);
};

export { appendTableRowsInCart, updateDialogCheckout, calcTotalPrice };
