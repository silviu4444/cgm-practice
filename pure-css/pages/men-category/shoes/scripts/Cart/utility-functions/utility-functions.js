import data from "../../main-section/items/shoes-list.js";
const productsData = data.products;
const appendTableRowsInCart = (localStorageData, pathToAppend) => {
  localStorageData.items.forEach((item) => {
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
    pathToAppend.appendChild(tableRow);
  });
};




const updateDialogCheckout = (localStorageData) => {
  const calcTotalPrice = () => {
    let price = 0;
    localStorageData.items.forEach((item) => {
      price += productsData[item.id - 1].price * item.nrOfItems;
    });
    return price;
  };
  const dialogCheckout = document.querySelector(
    "body > div > dialog > div.dialog-checkout > div.dialog-checkout__container"
  );
  const [totalItems, subTotal, selector, totalPrice, checkoutBtn] = [
    dialogCheckout.children[0],
    dialogCheckout.children[1].children[1],
    dialogCheckout.children[2],
    dialogCheckout.children[3].children[1],
    dialogCheckout.children[4],
  ];
  totalItems.innerHTML = `${localStorageData.numberOfItems} items in your bag`;
  subTotal.innerHTML = `${calcTotalPrice().toFixed(2)} $`;
  selector.addEventListener("change", (e) => {
    const selectorValue = e.target.value;
    localStorageData.numberOfItems > 0
      ? (totalPrice.innerHTML = `${(
          calcTotalPrice() + parseInt(selectorValue)
        ).toFixed(2)} $`)
      : (totalPrice.innerText = "0.00 $");
  });
  localStorageData.numberOfItems > 0 && selector.value === "10"
    ? (totalPrice.innerHTML = `${(
        calcTotalPrice() + parseInt(selector.value)
      ).toFixed(2)} $`)
    : (totalPrice.innerHTML = `${calcTotalPrice().toFixed()} $`);
  };
  // const checkoutEventListenner = () => {
  //   console.log(JSON.parse(localStorage.getItem('cart-items')))
  //   console.log('clicked')
  // }
  // checkoutBtn.addEventListener('click', checkoutEventListenner)
export { appendTableRowsInCart, updateDialogCheckout };
