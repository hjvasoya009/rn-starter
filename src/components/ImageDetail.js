import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDeatil = (props) => {
    return (    
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDeatil;