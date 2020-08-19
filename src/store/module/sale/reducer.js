import produce from 'immer';

const INITIAL_STATE = {
  dataSale: null,
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
        break;
      }

      case '@cart/CANCEL_SALE_SUCCESS': {
        draft.dataSale = null
        break;
      }
    }
  })
}