export function addToCartRequest(product_id, provider_id, data) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: {
      product_id,
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

export function updateToCartRequest(item_id, data) {
  return {
    type: '@cart/UPDATE_REQUEST',
    payload: { 
      item_id, 
      data,
    },
  };
}

export function updateToCartSuccess(item_id, data) {
  return {
    type: '@cart/UPDATE_SUCCESS',
    payload: { 
      item_id,
      data,
    },
  };
}

export function removeToCart(item_id) {
  return {
    type: '@cart/REMOVE',
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