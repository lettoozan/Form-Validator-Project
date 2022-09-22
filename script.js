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

username.addEventListener('input', user_validate);
email.addEventListener('input', email_validate);
phone.addEventListener('input', phone_validate);
password.addEventListener('input', password_validate);
re_password.addEventListener('input', re_password_validate);



function user_validate(e) {
    //Username
    if(username.value.length <= 3 || username.value.indexOf(" ") != -1) {
        username.className = ('form-control is-invalid');
        console.log(username.value.indexOf(" "));
    }
    else {
        username.className = ('form-control is-valid');
        console.log(username.value.indexOf(" "));
    }
}
function email_validate(e) {
    //Email
    if(email.value.length <= 3 || email.value.indexOf(" ") != -1 || email.value.indexOf('@') === -1 || email.value.indexOf('.com') === -1) {
        email.className = ('form-control is-invalid');
        console.log(email.value);
    }
    else {
        email.className = ('form-control is-valid');
        console.log(email.value);
    }
}
function phone_validate(e) {
    //Phone
    if(phone.value.length != 10 || phone.value.indexOf(" ") != -1) {
        phone.className = ('form-control is-invalid');
        console.log(phone.value.length);
    }
    else {
        phone.className = ('form-control is-valid');
        console.log(phone.value.length);
    }
}
function password_validate(e) {
    //password
    if(password.value.length <= 3 || password.value.indexOf(" ") != -1) {
        password.className = ('form-control is-invalid');
    }
    else {
        password.className = ('form-control is-valid');
    }
}
function re_password_validate(e) {
    //re-password
    if(password.value != re_password.value) {
        re_password.className = ('form-control is-invalid');
    }
    else {
        re_password.className = ('form-control is-valid');
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