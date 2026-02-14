// Блокировка всех событий перетаскивания
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
}, true);

// Проверка URL параметра для открытия нужной формы
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const formType = urlParams.get('form');
    
    if (formType === 'signup') {
        toggleForms();
    }
});

// Переключение между формами логина и регистрации
function toggleForms(event) {
    if (event) {
        event.preventDefault();
    }
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

// Показ/скрытие пароля с придержанием
const toggleButtons = document.querySelectorAll('.toggle-password');

toggleButtons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const wrapper = button.closest('.input-wrapper');
        const input = wrapper.querySelector('.password-input');
        input.type = 'text';
    });

    button.addEventListener('mouseup', (e) => {
        e.preventDefault();
        const wrapper = button.closest('.input-wrapper');
        const input = wrapper.querySelector('.password-input');
        input.type = 'password';
    });

    button.addEventListener('mouseleave', () => {
        const wrapper = button.closest('.input-wrapper');
        const input = wrapper.querySelector('.password-input');
        input.type = 'password';
    });
});

// Валидация username, password и email - только английский язык
const usernameInputs = document.querySelectorAll('input[placeholder="Username"]');
const passwordInputs = document.querySelectorAll('.password-input');
const englishOnlyInputs = document.querySelectorAll('.english-only');

function validateEnglishOnly(input) {
    input.addEventListener('input', (e) => {
        // Разрешаем только английские буквы, цифры и спецсимволы
        const englishRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':",./<>?|`~@.]*$/;
        
        if (!englishRegex.test(input.value)) {
            // Удаляем последний введённый символ если это не английский
            input.value = input.value.slice(0, -1);
        }
    });
}

usernameInputs.forEach(input => validateEnglishOnly(input));
passwordInputs.forEach(input => validateEnglishOnly(input));
englishOnlyInputs.forEach(input => validateEnglishOnly(input));