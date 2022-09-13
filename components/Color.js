import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Color = ({ colorName, hexCode }) => {

  const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      padding: 10,
      margin: 5,
      backgroundColor: hexCode,
    },
  });

  console.warn(colorName);
  return (
    <View>
      <Text
        style={styles.text}
      >{`${colorName} ${hexCode}`}</Text>
    </View>
  );
};



export default Color;
