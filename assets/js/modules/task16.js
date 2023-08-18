//подключаем внешнюю библиотеку Moment.js для удобной работы с датами
import moment from 'moment';
//подключаем русский язык
import 'moment/locale/ru';

const dates = (function () {
    return {
        //для примера сделана функция для выводв текущей даты в консоль
        setTodaysDate: function() {
            const now = moment();
            moment.locale('ru');
            console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
        },
    }
})();

// результат (раскомментировать для проверки):
// console.log(dates.setTodaysDate());

//экспортируем функцию для работы с датами
export {dates};