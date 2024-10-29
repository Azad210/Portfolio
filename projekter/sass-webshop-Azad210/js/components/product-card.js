import { addItem } from "./cart.js";

export function createProductCard(productInformation) {
  const productContainer = document.createElement("div");
  const productPicture = document.createElement("img");
  const productTitle = document.createElement("h3");
  const productPrice = document.createElement("p");
  const gamePublisher = document.createElement("p");
  const gamePlatforms = document.createElement("p");
  const buyButton = document.createElement("button");

  productTitle.innerText = productInformation.title;
  productPrice.innerText = productInformation.price;
  gamePublisher.innerText = productInformation.publisher;
  gamePlatforms.innerText = productInformation.platform;
  productPicture.src = productInformation.img;
  buyButton.innerText = "Køb nu";

  buyButton.addEventListener("click", () => {
    addItem(productInformation);
  });

  productContainer.append(
    productTitle,
    productPicture,
    productPrice,
    gamePublisher,
    gamePlatforms,
    buyButton
  );

  return productContainer;
}
