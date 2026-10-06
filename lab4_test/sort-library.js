var SortLib = {};

(function () {
    let compareCount = 0;
    let swapCount = 0;

    function resetCounters() {
        compareCount = 0;
        swapCount = 0;
    }

    //ascending = true - за зростанням, false - за спаданням
    function isWrongOrder(a, b, ascending) {
        compareCount++;
        if (ascending) {
            return a > b;
        } else {
            return a < b;
        }
    }

    function swap(values, i, j) {
        let temp = values[i];
        values[i] = values[j];
        values[j] = temp;
        swapCount++;
    }

    //копіюємо масив без undefined-елементів
    function prepareArray(arr) {
        let values = [];
        let undefinedCount = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                undefinedCount++;
            } else {
                values[values.length] = arr[i];
            }
        }

        return { values: values, undefinedCount: undefinedCount };
    }

    function showReport(methodName, ascending, data) {
        let direction = "за спаданням";
        if (ascending) {
            direction = "за зростанням";
        }

        console.log("=== " + methodName + " (" + direction + ") ===");
        console.log("Кількість порівнянь: " + compareCount);
        console.log("Кількість обмінів / переміщень: " + swapCount);

        if (data.undefinedCount > 0) {
            console.log("Увага! У масиві було " + data.undefinedCount +
                " undefined-елементів. Вони не брали участі у сортуванні і не потрапили у результат.");
        }

        console.log(data.values);
    }

    //Сортування обміном (бульбашкою)
    SortLib.bubbleSort = function (arr, ascending = true) {
        resetCounters();
        let data = prepareArray(arr);
        let values = data.values;

        for (let i = 0; i < values.length - 1; i++) {
            for (let j = 0; j < values.length - 1 - i; j++) {
                if (isWrongOrder(values[j], values[j + 1], ascending)) {
                    swap(values, j, j + 1);
                }
            }
        }

        showReport("Сортування обміном", ascending, data);
        return values;
    };

    //Сортування мінімальних елементів (вибором)
    SortLib.selectionSort = function (arr, ascending = true) {
        resetCounters();
        let data = prepareArray(arr);
        let values = data.values;

        for (let i = 0; i < values.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < values.length; j++) {
                if (isWrongOrder(values[minIndex], values[j], ascending)) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                swap(values, i, minIndex);
            }
        }

        showReport("Сортування мінімальних елементів", ascending, data);
        return values;
    };

    //Сортування вставками
    SortLib.insertionSort = function (arr, ascending = true) {
        resetCounters();
        let data = prepareArray(arr);
        let values = data.values;

        for (let i = 1; i < values.length; i++) {
            let current = values[i];
            let j = i - 1;

            while (j >= 0 && isWrongOrder(values[j], current, ascending)) {
                values[j + 1] = values[j];
                swapCount++;
                j--;
            }
            values[j + 1] = current;
        }

        showReport("Сортування вставками", ascending, data);
        return values;
    };

    //Сортування Шелла
    SortLib.shellSort = function (arr, ascending = true) {
        resetCounters();
        let data = prepareArray(arr);
        let values = data.values;
        let n = values.length;

        let gap = (n - n % 2) / 2;

        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                let current = values[i];
                let j = i;

                while (j >= gap && isWrongOrder(values[j - gap], current, ascending)) {
                    values[j] = values[j - gap];
                    swapCount++;
                    j = j - gap;
                }
                values[j] = current;
            }
            gap = (gap - gap % 2) / 2;
        }

        showReport("Сортування Шелла", ascending, data);
        return values;
    };

    //рекурсивна функція для сортування Хоара
    function quickSortPart(values, left, right, ascending) {
        if (left >= right) {
            return;
        }

        let middle = (left + right - (left + right) % 2) / 2;
        let pivot = values[middle];
        let i = left;
        let j = right;

        while (i <= j) {
            while (isWrongOrder(pivot, values[i], ascending)) {
                i++;
            }
            while (isWrongOrder(values[j], pivot, ascending)) {
                j--;
            }
            if (i <= j) {
                if (i < j) {
                    swap(values, i, j);
                }
                i++;
                j--;
            }
        }

        quickSortPart(values, left, j, ascending);
        quickSortPart(values, i, right, ascending);
    }

    //Сортування Хоара (швидке сортування)
    SortLib.quickSort = function (arr, ascending = true) {
        resetCounters();
        let data = prepareArray(arr);
        let values = data.values;

        quickSortPart(values, 0, values.length - 1, ascending);

        showReport("Сортування Хоара", ascending, data);
        return values;
    };
})();
