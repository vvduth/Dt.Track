import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type){
        default:
            return state ;
    }
};


const  signup = (dispatch) => {
    return ({email,password}) => {
        //make api request to sign up 
        //if sign up. modify our states, say that we are authenticated
        //if fails, reflect error message

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
    {isSignedIn: false}
);