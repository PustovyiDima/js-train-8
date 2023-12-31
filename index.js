// Завдання 1
// В даному завданні створимо функцію, яка використовує метод `Array.from` для створення масиву зі списку користувачів з бази даних.

/**
 * Функція `getUsersFromDatabase` отримує дані користувачів та використовує метод `Array.from` для створення масиву користувачів зі списку.
 * array - Вхідний масив
 * Повертає: Масив користувачів.
 */
function getUsersFromDatabase(array) {
   // Використовуємо метод `Array.from` для створення масиву користувачів зі списку, елементи якого це об'єкти які міститять
   // id який дорівнює id користувача,firstName який дорівнює firstName користувача в верхньому регістрі та years який дорівнює age користувача
   // Повертаємо масив користувачів
   let x = Array.from(
      array,
      function (obj) {
         let { id, name, age } = obj;
         id = id;
         //  console.log(name.toString().toUpperCase());
         let firstName = name.toString().toUpperCase();
         let years = age;
         let res = { id, firstName, years };
         //  console.log(res);
         return res;
      },
      array
   );
   return x;
}

// Приклад використання функції getUsersFromDatabase
const userRecords = [
   { id: 1, name: "John", age: 30 },
   { id: 2, name: "Jane", age: 28 },
   { id: 3, name: "Mike", age: 32 },
];
console.log("Завдання: 1 ==============================");

console.log(getUsersFromDatabase(userRecords));
// Виведе
// [
//   { id: 1, firstName: 'JOHN', years: 30 },
//   { id: 2, firstName: 'JANE', years: 28 },
//   { id: 3, firstName: 'MIKE', years: 32 }
// ]

// Завдання:2 - Видалення останнього елементу з масиву

/**
 * Функція `removeLastElement` видаляє останній елемент з масиву, використовуючи метод `pop`.
 * Якщо масив порожній, повертає `undefined`.
 *  arr - Вхідний масив, з якого буде видалений останній елемент.
 * Повертає Видалений останній елемент або `undefined`, якщо масив порожній.
 */
function removeLastElement(arr) {
   // Перевіряємо, чи масив не є порожнім, якщо порожній повертаємо  undefined
   // Використовуємо метод `pop` для видалення останнього елементу з масиву
   // Повертаємо оновлений масив
   let res = arr ? arr.pop() : undefined;
   return arr;
}

// Приклад використання функції removeLastElement
console.log("Завдання: 2 ==============================");

console.log(removeLastElement([1, 2, 3, 4, 5])); // Виведе [1, 2, 3, 4]

// Завдання: 3 - Фільтрація масиву за певною умовою

/**
 * Функція `filterByCondition` фільтрує вхідний масив за певною умовою, використовуючи метод `filter`.
 *  arr - Вхідний масив, який буде фільтруватись.
 * condition - Функція-умова, яка визначає, чи задовольняє елемент умові.
 * Повертає: Новий масив, який містить елементи, що задовольняють умову.
 */
function filterByCondition(arr, condition) {
   // Використовуємо метод `filter` для фільтрації масиву
   // Повертаємо відфільтрований масив
   let res = arr.filter(condition);
   return res;
}

// Приклад використання функції filterByCondition

let condition = (item) => item % 2 === 0; // Фільтруємо парні числа
console.log("Завдання: 3 ==============================");
console.log(filterByCondition([1, 2, 3, 4, 5], condition)); // Виведе [2, 4]

// Завдання: 4

/**
 * Функція `checkArray` перевіряє, чи є вхідний об'єкт масивом, використовуючи метод `Array.isArray`.
 *  obj - Вхідний об'єкт, який буде перевірятись.
 *Повертає: `true`, якщо об'єкт є масивом, `false` - у протилежному випадку.
 */
function checkArray(obj) {
   // Перевіряємо, чи є об'єкт не null і не undefined
   // Використовуємо метод `Array.isArray` для перевірки, чи є об'єкт масивом
   // Повертаємо результат перевірки
   // Якщо об'єкт є null або undefined, виводимо повідомлення про помилку Помилка: Вхідний об'єкт є null або undefined.
   //Повертаємо false

   return Array.isArray(obj)
      ? true
      : obj == null || obj == undefined
      ? console.log("Помилка: Вхідний об'єкт є null або undefined")
      : false;
}

