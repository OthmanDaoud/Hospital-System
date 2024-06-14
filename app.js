let para = document.createElement("new");
let form = document.getElementById("form");
let section = document.getElementById("section");

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
  localStorage.setItem("jsonPatient", JSON.stringify(patient));

  let card = JSON.parse(localStorage.getItem("jsonPatient"));

  const patient1 = new newPatient(
    card[0],
    card[1],
    card[2],
    card[3],
    card[4],
    card[5]
  );

  let u_img = document.createElement("img");
  let li_name = document.createElement("p");
  let li_pass = document.createElement("p");
  let li_birth = document.createElement("p");
  let li_gender = document.createElement("p");
  let li_phone = document.createElement("p");
  let li_dis = document.createElement("p");

  li_name.innerHTML = "User name : " + card[0];
  li_pass.innerHTML = "Password : " + card[1];
  li_birth.innerHTML = "Birth day : " + card[2];
  li_gender.innerHTML = "Gender : " + card[3];
  li_phone.innerHTML = "Phone : " + card[4];
  li_dis.innerHTML = "Disease : " + card[5];

  section.appendChild(u_img);
  section.appendChild(li_name);
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
