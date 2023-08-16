//JSON для проверки
const JSON_LIST = '[{"band": "Depeche Mode","title": "Enjoy The Silence"},{"band": "Depeche Mode","title": "Precious"},{"band": "Depeche Mode","title": "It`s No Good"},{"band": "Depeche Mode","title": "Personal Jesus"}]';

//Функция преобразования JSON в связный список
function getObj(json) {
    //JSON превращается в JS массив с объектами (список объектов)
    const jsList = JSON.parse(json);

    //Создается класс узла (элемента) списка
    class LinkedListNode {
        // Консруктор создает узел, value - текущий элемент списка, next - ссылка на последующий. next по умолчанию null.
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }

    //Создается класс связного списка
    class LinkedList {
        constructor() {
            //head содержит ссылку на первый элемент списка
            this.head = null;
            //tail содержит ссылку на последний элемент списка
            this.tail = null;
        }

        //Метод добавляет новый элемент в конец списка
        append(value) {
            //Узел
            const newNode = new LinkedListNode(value);

            //Проверка на наличие head и tail в списке (если их не было, то head и tail присваиваем ссылку на узел)
            if (!this.head || !this.tail) {
                this.head = newNode;
                this.tail = newNode;

                return this;
            }

            //Если head и tail уже в списке были, то: берем tail.next и присваиваем ему ссылку на новый узел
            this.tail.next = newNode;
            //Дальше правим ссылку tail на новый узел
            this.tail = newNode;

            //Возвращаем список
            return this;
        }
    }
    //Создаем список
    const list = new LinkedList();

    //Добавляем элементы массива в список
    jsList.forEach((el) => {
        list.append(el);
    });
    //Выводим список в консоль для наглядности
    console.log(list);
}


// результат (раскомментировать для проверки):
// console.log(getObj(JSON_LIST));

export {
    getObj
};