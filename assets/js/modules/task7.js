//массив функций на вход
const FUNCTIONS = [
    function func1() {
        console.log('Пр');
    },
    function func2() {
        console.log('При');
    },
    function func3() {
        console.log('Прив');
    },
    function func4() {
        console.log('Приве');
    },
    function func5() {
        console.log('Привет');
    }
];


function callFunction(func) {
    /*берем метод массива forEach() и перебираем массив по порядку, 
    вызывая функции из массива по порядку и выводим в консоль их номер
    */
    func.forEach((f, i) => {
        f();
        const num = i + 1;
        console.log('Отработала функция ' + num);
    });
}

// результат (раскомментировать для проверки):
// console.log(callFunction(FUNCTIONS));

export {
    callFunction
};