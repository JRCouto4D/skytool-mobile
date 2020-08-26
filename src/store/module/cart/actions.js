export function addToCartRequest(product, provider_id, data) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: {
      product,
      provider_id,
      data,
    },
  };
}

export function addToCartSuccess(item) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { item },
  };
}

export function updateToItemCartRequest(item_id, data, product) {
  return {
    type: '@cart/UPDATE_TO_ITEM_CART_REQUEST',
    payload: { 
      item_id, 
      data,
      product,
    },
  };
}

export function updateToItemCartSuccess(item_id, data) {
  return {
    type: '@cart/UPDATE_TO_ITEM_CART_SUCCESS',
    payload: { 
      item_id,
      data,
    },
  };
}

export function removeToCart(item_id) {
  return {
    type: '@cart/REMOVE_TO_CART',
    payload: { item_id },
  };
}

export function failureAddToCart() {
  return {
    type: '@cart/FAILURE_ADD_TO_CART',
  };
}

export function resetToCart() {
  return {
    type: '@cart/RESET_TO_CART',
  };
}