// Приклад використання функції checkArray
console.log("Завдання:4 ==============================");
console.log(checkArray([1, 2, 3, 4, 5])); // Виведе true
// console.log(checkArray(null));
// Завдання:5 - Створення нового масиву з переданих елементів

/**
 * Функція `createArray` створює новий масив з переданих елементів, використовуючи метод `Array.of`.
 * Повертає: elements - Елементи, з яких буде створений новий масив.
 * Повертає: Новий масив з переданих елементів.
 */
function createArray(...elements) {
   // Перевіряємо, чи кількість переданих елементів більше нуля
   if (elements.length > 0) {
      let arr = Array.of(...elements);
      return arr;
   } else {
      console.log("Помилка");
      return [];
   }
   // Використовуємо метод `Array.of` для створення нового масиву з переданих елементів
   // Повертаємо створений масив
   // Якщо не передано жодного елементу, виводимо повідомлення про помилку
   //Повертаємо пустий масив
}

// Приклад використання функції createArray
console.log("Завдання:5 ==============================");
console.log(createArray(1, 2, 3, 4, 5)); // Виведе [1, 2, 3, 4, 5]

// Завдання: 6 - Отримання елементу масиву за заданим індексом

/**
 * Функція `getElementAtIndex` отримує елемент з масиву за заданим індексом, використовуючи метод `at`.
 *  arr - Вхідний масив.
 *  index - Індекс елементу, який потрібно отримати.
 * Повертає Елемент з масиву за заданим індексом або `undefined`, якщо індекс виходить за межі масиву.
 */
function getElementAtIndex(arr, index) {
   // Перевіряємо, чи масив не є порожнім
   // Повертаємо undefined
   // Перевіряємо, чи індекс знаходиться в межах довжини масиву
   // Отримуємо елемент з масиву за заданим індексом
   // Повертаємо отриманий елемент
   // Якщо індекс виходить за межі масиву,повертаємо undefined
   return arr.length > 0
      ? index <= arr.length
         ? arr.at(index)
         : undefined
      : undefined;
}

// Приклад використання функції getElementAtIndex
console.log("Завдання:6 ==============================");

console.log(getElementAtIndex([1, 2, 3, 4, 5], 2)); // Виведе 3

// Завдання:7

/**
 * Об'єднує два масиви, обертає результат та повертає новий масив.
 *  arr1 - Перший масив.
 *  arr2 - Другий масив.
 * Повертає: Об'єднаний та обернутий масив.
 */
function combineAndReverseArrays(arr1, arr2) {
   // Перевіряємо, чи обидва аргументи є масивами
   //  Якщо ні повертаємо пустий масив
   // Об'єднуємо два масиви за допомогою методу `concat`
   // Обертаємо отриманий об'єднаний масив за допомогою методу `reverse`
   // Повертаємо об'єднаний та обернутий масив
   return Array.isArray(arr1) && Array.isArray(arr2)
      ? arr1.concat(arr2).reverse()
      : [];
}

// Приклад використання функції combineAndReverseArrays
console.log("Завдання:7 ==============================");

console.log(combineAndReverseArrays([1, 2, 3], [4, 5, 6])); //Виведе [ 6, 5, 4, 3, 2, 1 ]

// Завдання: 8

/**
 * Перевіряє, чи масив містить заданий елемент та повертає його індекс(и).
 *  arr - Вхідний масив.
 *  element - Елемент для пошуку.
 * Повертає: Масив індексів, де знайдено елемент, або пустий масив, якщо елемент не знайдено.
 */
