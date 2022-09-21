import React from "react"
import temake from '../../assets/temake.png'
import {styles} from './style'
import {MotiImage} from 'moti'

export function Prato(){
    return (
        <MotiImage            
            style={styles.prato}
            source={temake}
            resizeMode='contain'
            from={{opacity: 0, translateX: 64}}
            animate={{opacity: 1, translateX: 4}}
            transition={{
                type: 'timing', duration: 3000
            }}            
        />
        
    )
}
