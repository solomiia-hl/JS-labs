//№4 площа трикутника
function TriangleArea(base = 7, height = 3) {
    let area = base * height / 2;
    console.log("Площа трикутника з основою " + base + " і висотою " + height + ": " + area);
    return area;
}

TriangleArea(3, 6);
TriangleArea();


//№5 конструктор Boat
function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this["max tonnage"] = maxTonnage;
    this.brand = brand;
    this["country of registration"] = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function (name, yearsOfExperience, hasFamily) {
    let captain = new Object();
    captain.name = name;
    captain["years of experience"] = yearsOfExperience;
    captain.hasFamily = hasFamily;

    this.captain = captain;
};

let myBoat = new Boat("white", 49.5, 1350, "Sunseeker", "Ukraine");
myBoat.AssignCaptain("Solomiia Hladka", 19, true);

console.log(myBoat);


//№6 класи SimpleCircle та SimpleEllipse

class SimpleCircle {
    constructor(majorRadius) {
        this.majorRadius = majorRadius;
    }

    set majorRadius(value) {
        this._majorRadius = value;
    }
}

class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static getArea(a, b) {
        return Math.PI * a * b;
    }
}

let circle = new SimpleCircle(11);
console.log(circle);
 
circle.majorRadius = 14;
console.log(circle);
 
let ellipse = new SimpleEllipse(16, 10);
console.log(ellipse);

let ellipseArea = SimpleEllipse.getArea(ellipse._majorRadius, ellipse.minorRadius);
console.log("Площа еліпса: " + ellipseArea);


//№ 7 SubGenerator

function SubGenerator(number) {
    return function (x) {
        return x - number;
    };
}

let firstSub = SubGenerator(12.75);
let secondSub = SubGenerator(41);

console.log("60.5 - 12.75 = " + firstSub(60.5));
console.log("19.25 - 12.75 = " + firstSub(19.25));
console.log("93 - 41 = " + secondSub(93));
console.log("30 - 41 = " + secondSub(30));
