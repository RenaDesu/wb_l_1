function strangeNumber(num) {


    //переменная для хранения суммы делителей
    let sum = 0;

    //цикл для перебора чисел от 1 до num / 2 
    for (let i = 1; i <= num / 2; i++) {
        //если num делится на i без остатка, то записываем i в сумму
        if (num % i === 0) {
            sum += i;
        }
    }

    //проверка: равно ли число сумме делителей
    if (num === sum && sum !== 0) {
        console.log(num + ' это странное число');
    } else {
        console.log(num + ' это не странное число');
    }
}

// результат (раскомментировать для проверки):
/*
strangeNumber(28);
strangeNumber(6);
strangeNumber(10);
*/

export {
    strangeNumber
};