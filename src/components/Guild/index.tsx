import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})