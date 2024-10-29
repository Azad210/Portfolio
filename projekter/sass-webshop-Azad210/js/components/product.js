const PRODUCT_URL = '/public/products.json';

export async function getProducts() {
    const response = await fetch(PRODUCT_URL);
    const data = await response.json();

    return data;
}