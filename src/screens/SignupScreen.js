import React,{useState, useContext} from "react";
import {View, StyleSheet} from 'react-native';
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import { Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SingupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    //console.log(state);

    return (
    <View style = {styles.container}>

        <NavigationEvents onWillBlur = {clearErrorMessage}/>
        <AuthForm 
            headerText="Sign Up for Dt.Track"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            //onSubmit={({email,password}) => signup({email,password})}
            onSubmit = {signup} //dont need to pass parm cuz it already declared upper
        />

        <NavLink
            routeName="Signin"
            text = "Already have an account? Sign in instead"
        />
        
        
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
  
});

export default SingupScreen ;