import React,{createContext, useReducer} from "react";
import {login, logout, fetch} from "./actions";
import LoginService from "../backend/loginservice";

const initialState = {loggedIn: false};
const authStore = createContext();

const {Provider} = authStore;

const AuthProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state = initialState, action) => {
        switch(action.type) {
            case login:
                LoginService.Login();
                state = {loggedIn: true};
                return state;
            case logout:
                LoginService.Logout();
                state = {loggedIn: false};
                return state;
            case fetch:
                state = LoginService.fetch();
                return state;
            default:
            throw new Error();
        };
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  
  export { authStore, AuthProvider }