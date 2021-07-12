import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../global/styles/theme';

export const ListDivider: React.FC = () => {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginTop: 10,
    marginVertical: 31,
    alignSelf: 'flex-end',
  }
});
