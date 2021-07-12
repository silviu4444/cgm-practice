import data from "./items/shoes-list.js";
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

const addArticleDetails = (index) => {
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
      <p>Sizes available: ${dataToInsert.sizes}</p>
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
};
export default addArticleDetails;
