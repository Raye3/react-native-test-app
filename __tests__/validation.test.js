import { isValidNumber, isValidString, isValidPrice } from "../validator/validator";

it('Tests if the given number is a valid positive integer', () => {
    expect(isValidNumber(1)).toBe(true);
    expect(isValidNumber(2)).toBe(true);
    expect(isValidNumber(-3)).toBe(false);
    expect(isValidNumber(0)).toBe(false);
    expect(isValidNumber('1')).toBe(true);
    expect(isValidNumber('str')).toBe(false);
})

it('Tests if its a valid string name and longer than 3 characters', () => {
    expect(isValidString('ab')).toBe(false)
    expect(isValidString('abc')).toBe(true)
    expect(isValidString('abc 1')).toBe(true)
    expect(isValidString('Iphone')).toBe(true)
    expect(isValidString('1 iphone')).toBe(true)
})

it('Tests if the input is a valid price', () => {
    expect(isValidPrice(1)).toBe(true);
    expect(isValidPrice(-1)).toBe(false);
    expect(isValidPrice(12.9)).toBe(true);
})