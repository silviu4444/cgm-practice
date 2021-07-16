const dialogHTML = `
<dialog open class="dialog-cart">
      <div class="dialog-items-container">
        <div class="promotional-code">
          <p>Enter a promotional code</p>
          <input type="text">
          <button class="promotional-code__button">Apply</button>
        </div>
        <table class="dialog-table">
          <thead class="dialog-table__thead">
            <tr class="thead_table-row">
              <td>Item</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody class="dialog-table__tbody">
          </tbody>
        </table>
      </div>
      <div class="dialog-checkout">
        <div class="dialog-checkout__container">
          <h3>Items in your Bag</h3>
          <div class="subtotal-price">
            <p>Subtotal</p>
            <span></span>
          </div>
          <select name="delivery-method" id="delivery-method">
            <option value="0" selected >Select Collection or Delivery</option>
            <option value="0">Pick-Up (free)</option>
            <option value="10">Delivery + 10$</option>
          </select>
          <div class="total-price">
            <h2>TOTAL</h2>
            <span></span>
          </div>
          <button>GO TO SECURE CHECKOUT</button>
        </div>
      </div>
    </dialog>`;

export { dialogHTML };
