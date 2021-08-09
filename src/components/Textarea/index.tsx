import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';

export function Textarea({...rest}: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
    />
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: theme.fontSizes.subtitle,
    marginRight: 4,
    textAlign: 'center'
  }
})
