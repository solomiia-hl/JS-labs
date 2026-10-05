let seed = 7;

function nextNumber() {
    seed = (seed * 17 + 23) % 211;
    return seed - 100;
}

//Звичайний масив зі 100 елементів
let numbers = [];
for (let i = 0; i < 100; i++) {
    numbers[i] = nextNumber();
}

console.log("ЗВИЧАЙНИЙ МАСИВ");
console.log("Довжина масиву: " + numbers.length);
console.log(numbers);

SortLib.bubbleSort(numbers, true);
SortLib.bubbleSort(numbers, false);
SortLib.selectionSort(numbers, true);
SortLib.selectionSort(numbers, false);
SortLib.insertionSort(numbers, true);
SortLib.insertionSort(numbers, false);
SortLib.shellSort(numbers, true);
SortLib.shellSort(numbers, false);
SortLib.quickSort(numbers, true);
SortLib.quickSort(numbers, false);

//Розріджений масив
let sparseNumbers = [];
for (let i = 0; i < 120; i++) {
    //кожен 4-й елемент залишиться undefined
    if (i % 4 !== 0) {
        sparseNumbers[i] = nextNumber();
    }
}
//елементи з 120 по 149 будуть undefined
sparseNumbers[150] = 77;

console.log("РОЗРІДЖЕНИЙ МАСИВ");
console.log("Довжина масиву: " + sparseNumbers.length);
console.log(sparseNumbers);

SortLib.bubbleSort(sparseNumbers, true);
SortLib.bubbleSort(sparseNumbers, false);
SortLib.selectionSort(sparseNumbers, true);
SortLib.selectionSort(sparseNumbers, false);
SortLib.insertionSort(sparseNumbers, true);
SortLib.insertionSort(sparseNumbers, false);
SortLib.shellSort(sparseNumbers, true);
SortLib.shellSort(sparseNumbers, false);
SortLib.quickSort(sparseNumbers, true);
SortLib.quickSort(sparseNumbers, false);

console.log("Вихідний масив після всіх сортувань (не змінився):");
console.log(numbers);
