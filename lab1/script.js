// інструкція з використання
console.log("Функція triangle розв'язує прямокутний трикутник за двома заданими елементами.");
console.log("Як викликати: triangle(значення1, \"тип1\", значення2, \"тип2\");");

console.log("Можливі типи:");
console.log("leg - катет");
console.log("hypotenuse - гіпотенуза");
console.log("adjacent angle - прилеглий до катета кут");
console.log("opposite angle - протилежний до катета кут");
console.log("angle - один з гострих кутів (тільки разом з hypotenuse)");

console.log("Кути задаються в градусах.");
console.log("Приклад: triangle(4, \"leg\", 8, \"hypotenuse\");");

function triangle(value1, type1, value2, type2) {
    let temp;

    // якщо катет стоїть другим, міняємо аргументи місцями
    if (type2 === "leg" && type1 !== "leg") {
        temp = value1;
        value1 = value2;
        value2 = temp;

        temp = type1;
        type1 = type2;
        type2 = temp;
    }

    // якщо спочатку angle, а потім hypotenuse, теж міняємо місцями
    if (type1 === "angle" && type2 === "hypotenuse") {
        temp = value1;
        value1 = value2;
        value2 = temp;

        temp = type1;
        type1 = type2;
        type2 = temp;
    }

    // перевіряємо, чи правильна пара типів
    let correctPair = false;

    if (type1 === "leg") {
        if (type2 === "leg" || type2 === "hypotenuse" ||
            type2 === "adjacent angle" || type2 === "opposite angle") {
            correctPair = true;
        }
    }

    if (type1 === "hypotenuse" && type2 === "angle") {
        correctPair = true;
    }

    if (correctPair === false) {
        console.log("Неправильні типи аргументів. Перечитайте інструкцію ще раз.");
        return "failed";
    }

    // перевірка значень
    if (value1 <= 0 || value2 <= 0) {
        return "Значення не можуть бути нульовими або від'ємними";
    }

    if (type2 === "adjacent angle" || type2 === "opposite angle" || type2 === "angle") {
        if (value2 >= 90) {
            return "Кут має бути меншим за 90 градусів";
        }
    }

    if (type2 === "hypotenuse" && value1 >= value2) {
        return "Катет має бути меншим за гіпотенузу";
    }

    let a, b, c, alpha, beta;

    // два катети
    if (type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
    }

    // катет і гіпотенуза
    if (type2 === "hypotenuse") {
        a = value1;
        c = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
    }

    // катет і прилеглий кут (прилеглий до катета a - це кут beta)
    if (type2 === "adjacent angle") {
        a = value1;
        beta = value2;
        alpha = 90 - beta;
        b = a * Math.tan(beta * Math.PI / 180);
        c = a / Math.cos(beta * Math.PI / 180);
    }

    // катет і протилежний кут (протилежний до катета a - це кут alpha)
    if (type2 === "opposite angle") {
        a = value1;
        alpha = value2;
        beta = 90 - alpha;
        b = a / Math.tan(alpha * Math.PI / 180);
        c = a / Math.sin(alpha * Math.PI / 180);
    }

    // гіпотенуза і гострий кут
    if (type2 === "angle") {
        c = value1;
        alpha = value2;
        beta = 90 - alpha;
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.cos(alpha * Math.PI / 180);
    }

    // виводимо результат
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);

    return "success";
}
