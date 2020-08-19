import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  dataSale: [],
};

export default function sale(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@sale/CREATE_SALE_SUCCESS': {
        draft.loading = true;
        draft.dataSale = action.payload.newSale;
        draft.loading = false;
        break;
      }

      case '@sale/COMPLETE_SALE_SUCCESS': {
        draft.loading = true;
        const { data } = action.payload;
          draft.dataSale.total = data.total;
          draft.dataSale.address_id = data.address_id;

        draft.loading = false;
        break;
      }

      case '@cart/CANCEL_SALE_SUCCESS': {
        draft.loading = false;
        draft.dataSale = [];
        break;
      }
    }
  })
}