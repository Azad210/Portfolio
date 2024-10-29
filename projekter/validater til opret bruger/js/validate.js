
export function validateUsername(username) {
    return username.length >= 3;
  }
 
  export function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  
  export function validatePhone(phone) {
    const phonePattern = /^[0-9]{8,}$/;
    return phonePattern.test(phone);
  }
  
  
  export function validateDob(dob) {
    const today = new Date();
    const dobDate = new Date(dob);
    return dobDate < today && !isNaN(dobDate);
  }
  
 
  export function validatePassword(password) {
    return password.length >= 6;
  }
  
  
  export function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }
  