/*
Задача: Создать и добавить элемент с использованием шаблонов: Напишите функцию, 
которая создает новый элемент с использованием шаблонов (например, с помощью тега <template>) 
и добавляет его в DOM.
*/

const productList = document.querySelector('[data-product-list]');
//находим шаблон и забираем содержимое
const productListItemTemplate = document.querySelector('#product-list-template').content.querySelector('.missing__item');
//создаем фрагмент, дальше пригодится
const productListFragment = document.createDocumentFragment();
const showProductButton = document.querySelector('[data-show]');

const PRODUCT_LIST_DATA = [{
        imgUrl: './public/images/pic1.png',
        imgUrl2x: './public/images/pic1@2x.png',
        title: 'Футболка 1',
        color: 'белый',
        size: '56',
    },
    {
        imgUrl: './public/images/pic1.png',
        imgUrl2x: './public/images/pic1@2x.png',
        title: 'Футболка 2',
        color: 'черный',
        size: '52',
    },
    {
        imgUrl: './public/images/pic1.png',
        imgUrl2x: './public/images/pic1@2x.png',
        title: 'Футболка 3',
        color: 'синий',
        size: '48',
    },
]

// Создает карточки товара, данные для карточек пока берутся из PRODUCT_LIST_DATA
const createProductListItem = () => {
    PRODUCT_LIST_DATA.forEach((product) => {
        //клонируем li и все его содержимое из шаблона
        const productListElement = productListItemTemplate.cloneNode(true);
        //заполняем карточки данными из PRODUCT_LIST_DATA
        //это проверка для загрузки 2х картинок
        if (window.matchMedia('(min-resolution: 2dppx)').matches) {
            productListElement.querySelector('.card__img-pic').src = product.imgUrl2x;
        } else {
            productListElement.querySelector('.card__img-pic').src = product.imgUrl;
        }
        productListElement.querySelector('.card__title').textContent = product.title;
        productListElement.querySelector('.card__color-value').textContent = product.color;
        productListElement.querySelector('.card__size-value').textContent = product.size;
        //заполняем фрагмент карточками, чтобы выгрузить их разом на страницу
        productListFragment.appendChild(productListElement);
    });
    //добавляем фрагмент с карточками в список товаров
    productList.appendChild(productListFragment);
}
//при нажатии на кнопку "добавить продукты", карточки появляются на странице
showProductButton.addEventListener('click', () => {
    createProductListItem();
});