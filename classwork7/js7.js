// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, engine,) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = () => {
        for (const argumentsKey in this) {
            if(typeof this[argumentsKey] !== "function") console.log(`${argumentsKey} -- ${this[argumentsKey]}`)
        }
    };
    this.increaseMaxSpeed = (newMaxSpeed) => {
        this.maxSpeed = this.maxSpeed + newMaxSpeed;
    };
    this.newYear = (newValue) => {
        this.year = newValue;
    };
    this.addDriver = (driver) => {
        this.driver = driver;
    };
}


let newCar = new Car('bmw','audi',2312, 99999,0.5)

console.log(newCar)
newCar.info()
newCar.drive(40)
newCar.increaseMaxSpeed(20)
newCar.newYear(2020)
newCar.addDriver('Vasil')
console.log(newCar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car2 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info () {
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !== "function"){
                console.log(`${argumentsKey} -- ${this[argumentsKey]}`)
            }
        }
    };

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    newYear (newValue) {
        this.year = newValue;
    };

    addDriver (driver) {
        this.driver = driver
    }
}

let addCar = new Car2('mercedes', 'germany', 2016, 500, 4.3)
console.log(addCar)
addCar.drive()
addCar.info()
addCar.increaseMaxSpeed(20)
addCar.newYear(2045)
addCar.addDriver('Kupol')
console.log(addCar)









// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Queen {
    constructor(name,age, size,) {
        this.name = name
        this.age = age;
        this.size = size;
    }
}

let Queens = [
    queen = new Queen('zara',18, 34),
    queen = new Queen('vika',16,35),
    queen = new Queen('lera',20,34),
    queen = new Queen('nastya',21,32),
    queen = new Queen('nina',19,37),
    queen = new Queen('zoya',18,36),
    queen = new Queen('varya',15,33),
    queen = new Queen('lesia',16,38),
    queen = new Queen('luda',24,35),
    queen = new Queen('olya',17,31),
];
console.log(Queens)

class King {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let king = new King('ignat', 34, 36)

let love = function (Queens, king){
    for (const item of Queens) {
        if (item.size === king.shoe){
            return `Принц обрав попелюшку: ${item.name}`
        }
    }
};
console.log(love(Queens,king))
