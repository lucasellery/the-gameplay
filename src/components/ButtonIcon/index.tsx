import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

import DiscordImg from '../../assets/discord.png';

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ title, ...rest }) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      
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
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line,

  },
  icon: {
    width: 24,
    height: 18,
  }
})
