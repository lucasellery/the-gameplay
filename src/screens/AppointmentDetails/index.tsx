import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  FlatList,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { getBottomSpace } from 'react-native-iphone-x-helper';

import ButtonIcon  from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import { theme } from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";

export const AppointmentDetails: React.FC = () => {
  const members = [
    { id: '1',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucasellery.png',
      status: 'online'
    },
    { id: '2',
      username: 'Pedro',
      avatar_url: 'https://github.com/devmarinho.png',
      status: 'offline'
    }
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perde uma partida da m10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 2" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
});
