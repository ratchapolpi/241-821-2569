// String  Number Boolean Oject Array
let fname = "John"; // String
console.log("Name:", fname);
const PI = 3.14; // Number
/*
// Number
let age = 30; // Number
let height = 175.5; // Number
*/
fname = "Bob";
PI = 3.14159;
console.log("Name:", fname);
console.log("Age:", age);
console.log("Height:", height);

/*
+ = บวก
- = ลบ
* = คูณ
/ = หาร
% = หารเอาเศษ
*/

let nn1 = '10';
let nn2 = '3';

let result1 = nn1 + nn2;
console.log("ผลบวก:", result1);

/**
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้อยกว่าหรือเท่ากับ
 */

 let n1 = 10
 let number2 = 20;
 let condition = n1 < number2;
 console.log("condition", condition)

 // if-else codition
 if (number1 > number2) {
    console.log("number is greater than or eqal to number2");
 } else if (number1 < number2) {
    console.log("this is else if");
 } else {
    console.log('this is else')
 }

 /**
  Grade
  >= 80 เป็นเกรด A
    >= 70 เป็นเกรด B
    >= 60 เป็นเกรด C
    >= 50 เป็นเกรด D
    < 50 เป็นเกรด F
  */
 let score =75;
 
if (score >= 80) {
    console.log('Grade A');
} else if (score >= 70) {
    console.log('Grade B');
} else if (score >= 60) {
    console.log('Grade C');
} else if (score >= 50) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}

/*
&& และ
|| หรือ
! not หรือ ไม่
*/

Grade
let s1 = 5;
let s2 = 10;

let condition1 = (s1 > 0 && s2 > 0); //true && false
console.log("condition1:", condition1); 

let age = 25
let gender = "female"
if (age >= 18 && gender =="female" || age >=20) {
    console.log("คุณสามารถเข้าร่วมกิจกรรมได้")
}

let number1 = 5

if (number1 % 2 == 0) {
    console.log("เป็นเลขคู่")
} else {
    console.log("เป็นเลขคี่")
}

/**
 while
 for
 */

 let conter = 0;
 while (conter <=5) { //true
conter = conter +1;
console.log("while:", conter);
 }
 
 for (let i = 0; i <=4; i = i +1) {
    console.log("for:",i);
 }