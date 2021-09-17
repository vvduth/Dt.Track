import React,{useState, useContext} from "react";
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext} from "../context/AuthContext";

const SingupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //console.log(state);

    return (
    <View style = {styles.container}>
        <Spacer>
            <Text h3>Sign up for Dt.Track </Text>
        </Spacer>
        <Input 
            label = "Email" 
            value={email} 
            onChangeText= {(newEmail)=>setEmail(newEmail)}
            autoCapitalize = "none"
            autoCorrect = {false}    
        />
        <Input 
            secureTextEntry
            label = "Password"
            value = {password}
            onChangeText = {setPassword}
            autoCapitalize = "none"
            autoCorrect = {false}   
        />
        {state.errorMessage ? <Text style = {styles.errorMessage}>{state.errorMessage}</Text> : null}  
        <Spacer>
                <Button title = "Sign Up" onPress={()=> signup({email,password})} />
        </Spacer>
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
    }
});

export default SingupScreen ;