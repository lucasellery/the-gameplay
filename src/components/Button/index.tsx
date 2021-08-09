import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
}

export const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    > 
      <Text style={styles.title}>
        {title}
      </Text>

    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: theme.fontSizes.simpleText,
    textAlign: 'center',
    fontFamily: theme.fonts.text500
  }
})
