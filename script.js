const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const re_password = document.getElementById('re-password');


username.addEventListener('input', user_validate);
email.addEventListener('input', email_validate);
phone.addEventListener('input', phone_validate);
password.addEventListener('input', password_validate);
re_password.addEventListener('input', re_password_validate);

var true_username;

function user_validate(e) {
    console.log('username')
    //Username
    if(username.value.length <= 3 || username.value.indexOf(" ") != -1) {
        username.className = ('form-control is-invalid');
        document.getElementById('username_error').innerHTML = 'En az 3 harf olmalı, boşluk kullanılmamamalı';
    }
    else {
        username.className = ('form-control is-valid');
        document.getElementById('username_error').innerHTML = null;
    }
    true_username = username.className;
}
function email_validate(e) {
    console.log(true_username);
    //Email
    if(email.value.length <= 3 || email.value.indexOf(" ") != -1 || email.value.indexOf('@') === -1 || email.value.indexOf('.com') === -1) {
        email.className = ('form-control is-invalid');
        document.getElementById('email_error').innerHTML = 'Lütfen Geçerli bir Mail girin';
    }
    else {
        email.className = ('form-control is-valid');
        document.getElementById('email_error').innerHTML = null;
    }
}
function phone_validate(e) {
    //Phone
    if(phone.value.length != 10 || phone.value.indexOf(" ") != -1) {
        phone.className = ('form-control is-invalid');
        document.getElementById('phone_error').innerHTML = '';
    }
    else {
        phone.className = ('form-control is-valid');
        document.getElementById('phone_error').innerHTML = null;
    }
}
function password_validate(e) {
    //password
    if(password.value.length <= 3 || password.value.indexOf(" ") != -1) {
        password.className = ('form-control is-invalid');
        document.getElementById('password_error').innerHTML = 'En az 3 harf olmalı, boşluk kullanılmamamalı';
    }
    else {
        password.className = ('form-control is-valid');
        document.getElementById('password_error').innerHTML = null;
    }
}
function re_password_validate(e) {
    //re-password
    if(password.value != re_password.value || re_password.value.length <= 3) {
        re_password.className = ('form-control is-invalid');
        document.getElementById('re-password_error').innerHTML = 'En az 3 harf olmalı, boşluk kullanılmamamalı';
    }
    else {
        re_password.className = ('form-control is-valid');
        document.getElementById('re-password_error').innerHTML = null;
        //ex.push("re")
    }
}
console.log(true_username);
if(true_username == ('form-control is valid')) {
    function alert_button() {
        alert("Doğru");
    }
}else {
    function alert_button() {
        alert("Yanlış");
    }
}
//console.log(ex);
// const ex = [(username).value.indexOf(""),(email).value.indexOf("")]

// if (ex[0]===-1){
//     console.log("passeddd");
// }
// if(ex)

// if ((username, email, phone, password, re_password).className == ('form-control is-valid')) {
//     function alert_button() {
//         alert("Doğru");
//     }
// }else {
//     function alert_button() {
//         alert("Yanlış");
//     }
// }

