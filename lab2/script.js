//через new Object() 
let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = new Object();
car1.driver.name = "Соломія Гладка";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

console.log("car1:", car1);

//через літерал об'єкта 
let car2 = {
    color: "black",
    maxSpeed: 180,
    driver: {
        name: "Соломія Гладка",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

console.log("car2:", car2);

// метод drive для car1
car1.drive = function () {
    console.log("I am not driving at night");
};
car1.drive();

// метод drive для car2 
car2.drive = function () {
    console.log("I can drive anytime");
};
car2.drive();

//конструктор Truck 
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    // метод trip
    this.trip = function () {
        if (this.driver === undefined) {
            console.log("No driver assigned");
        } else {
            let message = "Driver " + this.driver.name;
            if (this.driver.nightDriving) {
                message = message + " drives at night";
            } else {
                message = message + " does not drive at night";
            }
            message = message + " and has " + this.driver.experience + " years of experience";
            console.log(message);
        }
    };
}

//метод AssignDriver через prototype
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

//два об'єкти Truck
let truck1 = new Truck("white", 8000, 75.5, "Volvo", "FH16");
let truck2 = new Truck("blue", 7500, 70.3, "MAN", "TGX");

truck1.trip(); 

truck1.AssignDriver("Соломія Гладка", true, 5);
truck2.AssignDriver("Соломія Гладка", false, 2);

truck1.trip();
truck2.trip();

//клас Square
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це чотирикутник, у якого всі сторони рівні і всі кути по 90 градусів.");
    }

    length() {
        console.log("Сума довжин сторін: " + (4 * this.a));
    }

    square() {
        console.log("Площа: " + (this.a * this.a));
    }

    info() {
        console.log("--- Квадрат ---");
        console.log("Сторони: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("Кути: 90, 90, 90, 90");
        this.length();
        this.square();
    }
}

//клас Rectangle 
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - це чотирикутник, у якого всі кути по 90 градусів, а протилежні сторони рівні.");
    }

    length() {
        console.log("Сума довжин сторін: " + (2 * (this.a + this.b)));
    }

    square() {
        console.log("Площа: " + (this.a * this.b));
    }

    info() {
        console.log("--- Прямокутник ---");
        console.log("Сторони: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Кути: 90, 90, 90, 90");
        this.length();
        this.square();
    }
}

//клас Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
    }

    static help() {
        console.log("Ромб - це чотирикутник, у якого всі сторони рівні, протилежні кути рівні, а сума сусідніх кутів 180 градусів.");
    }

    length() {
        console.log("Сума довжин сторін: " + (4 * this.a));
    }

    square() {
        // площа ромба = a * a * sin(гострого кута), кут переводимо у радіани
        let area = this.a * this.a * Math.sin(this.beta * Math.PI / 180);
        console.log("Площа: " + area);
    }

    info() {
        console.log("--- Ромб ---");
        console.log("Сторони: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("Кути: " + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta);
        this.length();
        this.square();
    }
}

//клас Parallelogram (успадкований від Rectangle) 
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм - це чотирикутник, у якого протилежні сторони попарно паралельні і рівні, а протилежні кути рівні.");
    }

    length() {
        console.log("Сума довжин сторін: " + (2 * (this.a + this.b)));
    }

    square() {
        //площа 
        let area = this.a * this.b * Math.sin(this.beta * Math.PI / 180);
        console.log("Площа: " + area);
    }

    info() {
        console.log("--- Паралелограм ---");
        console.log("Сторони: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Кути: " + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta);
        this.length();
        this.square();
    }
}

//статичний метод help 
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

//об'єкти фігур та виклик info
let sq = new Square(5);
let rect = new Rectangle(6, 4);
let rhomb = new Rhombus(7, 120, 60);
let par = new Parallelogram(8, 5, 150, 30);

sq.info();
rect.info();
rhomb.info();
par.info();

// перевірка get та set для ромба
rhomb.a = 10;
console.log("Нова сторона ромба: " + rhomb.a);

//функція Triangular 
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

let triangle1 = Triangular();
let triangle2 = Triangular(6, 8, 10);
let triangle3 = Triangular(7, 7, 7);

console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

//функція PiMultiplier 
function PiMultiplier(number) {
    return function () {
        return Math.PI * number;
    };
}

let multiplyBy2 = PiMultiplier(2);
let multiplyBy2of3 = PiMultiplier(2 / 3);
let divideBy2 = PiMultiplier(1 / 2);

console.log("PI * 2 = " + multiplyBy2());
console.log("PI * 2/3 = " + multiplyBy2of3());
console.log("PI / 2 = " + divideBy2());

//функція Painter 
function Painter(color) {
    return function (obj) {
        if (obj.type === undefined) {
            console.log("No 'type' property occurred!");
        } else {
            console.log(color + " " + obj.type);
        }
    };
}

//функції PaintBlue/Red/Yellow 
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

//тестові об'єкти з таблиці 
let object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

let object2 = {
    type: "Truck",
    "avg speed": 90,
    "load capacity": 2400
};

let object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

PaintBlue(object1);
PaintBlue(object2);
PaintBlue(object3);

PaintRed(object1);
PaintRed(object2);
PaintRed(object3);

PaintYellow(object1);
PaintYellow(object2);
PaintYellow(object3);
