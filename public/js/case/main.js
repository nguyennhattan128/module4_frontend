const BE_SERVER_PORT = "http://127.0.0.1:8181"
const defaultFetchOpts = () => {
    return {
        credentials: "include",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
        },
    }
}

firstTimeCheck();
function removeActiveTopNav() {
    let topBarGroup = document.getElementsByClassName("top-bar");
    for (let i = 0; i < topBarGroup.length; i++) {
        topBarGroup[i].classList.remove("active");
    }
}
function parseJwt(token) {
    if (!token) {
        return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
}

function firstTimeCheck() {
    let data = localStorage.getItem('ACCESS_TOKEN');
    console.log(localStorage);
    if (data) {
        const user = parseJwt(data)
        console.log("parsed Jwt:", user)
        if (user.role == 2) {
            document.getElementById("host-but").style.display = null
            document.getElementById("yours-but").style.display = null
        } else {
            document.getElementById("host-but").style.display = "none"
            document.getElementById("yours-but").style.display = "none"
        }
        document.getElementById("contract-but").style.display = null
        document.getElementById("login-logout").innerHTML = `
                <a href="#" onclick="logout()">Logout</a>
                `;
    } else {
        document.getElementById("host-but").style.display = "none"
        document.getElementById("contract-but").style.display = "none"
        document.getElementById("yours-but").style.display = "none"
        document.getElementById("login-logout").innerHTML = `
                <a href="#" onclick="onloadLogin()">Login</a>
                `;
    }

}