let para = document.createElement("new");
let form = document.getElementById("form");
let card = document.getElementById("userInfo");

function render(event) {
  event.preventDefault();
  let form = event.target;
  let name = form.fullName.value;
  let password = form.password.value;
  let birthday = form.birthday.value;
  let gender = form.gender.value;
  let phone = form.phone.value;
  let diseases = form.diseases.value;

  const patient = [name, password, birthday, gender, phone, diseases];
  const myPatient = JSON.stringify(patient);
  localStorage.setItem("jsonPatient", myPatient);
  card.innerHTML =
    "Name: " +
    name +
    "<br/>" +
    "password: " +
    password +
    "<br/>" +
    "birthday: " +
    birthday +
    "<br/>" +
    "gender: " +
    gender +
    "<br/>" +
    "phone: " +
    phone +
    "<br/>" +
    "diseases: " +
    diseases +
    "<br/>";
  let newPara = document.createElement("p");
  para.appendChild("newPara");
}
form.addEventListener("submit", render);

// Contructor
function newPatient(name, password, birthday, gender, phone, diseases) {
  this.Name = name;
  this.password = password;
  this.birthday = birthday;
  this.gender = gender;
  this.phone = phone;
  this.diseases = diseases;
}
const patient1 = new newPatient(
  name,
  password,
  birthday,
  gender,
  phone,
  diseases
);
