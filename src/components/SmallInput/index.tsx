import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';

export function SmallInput({...rest}: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      keyboardType="phone-pad"
      {...rest}
    />
  )
}


const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: theme.fontSizes.subtitle,
    marginRight: 4,
    textAlign: 'center',
  }
})
