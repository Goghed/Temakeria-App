import { StyleSheet } from "react-native";
import { theme } from "../../themes"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 24        
    },

    titulo: {
        fontFamily: theme.fonts.secondary400,
        color: theme.colors.brown,
        fontSize: 32
    },

    subtitulo: {
        fontFamily: theme.fonts.primary700,
        color: theme.colors.orange,
        fontSize: 30,
        alignSelf: 'flex-end'
    }
})