function findElementIndexes(arr, element) {
   // Перевіряємо, чи аргумент є масивом
   // якщо ні повертаємо пустий масив
   // Знаходимо індекс першого знайденого елементу за допомогою методу `indexOf`
   // Знаходимо індекс останнього знайденого елементу за допомогою методу `lastIndexOf`
   // Створюємо пустий масив індексів знайдених елементів
   // Додаємо перший знайдений індекс, якщо елемент знайдено
   // Додаємо останній знайдений індекс, якщо він відрізняється від першого
   // Повертаємо масив індексів
   // ==============var 1=========================
   //  if (Array.isArray(arr)) {
   //     let firstElementIndex = arr.indexOf(element);
   //     let lastElementIndex = arr.lastIndexOf(element);
   //     let res = [];
   //     res[0] = firstElementIndex;
   //     if (firstElementIndex != lastElementIndex) {
   //        res[1] = lastElementIndex;
   //     }
   //     return res;
   //  } else {
   //     return [];
   //  }
   // ==============var 2=========================

   let firstElementIndex, lastElementIndex;
   return Array.isArray(arr)
      ? ((firstElementIndex = arr.indexOf(element)),
        (lastElementIndex = arr.lastIndexOf(element)),
        firstElementIndex != -1
           ? firstElementIndex != lastElementIndex
              ? [firstElementIndex, lastElementIndex]
              : [firstElementIndex]
           : "Element not found")
      : [];
}

// Приклад використання функції findElementIndexes
console.log("Завдання:8 ==============================");

console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 2)); //Виведе [ 1, 5 ]
// console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 4));//Виведе [ 3 ]
// console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 10));//Виведе Element not found
// Завдання:9

/**
 * Копіює та переставляє задану кількість елементів з масиву в нове місце за допомогою методу `copyWithin`.
 *  arr - Вхідний масив, з якого будуть копіюватись елементи.
 *  target - Індекс, починаючи з якого розміщувати копійовані елементи.
 *  start - Індекс, з якого починається копіювання елементів.
 *  end - Індекс, на якому закінчується копіювання елементів (не включно).
 * Повертає: Модифікований масив з копійованими та переставленими елементами.
 */
function copyAndSwapElements(arr, target, start, end) {
   // Перевіряємо, чи індекси належать межам масиву якщо ні виводимо рядок Неприпустимі індекси
   // Копіюємо та переставляємо елементи за допомогою методу `copyWithin`
   // Повертаємо модифікований масив
   // ==============var 1=========================

   //  if (target < arr.length && start < arr.length && end <= arr.length) {
   //     let res = arr.copyWithin(target, start, end);
   //     return res;
   //  } else {
   //     return "Неприпустимі індекси";
   //  }
   // ==============var 2=========================
   return target < arr.length && start < arr.length && end <= arr.length
      ? arr.copyWithin(target, start, end)
      : "Неприпустимі індекси";
}

// Приклад використання функції copyAndSwapElements

console.log("Завдання:9 ==============================");

console.log(copyAndSwapElements([1, 2, 3, 4, 5], 0, 2, 4)); // Виведе [3, 4, 3, 4, 5]
// console.log(copyAndSwapElements([1, 2, 3, 4, 5], 0, 7, 14));// Виведе Неприпустимі індекси

// Завдання:10
// В даному завданні ми створимо функцію, яка використовує метод `sort` для сортування масиву об'єктів за допомогою певного ключа.

/**
 * Функція `sortByKey` сортує вхідний масив об'єктів за допомогою методу `sort` та заданого ключа.
 *  arr - Вхідний масив об'єктів.
 * Повертає:  Ключ, за яким потрібно сортувати об'єкти.
 * Повертає: Відсортований масив об'єктів.
 */
function sortByKey(arr, key) {
   // Використовуємо метод `sort` передаємо в нього два аргументи a та b, для сортування масиву об'єктів за заданим ключем
   // якщо a[key] < b[key] повертаємо -1
   // якщо a[key] > b[key] повертаємо 1
   // інакше повертаємо 0
   // Повертаємо відсортований масив об'єктів

   const sortFn = (a, b) => {
      return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
   };
   let sortedArray = arr.sort(sortFn);
   return sortedArray;
}

console.log("Завдання: 10 ==============================");

let unsortedArray = [
   { name: "John", age: 25 },
   { name: "Jane", age: 30 },
   { name: "Mike", age: 20 },
];
console.log(sortByKey(unsortedArray, "age"));
// Виведе:
// [
//   { name: 'Mike', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 }
// ]

