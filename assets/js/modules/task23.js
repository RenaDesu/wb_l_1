/*
Анализатор сложности пароля: создайте функцию, которая оценивает сложность 
введенного пользователем пароля. Необходимо анализировать длину пароля, 
использование различных символов, наличие чисел и букв в разных регистрах. 
Выведите пользователю оценку сложности пароля и предложите улучшения, 
если пароль слишком слабый.

Решить задачу помог источник (за основу был взят код и доработан): 
https://ru.stackoverflow.com/questions/1061441/%D0%95%D1%81%D1%82%D1%8C-%D0%BB%D0%B8-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D1%8F-%D0%BD%D0%B0-%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C
*/

const form = document.querySelector('[data-password-form]');
const password = form.querySelector('[data-password]');
const label = form.querySelector('[data-password-label]');
const submitButton = form.querySelector('[data-submit-password]');
const message = form.querySelector('[data-message]');

//для оценки рейтинга, максимальный - 4 (входят заглавные и строчные буквы, цифры и спецсимволы)
let rating = 0;
//текст сообщения для пользователя
let messageText = '';

//добавляем обработчик на поле с паролем, чтобы получать то, что ввел пользователь
password.addEventListener('change', (e) => {
    let password = e.target.value; //Берем пароль (который ввел пользователь)
    //для проверки:
    let s_letters = 'qwertyuiopasdfghjklzxcvbnm'; // Буквы в нижнем регистре
    let b_letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'; // Буквы в верхнем регистре
    let digits = '0123456789'; // Цифры
    let specials = '!@#$%^&*()_-+=\|/.,:;[]{}'; // Спецсимволы
    let is_s_letters = false; // Есть ли в пароле буквы в нижнем регистре
    let is_b_letters = false; // Есть ли в пароле буквы в верхнем регистре
    let is_d = false; // Есть ли в пароле цифры
    let is_sp = false; // Есть ли в пароле спецсимволы
    for (let i = 0; i < password.length; i++) {
        // Проверяем каждый символ пароля на принадлежность к тому или иному типу
        if (!is_s_letters && s_letters.indexOf(password[i]) != -1) is_s_letters = true;
        else if (!is_b_letters && b_letters.indexOf(password[i]) != -1) is_b_letters = true;
        else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
        else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    }

    if (is_s_letters) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b_letters) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идет анализ длины пароля и полученного рейтинга, 
    и на основании этого готовится текстовое описание сложности пароля */
    if (password.length < 6 && rating < 3) messageText = 'Простой пароль, длина пароля не менее 6 символов, обязательно используйте строчные и заглавные латинские буквы, цифры, спецсимволы !@#$%^&*()_-+=\|/.,:;[]{}';
    else if (password.length >= 6 && rating == 1) messageText = 'Простой пароль, длина пароля не менее 6 символов, обязательно используйте строчные и заглавные латинские буквы, цифры, спецсимволы !@#$%^&*()_-+=\|/.,:;[]{}';
    else if (password.length >= 6 && rating > 1 && rating < 4) messageText = 'Средний пароль, длина пароля не менее 6 символов, обязательно используйте строчные и заглавные латинские буквы, цифры, спецсимволы !@#$%^&*()_-+=\|/.,:;[]{}';
    else if (password.length >= 6 && rating >= 4) messageText = 'Сложный';   
});
//Добавляем обработчик на форму, чтобы перехватить отправку простого и среднего пароля
form.addEventListener('submit', function (e) {
    if (messageText !== 'Сложный') {
        e.preventDefault();
        //добавляем в span текст сообщения
        message.innerText = `${messageText}`;
    } else {
        //если все ок, выводим окно с сообщением о принятии пароля и очищаем поле с паролем и span с сообщением
        alert(`${messageText}, пароль принят`);
        password.value = ''; 
        message.innerText = '';
    }
});