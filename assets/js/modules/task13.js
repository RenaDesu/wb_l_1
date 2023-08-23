/*
Задача на классы и наследование: создайте базовый класс Shape (фигура), 
который имеет методы для расчета площади и периметра. Затем создайте подклассы, 
представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
Реализуйте методы расчета площади и периметра для каждой фигуры.
*/

//создается родительский класс с параметрами и методами для вычисления площади и периметра разных фигур
class Shape {
    constructor(width, height, side3, r) {
        this.width = width;
        this.height = height;
        this.side3 = side3;
        this.r = r;
    }
    //базовый расчет площади (квадрат, прямоугольник)
    calcArea() {
        return this.height * this.width;
    }
    //базовый расчет периметра (квадрат, прямоугольник)
    calcPerimeter() {
        return 2 * (this.height + this.width);
    }
    //расчет периметра треугольника
    calcTrianglePer() {
        return this.height + this.width + this.side3;
    }
    //расчет площади треугольника
    calcTriangleArea() {
        return 0.5 * this.side3 * this.height;
    }
    //расчет площади круга
    calcCircleArea() {
        return 3.14 * (this.r * 2);
    }
    //расчет периметра круга
    calcCirclePer() {
        return 2 * 3.14 * this.r;
    }
}
//подкласс прямоугольник
class Rectangle extends Shape {
    constructor(width, height, name) {
        //забираем конструктор родителя
        super(width, height);
        this.name = name;
    }
    //выводим площадь
    rectArea() {
        return `Площадь ${this.name} равна ${this. calcArea()}`;
    }
    //выводим периметр
    rectPerimeter() {
        return `Пеример ${this.name} равен ${this.calcPerimeter()}`;
    }
}

let rectangle = new Rectangle(30, 20, 'прямоугольника');

//подкласс треугольник
class Triangle extends Shape {
    constructor(width, height, side3, name) {
        //забираем конструктор родителя
        super(width, height, side3);
        this.name = name;
    }
    //выводим площадь
    triangleArea() {
        return `Площадь ${this.name} равна ${this.calcTriangleArea()}`;
    }
    //выводим периметр
    trianglePerimeter() {
        return `Пеример ${this.name} равен ${this.calcTrianglePer()}`;
    }
}

let triangle = new Triangle(25, 25, 30, 'треугольника');

//подкласс круг
class Circle extends Shape {
    constructor(width, height, side3, r, name) {
        //забираем конструктор родителя
        super(width, height, side3, r);
        this.name = name;
    }
    //выводим площадь
    circleArea() {
        return `Площадь ${this.name} равна ${this.calcCircleArea()}`;
    }
    //выводим периметр
    circlePerimeter() {
        return `Пеример ${this.name} равен ${this.calcCirclePer()}`;
    }
}

let circle = new Circle(0, 0, 0, 25, 'круга');


// результат (раскомментировать для проверки):
/*
console.log(rectangle.rectArea());
console.log(rectangle.rectPerimeter());
console.log(triangle.triangleArea());
console.log(triangle.trianglePerimeter());
console.log(circle.circleArea());
console.log(circle.circlePerimeter());
*/

export {
    Shape,
    Rectangle,
    Triangle,
    Circle
};