import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../themes';
import { MotiView } from 'moti'

export function Botao() {
  return (
    <MotiView 
      from={{translateY: 24, opacity: 0.5}}
      animate={{translateY: 0, opacity: 1}}
      transition={{type: 'timing'}}
      duration={4000}
      delay={1000}
    >
      <TouchableOpacity
        style={styles.botao}
        activeOpacity={.8}
      >
        <Text style={styles.textoBotao}>
          Comprar
        </Text>

        <Feather
          name="shopping-cart"
          size={24}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </MotiView>    
  );
}