import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 1.5;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth * 1.5,
    },
});