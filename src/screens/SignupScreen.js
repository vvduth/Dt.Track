import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native';

const SingupScreen = ({navigation}) => {
    return (
    <>
    <Text style = {{fontSize: 48}}>Signup Screen</Text>
    <Button 
        title = "Sign in" onPress = {() => navigation.navigate('Signin')}
    />  

    <Button 
        title = "Sign in main flow" onPress = {() => navigation.navigate('mainFlow')}
    />  
    </>
    );

};
const styles = StyleSheet.create({});

export default SingupScreen ;