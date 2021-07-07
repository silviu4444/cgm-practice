  import data from './items/shoes-list.js'
  const selectorTag = (arrayOfData) => {
    const arrayOfColorsSrc = Object.values(arrayOfData.colors);
    const arrayOfColorsName = Object.keys(arrayOfData.colors);
    const selectorTag = document.createElement('select');
    selectorTag.setAttribute('name', "color-selector");
    selectorTag.setAttribute('id', "color-selector");
  
    let buttons = "";
    for(let i = 0; i < arrayOfColorsSrc.length; i++) {
      buttons += `
            <option value="${arrayOfColorsName[i]}">${arrayOfColorsName[i][0].toLocaleUpperCase()+arrayOfColorsName[i].slice(1)}</option>
      `
    }
    selectorTag.innerHTML = buttons;
    return selectorTag;
  }

  const addArticleDetails = (index) => {
    const dataToInsert = data.products[index];
    const articleDetailsContainer = document.querySelector('.table-article-details');
    articleDetailsContainer.innerHTML = `
      <h1>${dataToInsert.name}</h1>
      <img src="${Object.values(dataToInsert.colors)[0]}" alt="${dataToInsert.name}" />
      <p>Colors available:</p>
      <p>Sizes available: ${dataToInsert.sizes}</p>
    `
    articleDetailsContainer.insertBefore(selectorTag(dataToInsert),articleDetailsContainer.children[3])
  
    const onChangeSelector = document.getElementsByTagName('select')[0];
    onChangeSelector.addEventListener('change', () => {
      const colorSelected = onChangeSelector.value;
      articleDetailsContainer.children[1].setAttribute('src', dataToInsert.colors[colorSelected])
    })
  
  }
  export default addArticleDetails;