// Завдання: 11

/**
 * Функція `customEvery` перевіряє, чи всі елементи масиву задовольняють заданому умову за допомогою методу `every`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 *Повертає: Результат перевірки.
 */
function customEvery(arr, condition) {
   // Перевірка вхідних параметрів
   // якщо arr не масив повертаємо false
   // якщо condition не function повертаємо false
   // Використання методу `every` для перевірки умови для кожного елементу масиву
   // Повернення результату перевірки
   // ==============var 1=========================
   if (Array.isArray(arr)) {
      if (typeof condition === "function") {
         return arr.every(condition);
      }
   }
   return false;
   // ==============var 2=========================
   //  return Array.isArray(arr)
   //     ? typeof condition === "function"
   //        ? arr.every(condition)
   //           ? true
   //           : false
   //        : false
   //     : false;
}

const numbers = [2, 4, 6, 8, 10];

console.log("Завдання: 11 ==============================");
console.log(customEvery(numbers, (num) => num % 2 === 0)); // Виведе true

// Завдання: 12

/**
 * Функція `customFill` заповнює вказаний діапазон елементів масиву заданою значенням за допомогою методу `fill`.
 *  arr - Вхідний масив, який буде заповнюватись.
 * value - Значення, яким будуть заповнені елементи масиву.
 *  start - Початковий індекс для заповнення (включно).
 *  end - Кінцевий індекс для заповнення (не включаючи).
 * Повертає: Заповнений масив.
 */
function customFill(arr, value, start = 0, end = arr.length) {
   // Перевірка вхідних параметрів
   // якщо arr не масив повертаємо false
   // якщо start та end не входять в діапазон від 0 до довжини масиву arr повертаємо false
   // Використання методу `fill` для заповнення вказаного діапазону елементів масиву заданим значенням
   // Повернення заповненого масиву

   return Array.isArray(arr) && start <= arr.length && start >= 0
      ? arr.fill(value, start, end)
      : false;
}

// Приклад використання функції customFill
console.log("Завдання: 12 ==============================");
console.log(customFill([1, 2, 3, 4, 5], 0, 1, 4)); // Виведе [ 1, 0, 0, 0, 5 ]

// Завдання: 13

/**
 * Функція `customShift` видаляє перший елемент з масиву за допомогою методу `shift`.
 * arr - Вхідний масив, з якого буде видалено перший елемент.
 * Повертає - Видалений елемент та оновлений масив або undefined, якщо масив порожній.
 */
function customShift(arr) {
   // перевірка на масив,якщо ні повертаємо undefined
   // перевірка чи масив не пустий,якщо так повертаємо undefined
   // видаляємо перший елемент та записуємо його в змінну shiftedElement
   // повертаємо об'єкт { shiftedElement, arr }
   return Array.isArray(arr)
      ? arr.length > 0
         ? { shiftedElement: arr.shift(), arr: arr }
         : undefined
      : undefined;
}

// Приклад використання функції customShift

console.log("Завдання: 13 ==============================");

console.log(customShift([1, 2, 3, 4, 5])); // Виведе { shiftedElement: 1, arr: [ 2, 3, 4, 5 ] }

// Завдання: 14

/**
 * Функція `customUnshift` додає один або більше елементів на початок масиву за допомогою методу `unshift`.
 *  arr - Вхідний масив, до якого будуть додані елементи.
 *  elements - Елементи, які будуть додані на початок масиву.
 *  Нова довжина масиву після додавання елементів.
 */
function customUnshift(arr, ...elements) {
   // Перевіряємо, чи вхідний параметр є масивом
   // Зберігаємо початкову довжину масиву в змінну initialLength
   // Додаємо елементи на початок масиву за допомогою методу `unshift` та циклу for, початкове значення лічильника на 1 менше ніж довжина масива,
   // при кожній ітерації лічильник зменшуємо на 1 та продовжуємо поки лічильник більше, або дорівнює нулю
   // Отримуємо нову довжину масиву
   // повертаємо об'єкт {initialLength, newLength, arr }
   // console.log(elements);
   if (Array.isArray(arr)) {
      let initialLength = arr.length;
      for (let i = elements.length - 1; i >= 0; i--) {
         arr.unshift(elements[i]);
      }
      return { initialLength: initialLength, newLength: arr.length, arr: arr };
   }
}

