import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
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
        } catch (err) {
            //console.log(err.message);
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
    {isSignedIn: false, errorMessage: ''}
);