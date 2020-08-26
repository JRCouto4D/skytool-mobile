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

export function setFormPayment(data) {
  return {
    type: '@sale/SET_FORM_PAYMENT',
    payload: { data },
  };
}

export function resetSale() {
  return {
    type: '@sale/RESET_SALE',
  }
}

export function confirmToSaleRequest(data) {
  return {
    type: '@sale/CONFIRM_TO_SALE_REQUEST',
    payload: { data },
  };
}

export function confirmToSaleSuccess() {
  return {
    type: '@sale/CONFIRM_TO_SALE_SUCCESS',
  };
}