import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";

export type GuildProps = {
  id: string;
  name: string;
  icon: null,
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export const Appointment: React.FC<Props> = ({ data, ...rest }) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: theme.fontSizes.eighteen,
  },
  category: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24
  }
});
