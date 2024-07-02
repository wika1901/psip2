// Установим обработчик события отправки формы 
document.querySelector("form").addEventListener("submit", function(event) { 
    let nameInput = document.querySelector('input[type="text"]'); 
    let phoneInput = document.querySelector('input[type="tel"]'); 
    let error = false;

 
// Проверка на заполненность полей
if (nameInput.value.trim() === "") {
    showError(nameInput, "Поле обязательно для заполнения");
    error = true;
} else {
    removeError(nameInput);
}

if (phoneInput.value.trim() === "") {
    showError(phoneInput, "Поле обязательно для заполнения");
    error = true;
} else {
    removeError(phoneInput);
}

// Проверка формата телефона
let phonePattern = /^\+?[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
if (!phonePattern.test(phoneInput.value)) {
    showError(phoneInput, "Введите номер телефона в формате +7 (911) 800-80-80");
    error = true;
}

if (error) {
    event.preventDefault(); // Остановить отправку формы в случае ошибок
}
});

// Функция для отображения ошибки 
function showError(input, message) { 
    input.classList.add("error"); 
    let errorMsg = input.nextElementSibling; 
    if (!errorMsg || !errorMsg.classList.contains("error-message")) { 
        errorMsg = document.createElement("div"); 
        errorMsg.classList.add("error-message"); 
        input.parentNode.insertBefore(errorMsg, input.nextSibling); 
        } 
        errorMsg.textContent = message; 
        }

// Функция для удаления ошибки 
function removeError(input) { 
    input.classList.remove("error"); 
    let errorMsg = input.nextElementSibling; 
    if (errorMsg && errorMsg.classList.contains("error-message")) { 
        errorMsg.remove(); 
        } 
        }
        function validateForm() { 
            const name = document.getElementById('name').value; 
            const phone = document.getElementById('phone').value;
 
                if (name.length > 10) {
                    alert("Имя не должно превышать 17 символов");
                    return false;
                }
            
                if (phone.length < 6 || phone.length > 15) {
                    alert("Неверный формат телефона");
                    return false;
                }
            
                return true;
            }