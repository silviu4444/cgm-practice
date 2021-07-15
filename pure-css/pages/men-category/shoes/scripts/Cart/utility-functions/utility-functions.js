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

export { appendTableRowsInCart };
