import data from "./items/shoes-list.js";
import addItemsToCart from "./add-items-to-cart.js";
const selectorTag = (dataOfItems) => {
  const arrayOfColorsSrc = Object.values(dataOfItems.colors);
  const arrayOfColorsName = Object.keys(dataOfItems.colors);
  const selectorTag = document.createElement("select");
  selectorTag.setAttribute("name", "color-selector");
  selectorTag.setAttribute("id", "color-selector");

  let options = "";
  arrayOfColorsName.forEach((option) => {
    options += `
        <option value="${option}">${
      option[0].toUpperCase() + option.slice(1)
    }</option>
      `;
  });
  selectorTag.innerHTML = options;
  selectorTag.children[0].setAttribute("selected", "");
  return selectorTag;
};

const sizeButtons = (dataOfItems) => {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");
  const buttonStatus = {
    isClicked: null,
    previousButtonIndex: null,
  };
  dataOfItems.sizes.forEach((size, index) => {
    let button = document.createElement("button");
    button.innerText = size;
    button.addEventListener("click", () => {
      if (buttonStatus.isClicked) {
        const prevIndex = buttonStatus.previousButtonIndex;
        buttonsContainer.children[prevIndex].classList.remove("chose-size");
      }
      buttonStatus.isClicked = true;
      buttonStatus.previousButtonIndex = index;
      button.classList.add("chose-size");
      buttonsContainer.classList.remove("warning-size-chose");
    });
    buttonsContainer.appendChild(button);
  });
  return buttonsContainer;
};

const addToCartButton = (itemData) => {
  const button = document.createElement("button");
  button.classList.add("add-to-cart-button");
  button.innerHTML = `<i class="fas fa-cart-plus"></i> ${itemData.price}$`;
  button.addEventListener("click", () => {
    const selectValue = document.getElementsByTagName("select")[0].value;
    const selectedSize = document.querySelector(".chose-size");
    const sizeButtons = document.querySelector(".buttons-container");
    if (selectedSize === null) {
      sizeButtons.classList.add("warning-size-chose");
      return;
    } else {
      addItemsToCart({
        brand: itemData.brand,
        colors: selectValue,
        id: itemData.id,
        name: itemData.name,
        sizes: selectedSize.innerHTML,
      });
    }
  });
  return button;
};

const showArticleDetails = (index) => {
  const dataToInsert = data.products[index];
  const articleDetailsContainer = document.querySelector(
    ".article-details-container"
  );
  articleDetailsContainer.innerHTML = `
      <h1>${dataToInsert.name}</h1>
      <img src="${Object.values(dataToInsert.colors)[0]}" alt="${
    dataToInsert.name
  }" />
      <p>Colors available:</p>
      <p>Sizes available:</p>
    `;
  articleDetailsContainer.insertBefore(
    selectorTag(dataToInsert),
    articleDetailsContainer.children[3]
  );

  const onChangeSelector = document.getElementsByTagName("select")[0];
  onChangeSelector.addEventListener("change", () => {
    const colorSelected = onChangeSelector.value;
    articleDetailsContainer.children[1].setAttribute(
      "src",
      dataToInsert.colors[colorSelected]
    );
  });
  articleDetailsContainer.insertBefore(
    sizeButtons(dataToInsert),
    articleDetailsContainer.children[5]
  );
  articleDetailsContainer.insertBefore(
    addToCartButton(dataToInsert),
    articleDetailsContainer.children[6]
  );
};
export default showArticleDetails;
