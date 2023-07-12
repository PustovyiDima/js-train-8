//=================================Array.from=========================================================
// console.log(Array.from("Hello World"));

// console.log(Array.from({ 0: "Hello", 1: "World", 2: "!!!", length: 3 }));

// console.log(
//    Array.from(
//       { 0: "Hello", 1: "World", 2: "!!!", length: 3 },
//       (elem, index) => {
//          console.log(elem, index);
//          return elem;
//       }
//    )
// );

// const obj = { 0: "Hello", 1: "World", 2: "!!!", length: 3 };
// console.log(
//    Array.from(
//       obj,
//       function (elem, index) {
//          console.log(this.length);
//          console.log(elem, index);
//          return elem;
//       },
//       obj //Додаємо, щоб звернутися через this y функції
//    )
// );

// const obj = { 0: "Hello", 1: "World", 2: "!!!", length: 3, prefix: "():" };
// console.log(
//    Array.from(
//       obj,
//       function (elem, index) {
//          //  console.log(this);
//          //  console.log(elem, index);
//          return `${this.prefix} ${elem}`;
//       },
//       obj //Додаємо, щоб звернутися через this y функції
//    )
// );
//===============================Array.isArray===========================================================
// const obj = { 0: "Hello", 1: "World", 2: "!!!", length: 3, prefix: "():" };
// const arr = Array.from(
//    obj,
//    function (elem, index) {
//       //  console.log(this);
//       //  console.log(elem, index);
//       return `${this.prefix} ${elem}`;
//    },
//    obj //Додаємо, щоб звернутися через this y функції
// );

// console.log(Array.isArray(arr));
//==============================Array.of============================================================
// const a = "hello",
//    b = "World",
//    c = "!!!";

// let arr = Array.of(a, b, c);
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(Array.of(arr1, arr2)); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// console.log(Array.of(...arr1, ...arr2)); //[ 1, 2, 3, 4, 5, 6 ]
// console.log([...arr1, ...arr2]); //[ 1, 2, 3, 4, 5, 6 ]
//===============================.at()===========================================================
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.at(3)); //4
// console.log(arr.at(10)); //undefined
//=============================pop()===кінець масиву!!!==========================================================
// let arr1 = [1, 2, 3];
// console.log(arr1); //[1, 2, 3]
// arr1.pop();
// console.log(arr1); //[ 1, 2 ]
//=============================push()======= видалити//додати
// arr1.push(4, 5);
// console.log(arr1); //[ 1, 2, 4, 5 ]
//=============================shift()===початок масиву!!!==========================================================
// let arr2 = [3, 4, 5];
// console.log(arr2); //[3, 4, 5]
// arr2.shift();
// console.log(arr2); //[ 4, 5 ]
//=============================unshift()=======видалити//додати
// arr2.unshift(1, 2, "text");
// console.log(arr2); //[ 1, 2, 'text', 4, 5 ]

//======================================.includes()===================================================================
// let arr2 = [3, 4, 5];
// console.log(arr2.includes(5)); //true
// console.log(arr2.includes(7)); //false
//=======================================.indexOf()==================================================================
// let arr3 = [3, 4, "test",4];
// console.log(arr3.indexOf("test")); //2
// console.log(arr3.indexOf(50)); //-1
//======================================concat()===================================================================
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]
//=========================================copyWithin================================================================
// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.copyWithin(0, 4);
// console.log(arr2); //[ 4, 5, 6, 7, 8, 9, 6, 7, 8, 9 ]
//==========================================fill===============================================================
// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.fill("test", 4, 8);
// console.log(arr2); //[ 0, 1, 2,3, 'test', 'test','test', 'test', 8,9 ]
//==========================================revers===============================================================
// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1.reverse()); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//==========================================filtr===============================================================
