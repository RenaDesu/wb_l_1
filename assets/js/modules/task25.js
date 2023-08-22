/*
Функция makeElement создает новый элемент, добавляет его в DOM и 
устанавливает для него стиль с помощью CSS.
*/

/*
Параметры функции:
tagName - тег создаваемого элемента;
className -  имя класса создаваемого элемента;
text -  текст внутри элемента, если имеется.
*/
const makeElement = function (tagName, className, text) {
    //создаем элемент, имя тега будет передано через аргумент при вызове
    const element = document.createElement(tagName);
    //добавляем класс элементу, имя класса будет передано через аргумент при вызове
    element.classList.add(className);
    //проверка на наличие текста
    if (text) {
        //если текст будет передан при вызове, то добавляем его в элемент
        element.textContent = text;
    }
    //возвоащаем созданный элемент
    return element;
};
//для примера создадим кнопку
const button = makeElement('button', 'button', 'Привет!');

/*
Чтобы добавить кнопку на страницу используем appendChild() для контейнера, 
в который будем добавлять кнопку, и передаем в appendChild() нашу кнопку button
*/

//Чтобы увидеть результат, надо раскомментировать код ниже:
// document.querySelector('[data-container]').appendChild(button);


//Можно и по-другому, например, стиль не через класс задавать, а напрямую из JS (но это, кажется, не очень удобно):
const makeElement2 = function (tagName, text) {
    //создаем элемент, имя тега будет передано через аргумент при вызове
    const element = document.createElement(tagName);
    //задаем немного стилей для демонстрации
    element.style.display = 'block';
    element.style.margin = '20px 0';
    element.style.padding = '10px 30px';
    element.style.backgroundColor = '#cb11ab';
    element.style.color = 'white';
    //проверка на наличие текста
    if (text) {
        //если текст будет передан при вызове, то добавляем его в элемент
        element.textContent = text;
    }
    //возвоащаем созданный элемент
    return element;
};

const button2 = makeElement2('button', 'Привет!');

//Чтобы увидеть результат, надо раскомментировать код ниже:
// document.querySelector('[data-container]').appendChild(button2);