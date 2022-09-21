import {StyleSheet} from 'react-native'
import {theme} from '../../themes'

export const styles = StyleSheet.create({
    titulo: {
        fontSize: 17,
        fontFamily: theme.fonts.primary700,
        color: theme.colors.brown,
    },

    descricao: {
        fontSize: 14,
        fontFamily: theme.fonts.secondary400,
        color: theme.colors.gray,
        lineHeight: 20,
        marginBottom: 24,
        marginTop: 8
    },

    rodapePreco: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    preco: {
        fontSize: 34,
        fontFamily: theme.fonts.primary700,
        color: theme.colors.brown,
    }
})