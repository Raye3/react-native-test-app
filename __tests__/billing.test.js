
import { sumProductsPrice, getDiscountValue, getTaxValue, TotalPrice} from "../api/products";

const products = [
    { name: "product 1", quantity: 1, price: 1000 },
    { name: "product 2", quantity: 2, price: 900 },
]
const selectedState = { label: "AA", discount: 3, tax: 6 };


it('Sum the price of list of prudcts', () => {
    expect(sumProductsPrice(products)).toBe(2800);
})

it('Gives back the the discount value from a list of products and selected State', () => {
    // Price of products 1000 + 900 + 900 = 2800 / 100 * 3 = 84
    expect(getDiscountValue(products, selectedState)).toBe(84);
})

it('Gives back the the tax value from a list of products and selected State', () => {
    // Price of products 1000 + 900 + 900 = 2800 / 100 * 6 = 168
    expect(getTaxValue(products, selectedState)).toBe(168);
})

it('Returns the total price for a list of products with discount & tax being applied', () => {
    // 2800 - 84 + 168 = 2884 
    expect(TotalPrice(products, selectedState)).toBe(2884)
})