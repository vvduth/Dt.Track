import { NavigationActions } from "react-navigation";

//access to navigator function in app.js

let navigator ;

export const setNavigator = (nav) => {
    navigator = nav ;

};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}; //similar to useContext