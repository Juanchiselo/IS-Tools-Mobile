import React from 'react';
import { Button } from 'react-native';

const SimpleButton = (props) => {
    return (
        <Button title='Add Product'
                onPress={() => props.onPress()}/>
    );
};

export default SimpleButton;