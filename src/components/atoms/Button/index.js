/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// eslint-disable-next-line react/prop-types
const Button = ({text, colors = '#FFC700', textColor = '#020202', onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(colors)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
    </TouchableOpacity>

  );
};

export default Button;

const styles = StyleSheet.create({
  container: (colors) => ({
    backgroundColor: colors,
    padding: 12,
    borderRadius: 8,
  }),
  text: (textColor) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    textAlign: 'center',
  }),
});
