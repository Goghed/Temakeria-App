import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';
import { MotiView, useAnimationState } from 'moti';

import { styles } from './styles';
import { theme } from '../../themes';



export function Etiqueta() {

  const etiquetaAnimada = useAnimationState({
    fechada: {
      height: 75
    },

    aberta: {
      height: 180
    }
  })

  function mudaEtiquetaAberta(){
    etiquetaAnimada.transitionTo('aberta')
  }

  function mudaEtiquetaFechada(){
    etiquetaAnimada.transitionTo('fechada')
  }

  return (
    <MotiView style={styles.container} state={etiquetaAnimada} >      

        <Pressable onPressIn={mudaEtiquetaAberta} onPressOut={mudaEtiquetaFechada}>
          <Feather
            name="tag"
            color={theme.colors.white}
            size={26}
          />
        </Pressable>       

        <View style={styles.info}>

          <Text style={styles.texto}>
            Calorias
          </Text>

          <Text style={styles.valor}>
            430
          </Text>

        </View>

        <View style={styles.info}>

          <Text style={styles.texto}>
            Peso
          </Text>

          <Text style={styles.valor}>
            190g
          </Text>

        </View>      

    </MotiView>
    
  );
}