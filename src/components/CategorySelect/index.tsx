import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories  } from '../../utils/categories';
import { Category } from '../Category';

export const CategorySelect: React.FC = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            
          />
        ))
      }
    </ScrollView>
  );
}
