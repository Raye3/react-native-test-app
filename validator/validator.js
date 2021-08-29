export function isValidNumber(value) {
    if (/^-?\d+$/.test(value) && value > 0) {
        return true;
    } else {
        return false;
    }
}

export function isValidPrice(value){
    if(/\d{0,}\.?\d+/.test(value) && value > 0) {
        return true;
    }else {
        return false;
    }
}

export function isValidString(value) {
    if (/[^\W_]+/g.test(value) && value.length > 2) {
        return true;
    } else {
        return false;
    }
}