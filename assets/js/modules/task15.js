/*
Задача на асинхронность: напишите асинхронную функцию, которая 
использует ключевое слово await для ожидания выполнения других 
асинхронных операций, и возвращает результат выполнения.
*/

/*Эта функция, которая использует ключевое слово await 
для ожидания выполнения других асинхронных операций, 
и возвращает результат выполнения (код был взят из 14 задачи)
*/
async function asyncFunc() {
    let response = await fetch('https://renadesu.github.io/cat-energy/img/index-background-cat-desktop.jpg');
    let responseData = await response.blob();
//возвращает результат выполнения 
    return responseData;
}


// результат (раскомментировать для проверки):
// asyncFunc().then(alert);


export {
    asyncFunc
};