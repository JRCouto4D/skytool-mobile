export function createSaleSuccess(newSale) {
  return {
    type: '@sale/CREATE_SALE_SUCCESS',
    payload: { newSale },
  };
}

export function completeSaleSuccess(data) {
  return {
    type: '@sale/COMPLETE_SALE_SUCCESS',
    payload: { data },
  };
}

export function removeToSale() {
  return {
    type: '@sale/REMOVE_TO_SALE',
  }
}