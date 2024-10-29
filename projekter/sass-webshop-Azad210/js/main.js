import { getProducts } from "./components/product.js";
import { createProductCard } from "./components/product-card.js";
import { getItems, calculateTotal, deleteItem } from "./components/cart.js";

const page = window.location.pathname;

if (page === "/index.html") {
  const products = await getProducts();
  const productContainer = document.querySelector(".sale-items");

  products.forEach((product) => {
    const newProductCard = createProductCard(product);

    productContainer.append(newProductCard);
  });
} else if (page === "/cart.html") {
  const shoppingCartTable = document.querySelector(".shopping-cart__table");

  const cartItems = getItems();

  const cartItemsKeysAsArray = Object.keys(cartItems);

  console.log(cartItems);

  cartItemsKeysAsArray.forEach((key) => {
    const tableRow = document.createElement("tr");
    const amountTableData = document.createElement("td");
    const nameTableData = document.createElement("td");
    const priceTableData = document.createElement("td");
    const removeTableData = document.createElement("td");

    tableRow.appendChild(amountTableData);
    tableRow.appendChild(nameTableData);
    tableRow.appendChild(priceTableData);
    tableRow.appendChild(removeTableData);

    amountTableData.innerText = cartItems[key].amount + "x";
    nameTableData.innerText = cartItems[key].name;
    priceTableData.innerText = cartItems[key].price;
    removeTableData.innerHTML = '<button class="remove-item">Remove</button>';

    removeTableData
      .querySelector(".remove-item")
      .addEventListener("click", () => {
        deleteItem(key);
        tableRow.remove();
        updateCartTotal();
      });

    tableRow.append(
      amountTableData,
      nameTableData,
      priceTableData,
      removeTableData
    );

    const totalPrice = calculateTotal();

    console.log(totalPrice);

    shoppingCartTable.appendChild(tableRow);
  });

  function updateCartTotal() {
    const totalPrice = calculateTotal();
    const priceCreateHtml = document.querySelector(
      "#shopping-cart__total-price"
    );
    priceCreateHtml.textContent = "Total Price: " + totalPrice;
  }

  updateCartTotal();
}
