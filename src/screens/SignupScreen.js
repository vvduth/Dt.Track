import React,{useState, useContext} from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SingupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //console.log(state);

    return (
    <View style = {styles.container}>

        <AuthForm 
            headerText="Sign Up for Dt.Track"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            //onSubmit={({email,password}) => signup({email,password})}
            onSubmit = {signup} //dont need to pass parm cuz it already declared upper
        />
        
        <TouchableOpacity onPress = {() =>   navigation.navigate('Signin')}>
            <Spacer>
                <Text style = {styles.link}>Already have an account? Sign in instead</Text>
            </Spacer>
        </TouchableOpacity>
    </View>
    );
};

SingupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", 
        
    },
    errorMessage: {
        fontSize: 16 ,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue',
    }
});

export default SingupScreen ;