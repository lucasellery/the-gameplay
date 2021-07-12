import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";

type Props = {
  title: string;
  subtitle: string;
};

export const ListHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: theme.fontSizes.eighteen,
    color: theme.colors.heading,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
});
