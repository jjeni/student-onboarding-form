function validateAge() {
  let today = new Date();
  let dob = new Date(document.getElementById("dob").value);

  if (isNaN(dob)) {
    document.getElementById("dobError").textContent = "";
    return;
  }

  let age = today.getFullYear() - dob.getFullYear();
  let monthDiff = today.getMonth() - dob.getMonth();
  let dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 21) {
    document.getElementById("dobError").textContent =
      "You must be at least 21 years old to Enroll!";
  } else {
    document.getElementById("dobError").textContent = "";
  }
}

function validateAgeInput() {
  const birthYear = document.getElementById("birthYear").value;
  const errorSpan = document.querySelector(".age-error-message");
  const verifyBtn = document.getElementById("verifyAgeBtn");

  errorSpan.textContent = "";

  if(!birthYear) {
    verifyBtn.disabled = true;
    return false;
  }

  if(!/^\d{4}$/.test(birthYear)) {
    errorSpan.textContent = "Please enter a valid 4-digit year.";
    verifyBtn.disabled = true;
    return false;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(birthYear);

  if (isNaN(age)) {
    errorSpan.textContent = "Please enter a valid birth year.";
    verifyBtn.disabled = true;
    return false;
  }

  if (age < 21) {
    errorSpan.textContent = "You must be at least 21 years old to proceed.";
    verifyBtn.disabled = true;
    return false;
  }

  if (age > 26) {
    errorSpan.textContent = "You must be not older than 26 years.";
    verifyBtn.disabled = true;
    return false;
  }

  verifyBtn.disabled = false;
  return true;

}


function verifyAge() {
  const birthYear = document.getElementById("birthYear").value;
  const errorSpan = document.querySelector(".age-error-message");

  if (!birthYear) {
    errorSpan.textContent = "Please enter your birth year.";
    return;
  }

  if (!/^\d{4}$/.test(birthYear)) {
    errorSpan.textContent = "Please enter a valid 4-digit year.";
    return;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(birthYear);

  if (isNaN(age) || age < 21) {
    errorSpan.textContent =
      "You must be at least 21 years old to access this form.";
    return;
  }

  if (age > 26) {
    errorSpan.textContent = "You must be not older than 26 years.";
    return ;
  }

  this.ageVerified = true;
  const modal = document.getElementById("ageVerificationModal");
  modal.style.display = "none";
}

document.getElementById("verifyAgeBtn").addEventListener("click", verifyAge);

document.getElementById("birthYear").addEventListener("input", validateAgeInput);

document.getElementById("dob").addEventListener("input", validateAge);

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  let isValid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document.getElementById("successMsg").textContent = "";

  const nameRegex = /^[A-Za-z]+$/;
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  if (!nameRegex.test(firstName)) {
    document.getElementById("firstNameError").textContent =
      "Not a valid first name!";
    isValid = false;
  }

  if (!nameRegex.test(lastName)) {
    document.getElementById("lastNameError").textContent =
      "Not a valid last name!";
    isValid = false;
  }

  let passOut = parseInt(document.getElementById("passOut").value);
  let currentYear = new Date().getFullYear();
  if (isNaN(passOut) || passOut > currentYear || passOut < 2020) {
    document.getElementById("passOutError").textContent =
      "Only Graduates from 2020 to 2025 are eligible!";
    isValid = false;
  }

  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let monthDiff = today.getMonth() - dob.getMonth();
  let dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 21) {
    document.getElementById("dobError").textContent =
      "You must be at least 21 years old to Enroll!";
    isValid = false;
  }

  let phone = document.getElementById("phone").value.trim();
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be exactly 10 digits!";
    isValid = false;
  }

  let email = document.getElementById("email").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email!";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").textContent =
      "Your application successfully submited !";
  }
});
