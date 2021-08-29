// List of products
export const listOfProducts = [
    { name: "product 1", quantity: 1, price: 1000 },
    { name: "product 2", quantity: 2, price: 900 },
]

// Get the price of products without tax
export const sumProductsPrice = (productsList) => {
    let totalPrice = 0;
    productsList.forEach((item) => {
        totalPrice = totalPrice + (item.price * item.quantity)
    });
    return totalPrice;
}

// Get the value of discount
export const getDiscountValue = (productsList, selectedState) => {
    let totalPrice = sumProductsPrice(productsList);
    let discountValue = ((totalPrice / 100) * selectedState.discount);
    return discountValue;
}

// Get the value of tax
export const getTaxValue = (productsList, selectedState) => {
    let totalPrice = sumProductsPrice(productsList);
    let discountValue = ((totalPrice / 100) * selectedState.tax);
    return discountValue;
}

// total price with all fees and discounst included
export const TotalPrice = (productsList, selectedState) => {
    return sumProductsPrice(productsList) - getDiscountValue(productsList, selectedState) + getTaxValue(productsList, selectedState);
}
