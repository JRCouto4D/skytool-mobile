import produce from 'immer';

const INITIAL_STATE = {
  dataSale: null,
  subtotal: null,
  priceDelivery: null,
};

export default function sale(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@sale/CREATE_SALE_SUCCESS': {
        draft.dataSale = action.payload.newSale;
        break;
      }

      case '@sale/COMPLETE_SALE_SUCCESS': {
        const { data } = action.payload;
        draft.dataSale.total = data.total;
        draft.dataSale.address_id = data.address_id;
        draft.subtotal = data.subtotal;
        draft.priceDelivery = data.priceDelivery;
        break;
      }

      case '@sale/SET_FORM_PAYMENT': {
        const { data } = action.payload;
        draft.dataSale.payment = data.payment;
        draft.dataSale.change_for = data.change_for;
        break;
      }
      
      case '@sale/RESET_SALE': {
        draft.dataSale = null
        draft.subtotal = null;
        draft.priceDelivery = null;
        break;
      }
    }
  })
}