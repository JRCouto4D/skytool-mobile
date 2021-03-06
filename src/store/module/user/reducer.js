/* eslint-disable no-fallthrough */
import producer from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return producer(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
      }

      default:
    }
  });
}
