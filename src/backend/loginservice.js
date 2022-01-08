let LoginService = {
    Login : () => {
        console.log("Login");
        document.cookie="LogState=true; path=/";
        //location.reload();
    },
    Logout : () => {
        console.log("Logout");
        document.cookie="LogState=false; path=/";
        //location.reload();
    },
    fetch : () => {
        let x = document.cookie;
        let arr = x.split(";");
        console.log(arr);
        let cNameIdx = arr.findIndex(item => item.includes("LogState"));
        console.log(cNameIdx);
        let state = (cNameIdx === -1) ? {loggedIn : 'false'} : {loggedIn : arr[cNameIdx].slice(9)};
        return state;
    }
}

export default LoginService;