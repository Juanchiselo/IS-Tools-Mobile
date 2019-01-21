import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_WIDTH = 200;
const BORDER_WIDTH = 1;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderColor: '$white',
        borderBottomWidth: BORDER_WIDTH,
        width: INPUT_WIDTH,
        color: '$white',
        textAlign: 'center',
        margin: 10,
    },
});