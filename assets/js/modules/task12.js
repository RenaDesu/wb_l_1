    /*
    Задача на работу с объектами: создайте объект, представляющий собой книгу. 
    Объект должен иметь свойства, такие как: название книги, автор и год издания.
    Напишите методы для получения и изменения значений свойств книги.
    */

    const book = {
        title: 'Мастер и Маргарита',
        author: 'М.А. Булгаков',
        year: 1967,


        //Методы для получения и изменения значений свойств книги:
        //получим название книги
        getTitle() {
            return this.title;
        },
        //получим автора книги
        getAuthor() {
            return this.author;
        },
        //получим год издания книги
        getYear() {
            return this.year;
        },
        //получим всю информацию по книге
        getBook() {
            const book = `${this.title}, автор: ${this.author}, год: ${this.year}`
            return book;
        },
        //метод для изменения названия книги
        changeTitle(newTitle) {
            this.title = newTitle;
        },
        //метод для изменения автора книги
        changeAuthor(newAuthor) {
            this.author = newAuthor;
        },
        //метод для изменения года издания книги
        changeYear(newYear) {
            this.year = newYear;
        }
    }


    // результат (раскомментировать для проверки):
    /*
    console.log(book.getBook());
    console.log(book.changeTitle('Алиса в стране чудес'));
    console.log(book.changeAuthor('Льюис Кэрролл'));
    console.log(book.changeYear(1865));
    console.log(book.getBook());
    */


    export {
        book
    };