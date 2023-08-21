//источник, который помог рещить задачу https://habr.com/ru/articles/550534/

let i = 0;

//чтобы получить переполнение стека используем функции, которые рекурсивно вызывают сами себя.
/*
const func = () => {
  i++;

  func();
};

try {
  func();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
  console.log(i);
}
*/
//функция выполнилась 13915 раз в GoogleChrome и Opera, 34209 раз в FireFox; 

/*
const func = () => {
    let a = i + 1;
    i++;
  
    func();
  };
  
  try {
    func();
  } catch (e) {
    console.log(i);
  }
  */
  //функция выполнилась 12528 раз в GoogleChrome и Opera, 27813 раз в FireFox;

/*
Формура расчета размера коллстека такая:

количество байт, которое занимает функция - FunctionSize = N + K * SizeOfVar

N -  Execution Context - контекст вызова функции;
K - сумма размеров всех переменных внутри функции;
SizeOfVar - количество байт, которые занимает переменная в памяти;

X - неизвестный размер коллстэка.

Переменные в вышеобозначенных функциях хранят значение с типом "number".
Числа в JavaScript представлены 64-битными значениями с плавающей запятой. 
В байте 8 бит, в результате каждое число занимает 64/8 = 8 байт.


GoogleChrome
X = (N + 0 *  SizeOfVar)* 13914 = N * 13914
X = (N + 1 * SizeOfVar) * 12528

N * 13914 = (N + 1 * SizeOfVar) * 12528 (приравнять правые части уравнений)

N * 13914 = (N + 8) * 12528
(13914 - 12528) * N = 8 * 12528
1386 * N = 100224
N = 100224 / 1386  (72 байта примерно)
N = 72

размер коллстека в GoogleChrome = 13915 * 72 = 1001880 байт 


FireFox
X = (N + 0 *  SizeOfVar) * 34209 = N * 34209
X = (N + 1 * SizeOfVar) * 27813

N * 34209 = (N + 1 * SizeOfVar) * 27813 (приравнять правые части уравнений)

N * 34209 = (N + 8) * 27813
(34209 - 27813) * N = 8 * 27813
6396 * N = 222504
N = 222504 / 6396  (34 байта примерно)
N = 34

размер коллстека в FireFox = 34209 * 34 = 1163106 байт

Opera
размер коллстека в Opera = 13915 * 72 = 1001880 байт

Safari (нет возможности проверить, к сожалению)
*/