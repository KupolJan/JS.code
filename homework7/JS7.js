// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user = [
    new User(2, 'Pasha', 'Kupol', 'fvf@gmai.com', '+380996745638'),
    new User(15, 'Kolya', 'Lupol', 'nhgn@gmai.com', '+380996745731'),
    new User(48, 'Vasya', 'Juk', 'jukv@gmai.com', '+380889745638'),
    new User(33, 'Orest', 'Lys', 'lysor@gmai.com', '+380347245638'),
    new User(21, 'Ostap', 'Ubis', 'ubisof@gmai.com', '+380224545638'),
    new User(4, 'Maks', 'Sad', 'klips@gmai.com', '+380945785638'),
    new User(41, 'Igor', 'Vasilev', 'orgin@gmai.com', '+380932445638'),
    new User(62, 'Oleg', 'Gavrilov', 'gavr@gmai.com', '+380932447246'),
    new User(8, 'Ignat', 'Medov', 'medov@gmai.com', '+380932436458'),
    new User(1, 'Oleksiy', 'Petrenko', 'petrenko@gmai.com', '+380819545638'),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let even = user.filter((item) =>{
    if (item.id %2 === 0){
        return item
    }
})
console.log(even)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sorted = user.sort((a,b) => {
    return a.id - b.id
});
console.log(sorted);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let newArr = [
    new Client(48, 'Jim', 'Lower', 'lvfmvr@gmail.com', '+3806745238', ['phone','charger','phone book',]),
    new Client(62, 'Denis', 'Quiback', 'qazxde@gmail.com', '+3878745238', ['apple','melon','watermelon','pear','potato',]),
    new Client(178, 'Borz', 'Shinobi', 'qwerty@gmail.com', '+3809845238', ['phone','charger','phone book','case','headphones',]),
    new Client(21, 'Saske', 'Uchicha', 'asdsa@gmail.com', '+3804545238', ['tomato','cucumber',]),
    new Client(420, 'Naruto', 'Uzumaki', 'adwsv@gmail.com', '+3987745238', ['phone book',]),
    new Client(5, 'Kakashi', 'Shinobi', 'bgftt@gmail.com', '+3806321238', ['phone','charger','phone book',]),
    new Client(33, 'One', 'PunchMan', 'fbdf@gmail.com', '+3806741578', ['phone','charger','phone book','case',]),
    new Client(88, 'Baki', 'Ydziro', 'dwad@gmail.com', '+3806746751', ['apple','melon','watermelon','pear','potato',]),
    new Client(51, 'Hanma', 'San', 'bfgbf@gmail.com', '+38067453451', ['phone','charger',]),
    new Client(102, 'Sake', 'Yakimura', 'fvdf@gmail.com', '+3806876538', ['phone',]),
]
console.log(newArr)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortItems = newArr.sort((a,b) =>{
    return a.order.length - b.order.length
});
console.log(sortItems)