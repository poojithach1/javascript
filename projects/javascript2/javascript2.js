initialization();

function initialization() {
    const signinbutton = document.getElementById("signIn-button");
    signinbutton.addEventListener('click',signin);

}


function signin(event) {
    let inputElement = document.getElementById("inputElement");
    let signInTextElement = document.getElementById("signInText");
    let inputValue = inputElement.value
    let verifytext = "hi " + inputValue + ", verify your account";
    signInTextElement.textContent=verifytext;

}