import React,{createContext, useReducer} from "react";
import {login,logout, setState} from "./actions";

let initialState = {loggedIn : false};
const authStore = createContext();

const {Provider} = authStore;

const AuthProvider = ( { children } ) => {
    const [state, adispatch] = useReducer((state = initialState, action) => {
        switch(action.type) {
            case login:
                state = {loggedIn : true}
                return state;
            case logout:
                state = {loggedIn : false};
                return state;
            case setState:
                state = {loggedIn : action.customstate};
                return state;
            default:
            throw new Error();
        };
    }, initialState);
  
    return <Provider value={{ state, adispatch }}>{children}</Provider>;
  };
  
  export { authStore, AuthProvider }