import React, { useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';

import { theme } from "../../global/styles/theme";

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState("");

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <Header title="Agendar partida" />

          <View>
            <Text
              style={[
                styles.label,
                { marginLeft: 24, marginTop: 36, marginBottom: 18 },
              ]}
            >
              Categoria
            </Text>

            <CategorySelect
              hasCheckBox
              setCategory={setCategory}
              categorySelected={category}
            />

            <View style={styles.form}>
              <RectButton>
                <View style={styles.select}>
                  {
                    // <View style={styles.image} />
                    <GuildIcon />
                  }

                  <View style={styles.selectBody}>
                    <Text style={styles.label}>Selecione um servidor</Text>
                  </View>

                  <Feather
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
                </View>
              </RectButton>

              <View style={styles.field}>
                <View>
                  <Text style={styles.label}>Dia e mês</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2} />
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Hora e minuto</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2} />
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2} />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                styles.field,
                { marginBottom: 12, paddingHorizontal: 24 },
              ]}
            >
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.characterLimit}>Max 100 caracteres</Text>
            </View>

            <Textarea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>

        <ModalView visible={true}>
          <Guilds />
        </ModalView>
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: theme.fontSizes.eighteen,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: "100%",
    height: 68,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: theme.fontSizes.simpleText,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  characterLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: theme.fontSizes.subtitle,
    color: theme.colors.highlight,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 20,
  },
});
