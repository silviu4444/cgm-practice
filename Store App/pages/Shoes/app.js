const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector('.sidebar-button');
const menuButton = document.querySelector('.menu-button');

const hideOrShowItem = (item, action) => {
    if(action === "block") {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}

menuButton.addEventListener('click', () => {
    hideOrShowItem(sidebar, 'block')
})

sidebarButton.addEventListener('click', () => {
    hideOrShowItem(sidebar, 'none')
})