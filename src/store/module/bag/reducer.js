import produce from 'immer';

const INITIAL_STATE = {
  sale_id: null,
  item: [],
  loading: false,
};

export default function addCart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cart/ADD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@cart/ADD_SUCCESS': {
        const { sale_id, item } = action.payload;
        draft.sale_id = sale_id;
        draft.item.push(item);
        draft.loading = false;
        break;
      }

      case '@cart/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@cart/UPDATE_SUCCESS': {
        const { item_id, data } = action.payload;
        const productIndex = state.item.findIndex((p) => p.id === item_id);

        if (productIndex >= 0) {
          draft.item[productIndex].amount = data.amount;
          draft.item[productIndex].comments = data.comment;
          draft.loading = false;
        }
      }

      case '@cart/REMOVE': {
        draft.loading = true;
        const { item_id } = action.payload;
        const productIndex = state.item.findIndex((p) => p.id === item_id);

        if (productIndex >= 0) {
          draft.item.splice(productIndex, 1);
        }
        draft.loading = false;
        break;
      }

      case '@cart/FAILURE': {
        draft.loading = false;
        break;
      }

      case '@cart/CREATE_SALE': {
        const { sale_id } = action.payload;
        draft.sale_id = sale_id;
        break;
      }

      case '@cart/CANCEL_SALE_SUCCESS': {
        draft.sale_id = null;
        draft.item = [];
        draft.loading = false;
        break;
      }

      default:
    }
  });
}