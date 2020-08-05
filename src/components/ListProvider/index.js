/* eslint-disable no-nested-ternary */
import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { MaterialIcons } from '@expo/vector-icons';

import {
  BoxLeft,
  Image,
  Info,
  Provider,
  Sector,
  Evaluation,
  Note,
  Status,
} from './styles';

const ListProvider = ({ provider, category, navigation }) => {
  const note = [1, 2, 3, 4, 5];

  const styles = StyleSheet.create({
    containerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,

      backgroundColor: '#FFF',
      alignSelf: 'stretch',
      marginRight: 10,
      marginBottom: 15,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 4,

      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <RectButton
      style={styles.containerStyle}
      onPress={() => navigation.navigate('Menu', { provider, category })}>
      <BoxLeft>
        <Image
          source={{
            uri: provider
              ? provider.avatar.url
              : 'https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=SKYTOOL',
          }}
        />
        <Info>
          <Provider>{provider ? provider.name : ''}</Provider>
          <Sector>{category}</Sector>
          <Evaluation>
            <Note
              data={note}
              keyExtractor={(item) => String(item)}
              renderItem={() => (
                <MaterialIcons name="star" size={15} color="#F1993B" />
              )}
            />
          </Evaluation>
        </Info>
      </BoxLeft>

      <Status open={provider ? provider.open : false}>
        {provider ? (provider.open ? 'ABERTO' : 'FECHADO') : 'FECHADO'}
      </Status>
    </RectButton>
  );
};

ListProvider.propTypes = {
  provider: PropTypes.shape(),
  category: PropTypes.string,
  navigation: PropTypes.shape(),
};

export default ListProvider;
