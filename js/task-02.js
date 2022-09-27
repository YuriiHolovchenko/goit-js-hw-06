const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElements = document.querySelector('#ingredients');

ingredients.forEach(el => {
  let liElement = document.createElement('li');
  liElement.textContent = el;
  liElement.classList.add('item');
  ulElements.append(liElement);
});
console.log(ulElements);