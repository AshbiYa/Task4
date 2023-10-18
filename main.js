const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
 if(!validateInputs()){
     e.preventDefault();
 }
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === '') {
    setError(username, ' * Username is required');
  } else {
    setSuccess(username);
  }

  if (emailVal === '') {
    setError(email, ' * Email is required');
  } else if (!validateEmail(emailVal)) {
    setError(email, '* Enter a valid email');
  } else {
    setSuccess(email);
  }

  if (passwordVal === '') {
    setError(password, ' * Password is required');
  } else if (passwordVal.length < 8) {
    setError(password, '* Password must be at least 8 characters long');
  } else {
    setSuccess(password);
  }

  if (cpasswordVal === '') {
    setError(cpassword, '*Confirm Password is required');
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, ' * Passwords does not match');
  } else {
    setSuccess(cpassword);
  }
}

//element-password is required
function setError(element,message){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error');
errorElement.innerText= message;
inputGroup.classList.add('error')
inputGroup.classList.remove('success')


}


function setSuccess(element){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error');
errorElement.innerText= '';
inputGroup.classList.add('success')
inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}





