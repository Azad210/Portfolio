import { validateUsername, validateEmail, validatePhone, validateDob, validatePassword, validateConfirmPassword } from './validate.js';

document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();

  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  

  let isValid = true;

  
  if (!validateUsername(username)) {
    document.getElementById('username-error').textContent = 'Brugernavn skal være mindst 3 tegn.';
    isValid = false;
  }

 
  if (!validateEmail(email)) {
    document.getElementById('email-error').textContent = 'Indtast en gyldig email.';
    isValid = false;
  }

  
  if (!validatePhone(phone)) {
    document.getElementById('phone-error').textContent = 'Indtast et gyldigt telefonnummer (mindst 8 cifre).';
    isValid = false;
  }

  
  if (!validateDob(dob)) {
    document.getElementById('dob-error').textContent = 'Indtast en gyldig fødselsdato.';
    isValid = false;
  }

 
  if (!validatePassword(password)) {
    document.getElementById('password-error').textContent = 'Adgangskode skal være mindst 6 tegn.';
    isValid = false;
  }


  if (!validateConfirmPassword(password, confirmPassword)) {
    document.getElementById('confirm-password-error').textContent = 'Adgangskoderne stemmer ikke overens.';
    isValid = false;
  }

  if (isValid) {
    alert('Bruger oprettet succesfuldt!');
   
  }
});
