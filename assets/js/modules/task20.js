/*
Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage 
для предыдущей задачи. При изменении данных в localStorage в консоль должен 
выводиться объем занятой памяти / максимальный размер хранилища.
*/

/*
Решение вопроса с подсчетом памяти было взято отсюда:
https://stackoverflow.com/questions/34245593/html5-localstorage-useful-functions-javascript-typescript
*/
import {maxSize} from './task18';

// функция подсчета объема памяти, занимаемого данными в LocalStorage
// key и value занимают объем памяти, равный длине их строки (string.length)
function getLocalStorageUsedSize() {
    var sum = 0;
    for (var i = 0; i < localStorage.length; ++i) {
        var key = localStorage.key(i)
        var value = localStorage.getItem(key);
        //* 2, т.к. 1 символ в строке занимает 2 байта
        sum += (key.length + value.length) * 2;
    }
    return sum / 1024;
}

const usedSize = getLocalStorageUsedSize();

window.addEventListener('storage', () => {
console.log(`объем занятой памяти ${usedSize} KB / максимальный размер хранилища ${maxSize} KB`);
});