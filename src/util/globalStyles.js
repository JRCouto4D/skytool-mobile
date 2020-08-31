import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
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