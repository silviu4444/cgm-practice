import data from "./items/shoes-list.js";
import addArticleDetails from "./add-article-details.js";
import navigateThroughRows from "./navigate-through-rows.js";
const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");

const paginationStatus = {
  current_page: 1,
  records_per_page: 5,
};

const onClickTableRow = () => {
  const trs = document.querySelectorAll(".container-table tbody tr");
  const elementFocusStatus = {
    prevItem: null,
    prevItemIndex: null,
  };
  trs.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      if (elementFocusStatus.prevItem) {
        trs[elementFocusStatus.prevItemIndex].removeAttribute("class");
      }
      elementFocusStatus.prevItem = true;
      elementFocusStatus.prevItemIndex = index;
      element.classList.add("active");
      const currentIndex = index + ((paginationStatus.current_page - 1) * paginationStatus.records_per_page);
      addArticleDetails(currentIndex)
    });
  });

};



const prevPage = () => {
  if (paginationStatus.current_page > 1) {
    paginationStatus.current_page--;
    changePage(paginationStatus.current_page);
    if(paginationStatus.current_page > 2) {
      onClickTableRow();
    }
  }
};

const nextPage = () => {
  if (paginationStatus.current_page < numPages()) {
    paginationStatus.current_page++;
    changePage(paginationStatus.current_page);
    onClickTableRow();
  }
};

const changePage = (page) => {
  const dataToInsert = data.products;
  let page_span = document.querySelector(".page-span");
  let listing_table = document.querySelector(".container-table");
  const pageStatus = document.querySelector(".page-status");

  if (page < 1) {
    page = 1;
  }
  if (page > numPages()) {
    page = numPages();
  }
  listing_table.innerHTML = `
  <thead>
  <tr>
          <td class="table-element-counter">Nr</td>
          <td class="table-element-image-container">Product</td>
          <td class="table-element-title">Name</td>
          <td class="table-element-brand">Brand</td>
          <td class="table-element-price">Price</td>
      </tr>
  </thead>
  <tbody>
  </tbody>`;
  for (
    let i = (page - 1) * paginationStatus.records_per_page;
    i < page * paginationStatus.records_per_page && dataToInsert.length;
    i++
  ) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="table-element-counter">
      ${i + 1}
    </td>
    <td class="table-element-image-container">
        <img class="table-element-image" src="${
          Object.values(dataToInsert[i].colors)[0]
        }" />
    </td>
    <td class="table-element-title">
        <p>${dataToInsert[i].name}</p>
    </td>
    <td class="table-element-brand">
        <p>${dataToInsert[i].brand}</p>
    </td>
    <td>
        <strong class="table-element-price">${dataToInsert[i].price}$</strong>
    </td>
    `;
    listing_table.children[1].appendChild(tr);
  }
  const firstRow = document.getElementsByTagName('tr')[1];
  firstRow.setAttribute('id', "start-row");
  navigateThroughRows(firstRow)
  if(paginationStatus.current_page < 2) {
    onClickTableRow();
  }
  page_span.innerHTML = page;
  pageStatus.innerHTML = `${
    paginationStatus.current_page * paginationStatus.records_per_page
  } of ${dataToInsert.length}`;
  if (page === 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page === numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
  }
};
const numPages = () => {
  return Math.ceil(data.products.length / paginationStatus.records_per_page);
};

changePage(1);

btnNext.addEventListener("click", (e) => {
  nextPage();
});
btnPrev.addEventListener("click", () => {
  prevPage();
});