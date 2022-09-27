// Number of categories
const numberOfCat = document.querySelectorAll('#categories .item');
console.log(`Number of categories:`, numberOfCat.length);

// Number of elements in categories
numberOfCat.forEach(el => {
    // console.log(el);
    console.log(`Category:`, el.firstElementChild.textContent);
    console.log(`Elements:`, el.lastElementChild.children.length);
});
