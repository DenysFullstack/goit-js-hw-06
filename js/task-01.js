const categoriesList = document.querySelector("ul#categories");
console.log(`Number of categories: ${categoriesList.children.length}`);
[...categoriesList.children].forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});