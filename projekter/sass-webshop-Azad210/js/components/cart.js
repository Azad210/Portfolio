// husk produkter + antal

let items = {};

//tilføj produkt
export function addItem(item, amount = 1) {
  items[item.title] = {
    name: item.title,
    amount: amount,
    price: item.price,
  };

  updateLocalStorage();
}

// vis produkter

function updateItems() {
  const localStorageItems = localStorage.getItem("cart");

  const localStorageItemsAsObject = JSON.parse(localStorageItems);

  items = localStorageItemsAsObject;
}

function updateLocalStorage() {
  const itemsAsString = JSON.stringify(items);

  localStorage.setItem("cart", itemsAsString);
  $;
}

export function getItems() {
  updateItems();

  return items;
}

//slet produkt
export function deleteItem(itemToDelete) {
  updateItems();

  delete items[itemToDelete];

  updateLocalStorage();
}

//udregn samlet pris
export function calculateTotal() {
  updateItems();

  const itemsKeysAsArray = Object.keys(items);

  let totalPrice = 0;

  itemsKeysAsArray.forEach((itemName) => {
    const item = items[itemName];

    totalPrice += item.price * item.amount;
  });

  return totalPrice.toFixed(2);
}

//skift type

//udregn samlet pris
