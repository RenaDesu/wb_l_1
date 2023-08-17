//Сверх задачи: вывод изображения на экран

const getImage = () => {
    //fetch() возвращает промис
    fetch('https://renadesu.github.io/cat-energy/img/index-background-cat-desktop.jpg')
        .then((response) => {
            //делаем проверку на успешность запроса, если все ок, то возвращается объект ответа
            if (response.ok) {
                return response;
            }
            /*
            если не ок, то бросим исключение:
            как только будет брошено исключение, оно переведёт промис 
            в состояние завершён с ошибкой, и его можно перехватить в catch, 
            чтобы вывести в консоль содержимое ошибки
            */
            throw new Error(`${response.status} — ${response.statusText}`);
        })
        //получаем изобажение
        .then(response => response.blob())
        //дальше добавляем полученное изображение в разметку
        .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);//создаем ссылку
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.style.objectFit = 'cover';
            imageElement.style.width = '100%';
            imageElement.style.height = '100%';
            const container = document.querySelector('.img-container');
            container.appendChild(imageElement);
        })
        .catch((error) => console.log(error));
};


// результат (раскомментировать для проверки):
// getImage();

export {
    getImage
};