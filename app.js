let para = document.createElement("new");
let form = document.getElementById("form");
let section = document.getElementById("section");

function render(event) {
  event.preventDefault();
  let form = event.target;
  let name = form.fullName.value;
  let email = form.email.value;
  let password = form.password.value;
  let birthday = form.birthday.value;
  let gender = form.gender.value;
  let phone = form.phone.value;
  let diseases = form.diseases.value;

  // Regular expressions for validation
  var usernameRegex = /^\S+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^07\d{8}$/;

  // Validation checks
  var isValid = true;
  if (!usernameRegex.test(name)) {
    isValid = false;
    alert("Username must not contain spaces.");
  }
  if (!passwordRegex.test(password)) {
    isValid = false;
    alert(
      "Password must be at least 8 characters long and contain at least one number, uppercase letter, and special character."
    );
  }
  if (!birthdayRegex.test(birthday)) {
    isValid = false;
    alert("Please enter a valid date of birth in the format YYYY-MM-DD.");
  }
  if (!emailRegex.test(email)) {
    isValid = false;
    alert("Please enter a valid email address.");
  }
  if (!phoneRegex.test(phone)) {
    isValid = false;
    alert("Phone number must be 10 digits starting with 07.");
  }

  // If all fields are valid, proceed with form submission
  if (isValid) {
    const patient = [name, email, password, birthday, gender, phone, diseases];
    localStorage.setItem("jsonPatient", JSON.stringify(patient));

    let card = JSON.parse(localStorage.getItem("jsonPatient"));

    const patient1 = new newPatient(
      card[0],
      card[1],
      card[2],
      card[3],
      card[4],
      card[5],
      card[6]
    );

    let u_img = document.createElement("img");
    let li_name = document.createElement("p");
    let li_email = document.createElement("p");
    let li_pass = document.createElement("p");
    let li_birth = document.createElement("p");
    let li_gender = document.createElement("p");
    let li_phone = document.createElement("p");
    let li_dis = document.createElement("p");

    li_name.innerHTML = "User name : " + card[0];
    li_email.innerHTML = "Email : " + card[1];
    li_pass.innerHTML = "Password : " + card[2];
    li_birth.innerHTML = "Birth day : " + card[3];
    li_gender.innerHTML = "Gender : " + card[4];
    li_phone.innerHTML = "Phone : " + card[5];
    li_dis.innerHTML = "Disease : " + card[6];

    section.appendChild(u_img);
    section.appendChild(li_name);
    section.appendChild(li_email);
    section.appendChild(li_pass);
    section.appendChild(li_birth);
    section.appendChild(li_gender);
    section.appendChild(li_phone);
    section.appendChild(li_dis);

    u_img.src =
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";
    u_img.style.width = "150px";
    u_img.style.borderRadius = "100px";
    u_img.style.marginBottom = "15px";

    section.style.backgroundColor = " rgb(0, 0, 0, 0.7)";
  }
}
form.addEventListener("submit", render);

// Contructor
function newPatient(name, password, birthday, gender, phone, diseases) {
  this.name = name;
  this.password = password;
  this.birthday = birthday;
  this.gender = gender;
  this.phone = phone;
  this.diseases = diseases;
}
