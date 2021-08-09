import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { StyleSheet } from "react-native";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

export const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}) => {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {
            hasCheckBox && (
              <View style={checked ? styles.checked : styles.check} />
            )
          }
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
    borderRadius: 3
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 3
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15
  },
});
