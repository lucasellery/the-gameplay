import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";;
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

export function Guilds() {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24
  },
  guilds: {
    width: '100%',
  }
})