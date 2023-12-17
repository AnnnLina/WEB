const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const surnameInput = document.getElementById("surname");
  const nameInput = document.getElementById("name");
  const patronymicInput = document.getElementById("patronymic");
  const emailInput = document.getElementById("email");



  const surname = surnameInput.value.trim();
  const name = nameInput.value.trim();
  const patronymic = patronymicInput.value.trim();
  const email = patronymicInput.value.trim();


  if (!surname || !name || !patronymic || !email) {
    alert("Пожалуйста, заполните все обязательные поля.");
    return;
  }


  if (!isValidName(surname) ) {
    alert("Пожалуйста, введите корректные значения в поле Фамилия.");
    return;
  }
  if (!isValidName(name) ) {
    alert("Пожалуйста, введите корректные значения в поля Имя.");
    return;
  }
  if (!isValidName(patronymic) ) {
    alert("Пожалуйста, введите корректные значения в поля Отчество.");
    return;
  }
  if (!isValidName(email) ) {
    alert("Пожалуйста, введите корректные значения в поля E-mail.");
    return;
  }


  surnameInput.value = "";
  nameInput.value = "";
  patronymicInput.value = "";
  genderInput.value = "male";
});

function isValidName(name) {
  const namePattern = /^[a-zA-ZА-Яа-я]+$/;
  return namePattern.test(name);
}