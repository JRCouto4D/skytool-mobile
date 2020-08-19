import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';

import {
  addToCartSuccess,
  createToSale,
  cancelToSaleSuccess,
  updateToItemCartSuccess, 
} from './actions';

import { createSaleSuccess, removeToSale } from '../sale/actions';

export function* addToCart({ payload }) {
  const { product, provider_id, data } = payload;
  let response = null;

  response = yield call(api.get, 'sales', {
    where: {
      provider_id,
      finished_at: null,
      canceled_at: null,
    }
  });

  const sale = response.data;

  if (!sale[0]) {
    response = yield call(api.post, `sales/${provider_id}`);

    const newSale = response.data;

    yield put(createSaleSuccess(newSale));

    if (!newSale.id) {
      Alert.alert(
        'Algo deu errado!',
        'Não foi possível registrar seu item no carrinho, tente novamente mais tarde.');
      return;
    }

    yield put(createToSale(newSale.id));
    
    response = yield call(api.post, 'addItem', {
      product_id: product.id,
      sale_id: newSale.id,
      amount: data.amount,
      comments: data.comment,
    });

    const item = { ...response.data, itemTotal: data.total, product };

    response = yield call(api.get, 'sales', {
      where: {
        id: newSale.id,
      }
    });

    yield put(addToCartSuccess(newSale.id, item));
    return;
  }
  
  response = yield call(api.post, 'addItem', {
    product_id: product.id,
    sale_id: sale[0].id,
    amount: data.amount,
    comments: data.comment,
  });

  const item = { ...response.data, itemTotal: data.total, product };

  if (!item.id) {
    Alert.alert('### Algo deu errado ###', 'Por favor tente mais tarde');
    return;
  }

  yield put(addToCartSuccess(sale[0].id, item));
}

export function* cancelToSale({ payload }) {
  const { sale_id } = payload;

  if (sale_id) {
    yield call(api.delete, `sales/${sale_id}`);
  }

  yield put(cancelToSaleSuccess());
}

export function* updateToItemCart({ payload }) {
  const { item_id, data: dataItem } = payload;

  const response = yield call(api.put, `addItem/${item_id}`, {
    comments: dataItem.comment,
    amount: dataItem.amount,
  });
  
  const data = {
    amount: response.data.amount,
    comments: response.data.comments,
    total: dataItem.total,
  }

  yield put(updateToItemCartSuccess(item_id, data));
  yield put(removeToSale());
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/CANCEL_SALE_REQUEST', cancelToSale),
  takeLatest('@cart/UPDATE_TO_ITEM_CART_REQUEST', updateToItemCart),
]);