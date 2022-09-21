import React from "react";
import { View, Text } from "react-native";

import {Botao} from '../Botao'

import {styles} from './style'

export function Rodape(){
    return (
        <View>
            <Text style={styles.titulo}>
                Temaki Salmão
            </Text>
            <Text style={styles.descricao}>
                Nori, Arroz e Salmão. Acompanha Cebolinha Fresca
            </Text>
            <View style={styles.rodapePreco}>
                <Text style={styles.preco}>
                    R$ 34.90
                </Text>
                <Botao />
            </View>
        </View>
    )
}