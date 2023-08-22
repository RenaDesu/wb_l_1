/*
Задача: Взаимодействие с формами: 
Напишите функцию, которая получает данные из формы на веб-странице и 
выполняет определенные действия с этими данными, например, отправляет их 
на сервер или отображает всплывающее окно с результатами.
*/

const form = document.querySelector('[data-form]');
const select = document.querySelector('[data-select]');

//showFormData получает данные из формы и отображает их во всплывающем окне в JSON формате
const showFormData = (event) => {
    //перехватываем отправку формы
    event.preventDefault();

    //получаем данные из формы с помощью FormData
    const formData = new FormData(event.target);
    //конвертируем данные из FormData в объект
    //сначала создаем пустой объект
    const formDataObj = {};
    //далее проходимся по formData и добавляем ключи и значения в formDataObj
    formData.forEach((value, key) => (formDataObj[key] = value))
    //конвертируем в JSON и выводим данные в окне
    alert(JSON.stringify(formDataObj));
}

form.addEventListener('submit', showFormData);