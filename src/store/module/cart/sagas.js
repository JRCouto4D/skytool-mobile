import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';

import {
  addToCartSuccess,
  updateToItemCartSuccess,
  failureAddToCart, 
} from './actions';

import { createSaleSuccess, removeToSale } from '../sale/actions';

export function* addToCart({ payload }) {
  try {
    const { product, provider_id, data } = payload;
    let response = null;

    response = yield call(api.get, `provider/${provider_id}/orders/list`);

    const order = response.data[0];

    if (!order) {
      response = yield call(api.post, `provider/${provider_id}/order/start`);
      const newOrder = response.data;

      yield put(createSaleSuccess(newOrder));

      response = yield call(api.post,
        `order/${newOrder.id}/addItem/${product.id}`,
        {
          amount: data.amount,
          comments: data.comment,
        }
      );

      const item = {
        ...response.data,
        itemTotal: data.total, 
        product,
      }

      yield put(addToCartSuccess(item));
      return;
    }

    response = yield call(api.post,
      `order/${order.id}/addItem/${product.id}`,
      {
        amount: data.amount,
        comments: data.comment,
      }
    );

    const item = {
      ...response.data,
      itemTotal: data.total, 
      product,
    }

    yield put(addToCartSuccess(item));
  } catch (err) {
    yield put(failureAddToCart());
    Alert.alert('### Algo deu errado ###', 'Não foi possível incluir o item ao carrinho.')
  }
}

export function* updateToItemCart({ payload }) {
  const { item_id, data: dataItem } = payload;

  const response = yield call(api.put, `item/${item_id}/update`, {
    comments: dataItem.comment,
    amount: dataItem.amount,
  });
  
  const data = {
    amount: response.data.amount,
    comments: response.data.comments,
    total: dataItem.total,
  }

  yield put(updateToItemCartSuccess(item_id, data));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_TO_ITEM_CART_REQUEST', updateToItemCart),
]);