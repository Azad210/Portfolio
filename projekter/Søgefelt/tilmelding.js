
const params = new URLSearchParams(window.location.search);

const username = params.get("Name");
const surname = params.get("Efternavn");
const email = params.get("Email");
const phone = params.get("Phone");


document.getElementById("displayname").textContent = username;
document.getElementById("displaysurname").textContent = surname;
document.getElementById("displayemail").textContent = email;
document.getElementById("displayphone").textContent = phone;
