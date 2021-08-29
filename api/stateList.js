// List of states, to be passed to statesList component.
export const statesList = [
    { label: "AA - 3%", value: { label: "AA", discount: 3, tax: 6 } },
    { label: "BB - 6%", value: { label: "BB", discount: 6, tax: 10 } },
    { label: "DD - 15%", value: { label: "DD", discount: 15, tax: 10 } },
    { label: "FF - 6%", value: { label: "FF", discount: 6, tax: 8 } },
    { label: "EE - 7%", value: { label: "EE", discount: 7, tax: 8 } },
    { label: "CC - 11%", value: { label: "CC", discount: 11, tax: 8 } },
    { label: "HH - 3%", value: { label: "HH", discount: 3, tax: 8 } },
    { label: "JJ - 2%", value: { label: "JJ", discount: 2, tax: 8 } },
    { label: "ZZ - 3%", value: { label: "ZZ", discount: 3, tax: 8 } },
];

export const defaultDiscountAndTax = {
    label: "Default",
    discount: 3, // Discount ratio, default 3%
    tax: 10  // Tax ration, default 10%
};