/*
Задача о замыканиях и области видимости: напишите функцию, 
которая возвращает другую функцию. Внутренняя функция должна 
иметь доступ к переменной, определенной во внешней функции, 
даже после того, как внешняя функция завершила свое выполнение.
*/

//пример простой (счетчик): создаем функцию, которая создает функцию-счетчик
function returnFunc() {
    let currentCount = 1;

   //функция-счетчик, которая считает свои вызовы и возвращает их текущее число
    return function () {
        return currentCount++;
    };
}

/* returnFunc() завершается и функция-счетчик возвращается и сохраняется во внешней переменной counter. 
Возвращённая из makeCounter() функция counter помнит (через [[Scope]]) о том, в каком окружении была создана.
Это и используется для хранения текущего значения счётчика в currentCount.
*/
const counter = returnFunc();

// результат (раскомментировать для проверки):
/*
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
*/

export {
    returnFunc
};