console.log("Завдання: 14 ==============================");

console.log(customUnshift([2, 3, 4, 5], 1, 0)); // Виведе { initialLength: 4, newLength: 6, arr: [ 1, 0, 2, 3, 4, 5 ] }

//--------------------------------------

// Завдання: 15

/**
 * Функція `customSome` перевіряє, чи хоча б один елемент масиву задовольняє задану умову за допомогою методу `some`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 * Повертає: Результат перевірки.
 */
function customSome(arr, condition) {
   // Перевіряємо, чи вхідний параметр є масивом якщо ні повертаємо false
   // Перевіряємо, чи condition є функцією  якщо ні повертаємо false
   // Використовуємо метод `some` для перевірки умови хоча б для одного елементу масиву
   // Повертаємо результат перевірки
   if (Array.isArray(arr)) {
      if (typeof condition === "function") {
         return arr.some(condition);
      }
   }
   return false;
}
console.log("Завдання: 15 ==============================");

const isEven = (number) => number % 2 === 0;
console.log(customSome([1, 2, 3, 4, 5], isEven));
// Виведе true

// Завдання: 16

/**

Функція customAt повертає елемент масиву за заданим індексом.
 arr - Вхідний масив, з якого буде отриманий елемент.
 index - Індекс елементу, який потрібно отримати.
Повертаємо- Елемент масиву або undefined, якщо індекс виходить за межі масиву.
*/
function customAt(arr, index) {
   // Перевіряємо, чи вхідний параметр є масивом якщо ні повертаємо undefined
   // Перевіряємо, чи індекс виходить за межі масиву якщо ні повертаємо undefined
   // Отримуємо елемент масиву за заданим індексом
   // перевіремо якого типу елемент ми отримали,якщо рядок виведом в консоль -Елемент є рядком,числом - Елемент є числом, об`єктом -Елемент є обєктом
   if (Array.isArray(arr) && index < arr.length) {
      let curentElement = arr.at(index);
      if (typeof curentElement === "string") {
         console.log("Елемент є рядком");
      } else if (typeof curentElement === "number") {
         console.log("Елемент є числом");
      } else if (typeof curentElement === "object") {
         console.log("Елемент є обєктом");
      } else {
         console.log("Error type of element undefined");
      }
      return curentElement;
   } else return undefined;
}

console.log("Завдання: 16 ==============================");
console.log(customAt([1, 2, 3, 4, 5], 2));
// Виведе
// Елемент є числом.
// 3
// console.log(customAt([1, 2, "5", 3, 4, 5], 2));
// console.log(customAt([1, 2, { 3: 3 }, 4, 5], 2));

// console.log(customAt("[1, 2, { 3: 3 }, 4, 5]", 2));
// console.log(customAt([1, 2, { 3: 3 }, 4, 5], 11));

//--------------------------------------

// Завдання 17

/**
  
  Функція customIncludes перевіряє, чи масив містить заданий елемент за допомогою методу includes.
   arr - Вхідний масив, який буде перевірятись.
   element - Елемент, наявність якого перевіряється.
  Повертає: Результат перевірки.
  */
function customIncludes(arr, element) {
   // Перевіряємо, чи вхідний параметр є масивом
   // Використовуємо метод includes для перевірки наявності елемента в масиві
   // За допомогою методу filter перевіряємо скільки разів в масиві зустрічається елемент та виводимо число в консоль
   //Повертаємо результат
   if (Array.isArray(arr)) {
      let col = 0;
      for (let i of arr) {
         i === element ? col++ : null;
      }
      console.log(col);
      return arr.includes(element);
   } else {
      return [];
   }
}

console.log("Завдання: 17 ==============================");
console.log(customIncludes(["apple", "banana", "orange", "apple"], "banana"));
// Виведе
// 1
// true
