import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { Roboto_400Regular} from "@expo-google-fonts/roboto";

import Produto from "./screens/Produto";

export default function App(){

    const [fontsLoaded] = useFonts({
        Ubuntu_400Regular,
        Ubuntu_500Medium,
        Ubuntu_700Bold,
        Roboto_400Regular
    })

    if (!fontsLoaded){
        return null
    }

    return (
        <Produto/>
    )
}

