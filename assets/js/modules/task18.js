/*
Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.
*/

/*
Решение вопроса было взято отсюда:
https://stackoverflow.com/questions/2989284/what-is-the-max-size-of-localstorage-values 

https://stackoverflow.com/questions/34245593/html5-localstorage-useful-functions-javascript-typescript
*/

//тестово записываем данные в localStorage.
localStorage.setItem('hi', 'hello');
localStorage.setItem('привет', 'здравствуйте');
/*
далее делаем тест, который будет тестировать установку все более крупных строк текста 
до тех пор, пока браузер не выдаст исключение. 
*/
function getLocalStorageMaxSize() {
    if (localStorage && !localStorage.getItem('size')) {
        var i = 0;
        try {
            // тест до 10MB
            for (i = 250; i <= 10000; i += 250) {
                localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
            }
            /*
            в исключении происходит очистка testовых данных и запись в localStorage
            нового ключа, хранящего в себе максимальный размер памяти localStorage в килобайтах.
            */
        } catch (e) {
            localStorage.removeItem('test');
            localStorage.setItem('size', i - 250);
        }
    }
}

// результат (раскомментировать для проверки):
// getLocalStorageMaxSize();
// console.log(localStorage.getItem('size') + ' kb');
