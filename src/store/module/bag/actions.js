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

export function addToCartSuccess(sale_id, item) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { sale_id, item },
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

export function removeToItemCart(item_id) {
  return {
    type: '@cart/REMOVE_TO_ITEM_CART',
    payload: { item_id },
  };
}

export function addToCartFailure() {
  return {
    type: '@cart/FAILURE',
  };
}

export function createToSale(sale_id) {
  return {
    type: '@cart/CREATE_SALE',
    payload: { sale_id },
  };
}

export function cancelToSaleRequest(sale_id) {
  return {
    type: '@cart/CANCEL_SALE_REQUEST',
    payload: { sale_id },
  };
}

export function cancelToSaleSuccess() {
  return {
    type: '@cart/CANCEL_SALE_SUCCESS',
  }
}