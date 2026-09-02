//console.log('Hello!');

const user = [{ user_name: "kay", password: "asdf" },]

function getwebdata() {
    const reconfirmpw = document.getElementById("reconfirmpw")
    const firstmessage = document.getElementById("firstmessage")
    const secondmessage = document.getElementById("secondmessage")
    const signupbutton = document.getElementById("signupbutton")
    const floatingInput = document.getElementById("floatingInput")
    const floatingPassword = document.getElementById("floatingPassword")
    const confirmPassword = document.getElementById("confirmPassword")
    const loginbutton = document.getElementById("loginbutton")
    const dontwantsignup = document.getElementById("dontwantsignup")
    return { reconfirmpw, firstmessage, secondmessage, signupbutton, floatingInput, floatingPassword, confirmPassword, loginbutton, dontwantsignup }
}

function showConfirmPassword() {
    getwebdata()
    secondmessage.innerText = ""
    floatingInput.value = ""
    floatingPassword.value = ""
    confirmPassword.value = ""
    reconfirmpw.style.display = "block"
    firstmessage.style.display = "none"
    secondmessage.style.display = "block"
    signupbutton.style.display = "block"
    loginbutton.style.display = "none"
    dontwantsignup.style.display = "block"

}

function signup() {

    getwebdata()
    if (floatingInput.value == "" || floatingPassword.value == "") {
        console.log("please input username and password")
        secondmessage.innerText = "please input username and password"
    } else {

        if (floatingPassword.value === confirmPassword.value) {
            user.push({ user_name: floatingInput.value, password: floatingPassword.value })
            secondmessage.innerText = "Sign up success, Please process login"
            signupbutton.style.display = "none"
            loginbutton.style.display = "block"
            reconfirmpw.style.display = "none"
            dontwantsignup.display = "none"
            floatingInput.value = ""
            floatingPassword.value = ""

            console.log(user)
        } else {
            secondmessage.innerText = "your password and reconfirm passworrd is not same"
        }
    }
}

function login() {
    getwebdata()

    const name_exits = user.some(i => i.user_name === floatingInput.value)

    if (user.some(i => i.user_name === floatingInput.value) === true) {
        let a = user.findIndex(i => i.user_name === floatingInput.value);

        if (user[a].password === floatingPassword.value) {
            console.log(user[a])
            console.log("correct username and password")
            saveName()
            window.location.href = 'homepage.html';

        } else {
            secondmessage.style.display = "block"
            secondmessage.innerText = "Wrong password or username"

        }
    } else if (floatingInput.value == "" || floatingPassword.value == "") {
        secondmessage.style.display = "block"
        secondmessage.innerText = "please input username and password"

    } else if (user.some(i => i.user_name === floatingInput.value) === false) {
        secondmessage.style.display = "block"
        firstmessage.style.display = "block"
        secondmessage.innerText = "Dont have user data, Please signup"
    }
}



function saveName() {
    localStorage.setItem("username", floatingInput.value);
}

function gobacklogin() {
    getwebdata()
    firstmessage.style.display = "block"
    signupbutton.style.display = "none"
    loginbutton.style.display = "block"
    reconfirmpw.style.display = "none"
    dontwantsignup.style.display = "none"
    floatingInput.value = ""
    floatingPassword.value = ""


}

//export default getwebdata;

window.showConfirmPassword = showConfirmPassword
window.signup = signup
window.getwebdata = getwebdata
window.login = login
window.gobacklogin = gobacklogin