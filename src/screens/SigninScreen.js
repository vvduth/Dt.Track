import React,{useContext} from "react";
import {View, StyleSheet, Text} from 'react-native';
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context} from "../context/AuthContext"


//right after navigate to the screen, on will focus will be called, before we go
//right after we landing on the screen, on did focus will be called
//on will blur will be called right after we about to leaves, before the leave
//ondidblur
const SigninScreen = () => {
    const {state,signin, clearErrorMessage} = useContext(Context);
    return (
        <View style =  {styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm 
                headerText = "Sign In to Your Account"
                errorMessage = {state.errorMessage}
                onSubmit = {signin}
                submitButtonText = "Sign In"
            />
            <NavLink 
                text = "Dont have an account? Sign up now"
                routeName = "Signup"
            />

        </View>
    );
};

SigninScreen.navigationOptions = () => {
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
export default SigninScreen ;