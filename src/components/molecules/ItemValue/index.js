/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Number} from '../../molecules';

const ItemValue = ({label, value, valueColor = '#202020', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(valueColor)} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  // eslint-disable-next-line prettier/prettier
  value: (valueColor) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: valueColor,
  }),
});
