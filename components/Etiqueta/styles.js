import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 88,
    left: 16,

    width: 88,
    height: 200,
    overflow: 'hidden',

    backgroundColor: theme.colors.red,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    borderTopEndRadius: 32,
    alignItems: 'center',
    paddingVertical: 24
  },
  info: {
    marginTop: 16,
    alignItems: 'center',
    marginBottom: 20
  },
  texto: {
    fontFamily: theme.fonts.primary400,
    color: theme.colors.white,
    fontSize: 14
  },
  valor: {
    fontFamily: theme.fonts.secondary400,
    color: theme.colors.white,
    fontSize: 15
  },
});