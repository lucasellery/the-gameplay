import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category: React.FC<Props> = () => {
  return (
    <View>

    </View>
  );
}
