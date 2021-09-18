import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        default:
            return state ;
    }
};

//state === {"error messeage: "error" ", "isSingedIn": false} when some error
//state === {"token": "fjwfohfiojjf"} when suceess


const  signup = (dispatch) => {
    return async ({email,password}) => {
        //make api request to sign up 
        //if sign up. modify our states, say that we are authenticated
        //if fails, reflect error message
        try {
            const response = await trackerApi.post('/signup', {email, password}); 
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token})
            //retrive the token
            navigate('TrackList');
        } catch (err) {
            console.log(err);
            
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
        }

    };
}

const signin = (dispatch) => {
    return ({email,password}) => {
        //try to sign in
        //handle success by updating the state
        // handle failure by showing the err message

    };
}

const signout = (dispatch) => {
    return () => {
        //try to sign in
        //handle success by updating the state
        // handle failure by showing the err message

    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin,signout,signup},
    {token: null, errorMessage: ''}
);

//isSignIn is not super usefuk in this case, change the initial states to token
//no token, not log in