const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElements = document.querySelector('#ingredients');



const liEl = ingredients.map(elem => {
  const liItems = document.createElement('li');
  liItems.classList.add('item');
  liItems.textContent = elem;
  console.log(liItems)
  return liItems
  
});
console.log(liEl);
ulElements.append(...liEl);