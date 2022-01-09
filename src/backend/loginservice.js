let LoginService = {
    Login : () => {
        document.cookie="LogState=true; path=/";
    },
    Logout : () => {
        document.cookie="LogState=false; path=/";
    },
    fetch : () => {
        let x = document.cookie;
        let arr = x.split(";");
        let cNameIdx = arr.findIndex(item => item.includes("LogState"));
        let state = (cNameIdx === -1) ? {loggedIn : false} : {loggedIn : arr[cNameIdx].slice(9)};
        return state;
    }
}

export default LoginService;