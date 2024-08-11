const titleListEl = document.querySelectorAll('.item');
console.log(`Numbers of catgories: ${titleListEl.length}`);
titleListEl.forEach(item => {
  const titleEl = item.querySelector('.item-title');
  const lengthItemsEl = item.querySelectorAll('.title-list-item');
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${lengthItemsEl.length}`);
});
