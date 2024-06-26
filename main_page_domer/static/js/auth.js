const form_login_button = document.querySelector('#form_login_button')
const form_register_button = document.querySelector('#form_register_button')
const error_name_register = document.querySelector('.error_name_register')
const error_phone_register = document.querySelector('.error_phone_register');
const error_email_register = document.querySelector('.error_email_register');
const error_pass_not_match_register = document.querySelector('.error_pass_not_match_register');
const error_bad_password_register = document.querySelector('.error_bad_password_register')
// Для обнуленя значения поля
const field_password2_register_form = document.querySelector('#id_password2');


form_login_button.addEventListener('click', login_fn)
form_register_button.addEventListener('click', register_fn)

const token = getCookie('csrftoken')

function login_fn() {
    const form_login_data = new FormData(document.querySelector('.login_form'));
    const field_password_login_form = document.querySelector('#password_login_field');
    const login_errors = document.querySelector('#login_form_error');
    fetch('http://127.0.0.1:8000/users/login/', {
        method: 'POST',
        headers: {"X-CSRFToken": token},
        body: form_login_data
    })
        .then(response => response.json())
        .then(data => {
                console.log(data.errors);
                if (data.success) {
                    window.location.href = 'users/personal_account';
                } else if (data.errors === 1) {
                    login_errors.innerHTML = 'Неверный email или пароль'
                    field_password_login_form.value = null;
                }
            }
        )
}





function register_fn() {
    fetch('http://127.0.0.1:8000/users/register/', {
        method: 'POST',
        headers: {"X-CSRFToken": token},
        body: new FormData(document.querySelector('#register_form'))
    })
        .then(response => response.json())
        .then(data => {

            if (data.success) {
                window.location.href = '/';
            }

            if (data.errors) {
                reset()
            }

            if (data.errors.name) {
                error_name_register.innerHTML = data.errors.name;
            } else {
                error_name_register.innerHTML = ''
            }

            if (data.errors.phone) {
                error_phone_register.innerHTML = data.errors.phone;
            } else {
                error_phone_register.innerHTML = '';
            }
            if (data.errors.email) {
                error_email_register.innerHTML = data.errors.email;
            } else {
                error_email_register.innerHTML = '';
            }
            if (data.errors.password) {
                error_bad_password_register.innerHTML = data.errors.password;
            } else {
                error_bad_password_register.innerHTML = '';
            }
            if (data.errors.password2) {
                error_pass_not_match_register.innerHTML = data.errors.password2;
                field_password2_register_form.value = null
            } else {
                error_pass_not_match_register.innerHTML = '';
            }

        })
}



function reset() {
    grecaptcha.reset();
}



function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue
}
