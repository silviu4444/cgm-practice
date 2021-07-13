import { paginationStatus, elementFocusStatus } from "../main-section/main-section.js";
const calculateCurrentIndex = (index) => {
    return index +
    (paginationStatus.current_page - 1) *
      paginationStatus.records_per_page;
}

const setCurrentDataIndex = () => {
    elementFocusStatus.currentDataIndex =
    (paginationStatus.current_page - 1) * paginationStatus.records_per_page;
}

export {calculateCurrentIndex, setCurrentDataIndex};