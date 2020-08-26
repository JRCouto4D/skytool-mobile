import produce from 'immer';

const INITIAL_STATE = {
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
        const { item } = action.payload;
        draft.item.push(item);
        draft.loading = false;
        break;
      }

      case '@cart/UPDATE_TO_ITEM_CART_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@cart/UPDATE_TO_ITEM_CART_SUCCESS': {
        const { item_id, data } = action.payload;
        const productIndex = state.item.findIndex((p) => p.id === item_id);

        if (productIndex >= 0) {
          draft.item[productIndex].amount = data.amount;
          draft.item[productIndex].comments = data.comments;
          draft.item[productIndex].itemTotal = data.total;
        }
        draft.loading = false;
        break;
      }

      case '@cart/REMOVE_TO_CART': {
        draft.loading = true;
        const { item_id } = action.payload;
        const productIndex = state.item.findIndex((p) => p.id === item_id);

        if (productIndex >= 0) {
          draft.item.splice(productIndex, 1);
        }
        draft.loading = false;
        break;
      }

      case '@cart/FAILURE_ADD_TO_CART': {
        draft.loading = false;
        break;
      }

      case '@cart/RESET_TO_CART': {
        draft.item = [];
        draft.loading = false;
        break;
      }
      default:
    }
  });
}