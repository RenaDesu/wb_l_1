/*
Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
Напишите код, который сортирует этот массив по возрастанию возраста, 
а при равных возрастах сортирует по алфавиту по полю name.
*/

//массив на вход
const PERSONS = [{
        name: "John",
        age: 25
    },
    {
        name: "Jack",
        age: 27
    },
    {
        name: "Justin",
        age: 16
    },
    {
        name: "Jane",
        age: 34
    },
    {
        name: "Jasper",
        age: 25
    },
    {
        name: "Jakob",
        age: 16
    },
    {
        name: "Julia",
        age: 25
    }
];

//функция сортирует массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name
function sortObj(obj) {
    //для сортировки используется метод массива sort()
    obj.sort((x, y) => {
        //сортировка по age:
        //если меньше 0, сортировка поставит x по меньшему индексу, чем y
        if (x.age < y.age) {
            return -1;
        }
        //если больше 0, сортировка поставит y по меньшему индексу, чем x
        if (x.age > y.age) {
            return 1;
        }

        //если возраст совпадает, то сортируем по name (toLowerCase() чтобы все в одном регистре было)
        if (x.name.toLowerCase() < y.name.toLowerCase()) {
            return -1;
        }
        if (x.name.toLowerCase() > y.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    //выводим отсортированный массив в консоль для проверки
    console.log(obj);
}


// результат (раскомментировать для проверки):
// console.log(sortObj(PERSONS));

export {
    sortObj
};