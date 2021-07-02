import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'

export const Home: React.FC = () => {
  return (
    <View style={styles.header}>
      <Profile />
      <ButtonAdd />
    </View>
  );
}
