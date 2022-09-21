import React from "react";
import { Text, View } from "react-native";
import {styles} from './style'
import { MotiView } from "moti";

export function Cabecalho(){
    return (
        <MotiView 
            from={{scale: 1.5, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{type: 'timing'}}            
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    iFome 手巻き
                </Text>

                <Text style={styles.subtitulo}>
                    Temakeria
                </Text>
            </View>
        </MotiView>
        
    )
}

