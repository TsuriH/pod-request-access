const emailValue = document.getElementById('email-input').value
const submit = document.querySelector('button[type="submit"]')
const errorAlert = document.getElementById('attention')

function valdiateEmail(email) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email)
}

submit.addEventListener('click', function () {
    
        if (valdiateEmail(emailValue)) {
            errorAlert.style.display = 'none'
        } else {
            errorAlert.style.display = 'block'
        }
        console.log(emailValue.length)

})