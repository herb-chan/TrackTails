import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const CustomText = (props: TextProps) => {
  return <Text {...props} style={[props.style, styles.customFont]} />;
};

const styles = StyleSheet.create({
  customFont: {
    fontFamily: 'DeliciousHandrawn',
  },
});

export default CustomText;
