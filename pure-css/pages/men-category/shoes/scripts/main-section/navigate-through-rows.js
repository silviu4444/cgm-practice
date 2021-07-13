import { prevPage, nextPage } from "./main-section.js";
import addArticleDetails from "./add-article-details.js";
const navigateThroughRows = (elementStatus, paginationStatus) => {
  const tableRows = document.querySelectorAll("tbody tr");
  let firstRow = tableRows[elementStatus.prevItemIndex];
  firstRow.focus();
  tableRows[elementStatus.prevItemIndex].classList.add("active");
  const moveToNextSibling = (sibling) => {
    if (sibling != null) {
      firstRow.focus();
      firstRow.classList.remove("active");
      sibling.focus();
      sibling.classList.add("active");
      firstRow = sibling;
    }
  };

  const checkKey = (e) => {
    if (e.keyCode == "38") {
      //up arrow
      let nextRow = firstRow.previousElementSibling;
      if (nextRow !== null) {
        let index = firstRow.rowIndex - 2;
        elementStatus.prevItemIndex = index;
        moveToNextSibling(nextRow);
        const currentIndex =
          index +
          (paginationStatus.current_page - 1) *
            paginationStatus.records_per_page;
        addArticleDetails(currentIndex);
      }
    } else if (e.keyCode == "40") {
      //down arrow
      let nextRow = firstRow.nextElementSibling;
      if (nextRow !== null) {
        let index = firstRow.rowIndex;
        elementStatus.prevItemIndex = index;
        moveToNextSibling(nextRow);
        const currentIndex =
          index +
          (paginationStatus.current_page - 1) *
            paginationStatus.records_per_page;
        addArticleDetails(currentIndex);
      }
    } else if (e.keyCode == "37") {
      // left arrow
      elementStatus.currentDataIndex =
        (paginationStatus.current_page - 2) * paginationStatus.records_per_page;
      elementStatus.prevItemIndex = 0;
      prevPage();
    } else if (e.keyCode == "39") {
      // right arrow
      elementStatus.currentDataIndex =
        0 + paginationStatus.current_page * paginationStatus.records_per_page;
      elementStatus.prevItemIndex = 0;
      nextPage();
    }
  };
  document.onkeydown = checkKey;
};
export default navigateThroughRows;