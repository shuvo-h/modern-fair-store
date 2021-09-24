const getCart = (cartName) =>{
    const cart = localStorage.getItem(cartName);
    return cart;
}

const addToDb = (cartName,id) =>{
    const existCart = getCart(cartName);
    let shoppingCart = {};
    if (!existCart) {
        shoppingCart[id] = 1;
    }else{
        shoppingCart = JSON.parse(existCart);
        if (shoppingCart[id]) {
            shoppingCart[id] = shoppingCart[id] + 1;
        }else{
            shoppingCart[id] = 1;
        }
    }
    const stringifiedShoppingCart = JSON.stringify(shoppingCart);
    updateDb(cartName,stringifiedShoppingCart);
}
const updateDb = (cartName,cartValue) =>{
    // console.log(cartName,cartValue);
    localStorage.setItem(cartName,cartValue)
}

const getStoredCart = cartName => {
    const existCart = getCart(cartName);
    const cart = existCart ? JSON.parse(existCart) : {};
    return cart;
}

export {addToDb, getStoredCart};