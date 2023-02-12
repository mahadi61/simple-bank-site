
// step 1: add event handler with login button
document.getElementById('btn-submit').addEventListener('click', function(){
//step2: get the email address
// always remember to use .value to get text from input field
const emailField = document.getElementById('user-email');
const email = emailField.value;

// step3: get password
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// danger: do not use email password on the client site
if(email === 'son@baap.com' && password === '1234'){
    window.location = 'bank.html';
}
else{
    alert('Wrong password or email!!!')
}
})