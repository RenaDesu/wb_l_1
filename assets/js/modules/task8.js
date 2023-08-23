/*
Задача о замыканиях: напишите функцию, которая будет принимать массив функций 
и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и 
возвращает массив результатов, полученных после вызова каждой функции.
*/

//массив функций на вход
const FUNCTIONS = [
    function func1() {
        const x = 'П';
        return x;
    },
    function func2() {
        const x = 'р';
        return x;
    },
    function func3() {
        const x = 'и';
        return x;
    },
    function func4() {
        const x = 'в';
        return x;
    },
    function func5() {
        const x = 'е';
        return x;
    },
    function func6() {
        const x = 'т';
        return x;
    }
];

// Функция, которая принимает массив функций... 
function getCallFunction(functions) {

    /*
    Возвращаемая функция callFunction вызывает каждую функцию в принимаемом массиве
    и возвращает массив результатов, полученных после вызова каждой функции
    */
    function callFunction(func) {
        //создаем пустой массив для записи результатов после вызова функций
        const arr = [];

        func.forEach((f, i) => {
            //в переменную записываем результат вызванной функции
            const result = f();

            //результат вызова функции записываем в ранее созданный массив
            arr.push(result);
        });

        //возвращаем массив из результатов
        return arr;
    }

    //...и возвращает новую функцию
    return callFunction(functions);
}


// результат (раскомментировать для проверки):
// console.log(getCallFunction(FUNCTIONS));

export {
    getCallFunction
};