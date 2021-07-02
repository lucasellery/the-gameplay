import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Avatar } from '../Avatar';

export const Profile: React.FC = () => {
  return (
    <View style={styles.container}>

      <Avatar urlImage="https://github.com/lucasellery.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Lucas</Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>

      </View>
    </View>
  );
}
