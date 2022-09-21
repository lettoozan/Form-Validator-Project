const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const re_password = document.getElementById('re-password');

// function error(input) {
//     input.className = 'form-control is-invalid'
// }
// function success(input) {
//     input.className = 'form-control is-valid'
// }

username.addEventListener('input', validate);


function validate(e) {

    if(username.value.length <= 3 || username.value.indexOf(" ") != -1) {
        username.className = ('form-control is-invalid');
        console.log(username.value.indexOf(" "));
    }
    else {
        username.className = ('form-control is-valid');
        console.log(username.value.indexOf(" "));
    }
}


form.addEventListener('input', function(e) {
    e.preventDefault();
    
    // if(username.value === '') {
    //     error(username);
    // }else {
    //     success(username)
    // }
    // if(email.value === '') {
    //     error(email);
    // }else {
    //     success(email);
    // }
    // if(phone.value === '') {
    //     error(phone);
    // }else {
    //     success(phone);
    // }
    // if(password.value === '') {
    //     error(password);
    // }else {
    //     success(password);
    // }
    // if(re_password.value === '') {
    //     error(re_password);
    // }else {
    //     success(re_password);
    // }
});