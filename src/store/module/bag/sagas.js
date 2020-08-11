import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';

import { addToCartSuccess, createToSale, cancelToSaleSuccess } from './actions';

export function* addToCart({ payload }) {
  const { product_id, provider_id, data } = payload;
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

    if (!newSale.id) {
      Alert.alert(
        'Algo deu errado!',
        'Não foi possível registrar seu item no carrinho, tente novamente mais tarde.');
      return;
    }

    yield put(createToSale(newSale.id));
    
    response = yield call(api.post, 'addItem', {
      product_id,
      sale_id: newSale.id,
      amount: data.amount,
      comments: data.comment,
    });
    const item = response.data;
    yield put(addToCartSuccess(newSale.id, item));
    Alert.alert('Sucesso!', 'Item adicionado ao carrinho!');
    return;
  }
  
  response = yield call(api.post, 'addItem', {
    product_id,
    sale_id: sale[0].id,
    amount: data.amount,
    comments: data.comment,
  });

  const item = response.data;

  if (!item.id) {
    Alert.alert('### Algo deu errado ###', 'Por favor tente mais tarde');
    return;
  }

  yield put(addToCartSuccess(sale[0].id, item));
  Alert.alert('Sucesso!', 'Item adicionado ao carrinho!');
}

export function* cancelToSale({ payload }) {
  const { sale_id } = payload;

  if (sale_id) {
    yield call(api.delete, `sales/${sale_id}`);
  }

  yield put(cancelToSaleSuccess());
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/CANCEL_SALE_REQUEST', cancelToSale),
]);