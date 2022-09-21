import React from "react";
import { View, StyleSheet} from "react-native";

import { Cabecalho } from "../../components/Cabecalho";
import { Prato } from "../../components/Prato";
import { Rodape } from "../../components/Rodape";
import {Etiqueta} from "../../components/Etiqueta"

import { theme } from "../../themes";


export default function Produto (){
    return (
        <View style={styles.container}>
            <Cabecalho/>
            <Etiqueta/>
            <Prato/>
            <Rodape/>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.rose
    }
})