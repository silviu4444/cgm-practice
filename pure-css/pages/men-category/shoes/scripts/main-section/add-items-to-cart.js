import data from "./items/shoes-list.js";
const openCartButton = document.querySelector(
  "body > header > div > ul > li:nth-child(1)"
);
const addItemsToCart = (item) => {
  const previousItemsJSON = localStorage.getItem("cart-items");
  const previousItemsParsed = JSON.parse(previousItemsJSON);
  const items = [...previousItemsParsed["items"]];
  let numberOfItems = previousItemsParsed["numberOfItems"];

  const elementAlreadyInCart = items.findIndex(
    (element) =>
      element.sizes === item.sizes &&
      element.colors === item.colors &&
      element.id === item.id
  );
  const currentLength = items.length
  if (elementAlreadyInCart > -1) {
    if(items[elementAlreadyInCart].nrOfItems >= 5) {
      alert("Maximum number of the same product in cart!")
    } else {
      items[elementAlreadyInCart].nrOfItems++;
      numberOfItems++;
    }
  } else {
    item.nrOfItems = 1;
    items.push(item);
  }
  if(currentLength < items.length) {
    numberOfItems++;
  }
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
