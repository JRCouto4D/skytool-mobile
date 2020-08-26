import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';


export function* confirmToSale({ payload }) {
  try {
    const { data } = payload;
    const { sale_id, payment, change_for, address_id } = data;

    if (change_for) {
      yield call(api.put, `/order/${sale_id}/completed`, {
        payment,
        change_for,
        address_id,
      });

      Alert.alert('### Pedido concluido !!! ###', 'Seu pedido já foi enviado ao prestador.');
    } else {
      yield call(api.put, `/order/${sale_id}/completed`, {
        payment,
        address_id,
      });
      
      Alert.alert('### Pedido concluido !!! ###', 'Seu pedido já foi enviado ao prestador.');
    }
  } catch (err) {
    Alert.alert('### Algo deu errado ###', 'Por favor tente mais tarde.');
  }
}

export default all([
  takeLatest('@sale/CONFIRM_TO_SALE_REQUEST', confirmToSale),
]);