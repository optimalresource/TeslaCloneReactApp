import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../StyledButton/styles';

const StyledButton = (props) => {
    // const type = props.type;
    // const onPress = props.onPress;
    // const content = props.content;

    // Destructuring above three lines
    const {type, onPress, content} = props;

    const backgroundColor = type === 'primary' ? '#333333cc' : '#ffffffa6';
    const color = type === 'primary' ? '#ffffffa6' : '#333333cc';
    

    return (
    <View style={styles.container}>
        <Pressable 
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
        // onPress={() => {
        //     console.warn(props.content + ', was pressed');
        // }}
        >
            <Text style={[styles.text, {color: color}]}>{ content }</Text>
        </Pressable>
    </View>
    );
};

export default StyledButton;
