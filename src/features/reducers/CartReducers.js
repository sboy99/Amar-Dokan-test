const addProdoductToCart = (state, action) => {
  const { payload } = action;
  if (!state.cart.find((prod) => prod.id === payload.id)) {
    state.cart.push(payload);
    state.totalItems += payload?.quantity;
    state.totalAmount += payload?.price * payload?.quantity;
  }
};

export { addProdoductToCart };
