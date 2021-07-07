import data from "./items/popularitems.js";

const mainSectionContainer = document.querySelector(
  ".container__popular-items"
);
for (let i = 0; i < data.products.length; i++) {
  const article = document.createElement("article");
  const itemDisponibilityClass = data.products[i].stock;
  const itemDisponibility =
    data.products[i].stock[0].toUpperCase() +
    data.products[i].stock.split("").splice(1).join("");
  const elementHTML = `
        <div class="article-container">
            <div class="image-container">
                <img class="article-image" src=${data.products[i].img} alt="${data.products[i].name}">
            </div>
            <p class="product-title">${data.products[i].name}</p>
                <div class="details-container">
                    <div class="article-details-section">
                        <div class="info-about-article">
                            <p class="product-price">${data.products[i].price}$</p>
                            <span class=${itemDisponibilityClass}>${itemDisponibility}</span>
                            <p class="product-sizes">Sizes:${data.products[i].sizes}</p>
                        </div>
                        <div class="add-to-cart-container">
                            <button>Add to cart <i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  article.innerHTML = elementHTML;
  mainSectionContainer.appendChild(article);
}

const articleImage = document.querySelectorAll(".article-image");
articleImage.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.stopPropagation();
    const img = document.createElement("img");
    img.setAttribute("src", image.attributes[1].value);
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    imageWrapper.appendChild(img);
    document.body.insertBefore(imageWrapper, document.body.children[0]);
    imageWrapper.addEventListener("click", (e) => {
      if (e.target.nodeName === "IMG") {
        return;
      } else {
        document.body.children[0].remove();
      }
    });
  });
});
