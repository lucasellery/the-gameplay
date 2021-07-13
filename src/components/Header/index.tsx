import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


import { theme } from "../../global/styles/theme";

import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type Props = {
  title: string;
  action?: ReactNode;
};

export const Header: React.FC<Props> = ({ title, action }) => {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  }
});
