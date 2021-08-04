import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../global/styles/theme';

import { Avatar } from '../Avatar';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  data: MemberProps;
}

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online'

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={[
            styles.bulletStatus,
            {
              backgroundColor: isOnline ? on : primary
            }
          ]} />

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: theme.fontSizes.eighteen
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: theme.fontSizes.subtitle
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  }
})