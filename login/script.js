let btnSignin = window.document.getElementById('signin')
let btnSignup = window.document.getElementById('signup')
let body = window.document.querySelector("body")

btnSignin.addEventListener("click", function(){
    body.className = "sign-in-js";
})
 btnSignup.addEventListener("click", function(){
     body.className ="sign-up-js";
 })