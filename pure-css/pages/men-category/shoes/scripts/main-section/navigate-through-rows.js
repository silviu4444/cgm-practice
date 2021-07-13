import { changeNextOrPreviousPage } from "./main-section.js";
import showArticleDetails from "./add-article-details.js";
import { calculateCurrentIndex } from "../utility-functions/utility-functions.js";
const navigateThroughRows = (elementStatus, page) => {
  const [upArrow, downArrow, leftArrow, rightArrow] = ["38", "40", "37", "39"];
  const tableRows = document.querySelectorAll(
    "body > section > div > div.general-details > table > tbody > tr"
  );
  let firstRow = tableRows[elementStatus.prevItemIndex];
  firstRow.focus();
  firstRow.classList.add("active");
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
    let keyCode = e.keyCode;
    if (keyCode == upArrow) {
      let nextRow = firstRow.previousElementSibling;
      if (nextRow !== null) {
        let index = firstRow.rowIndex - 2;
        elementStatus.prevItemIndex = index;
        moveToNextSibling(nextRow);
        showArticleDetails(calculateCurrentIndex(index));
      }
    }
    if (keyCode == downArrow) {
      let nextRow = firstRow.nextElementSibling;
      if (nextRow !== null) {
        let index = firstRow.rowIndex;
        elementStatus.prevItemIndex = index;
        moveToNextSibling(nextRow);
        showArticleDetails(calculateCurrentIndex(index));
      }
    }
    if (keyCode == leftArrow) {
      changeNextOrPreviousPage("previous");
    }
    if (keyCode == rightArrow) {
      changeNextOrPreviousPage("next");
    }
  };
  document.onkeydown = checkKey;
};
export default navigateThroughRows;
