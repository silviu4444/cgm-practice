import data from "./items/shoes-list.js";
const openCartButton = document.querySelector(
  "body > header > div > ul > li:nth-child(1)"
);
// localStorage.clear()
const addItemsToCart = (item) => {
  const previousItemsJSON = localStorage.getItem("cart-items");
  console.log(previousItemsJSON);
  const previousItemsParsed = JSON.parse(previousItemsJSON);
  const items = [...previousItemsParsed["items"]];
  let numberOfItems = previousItemsParsed["numberOfItems"];

  const elementAlreadyInCart = items.findIndex(
    (element) =>
      element.sizes === item.sizes &&
      element.colors === item.colors &&
      element.id === item.id
  );
  if (elementAlreadyInCart > -1) {
    items[elementAlreadyInCart].nrOfItems++;
  } else {
    item.nrOfItems = 1;
    items.push(item);
  }
  numberOfItems++;
  const cartItems = {
    numberOfItems,
    items,
  };

  localStorage.setItem("cart-items", JSON.stringify(cartItems));
  openCartButton.children[1].innerHTML = numberOfItems;
};
openCartButton.children[1].innerHTML = JSON.parse(
  localStorage.getItem("cart-items")
).numberOfItems;

export default addItemsToCart;
