// let person = [""]

// Object

// let person = {
//     name: "Duc",
//     age: 21,
//     major: "Chinese",
//     girlFriend: 4,
// };

// property: value
// 1. READ
// console.log(person.name);

// 2.CREATE/UPDATE
// person.name = "Cuong";
// console.log(person.name);
// person.yob = 1997;
// console.log(person);

// 3. DELETE
// delete person.girlFriend;
// console.log(person);

// let person1 = {
//     Name: "Quan",
//     Money: 20,
//     Hours: 5,
//     Days: 24,
// };

// let person2 = {
//     Name: "Duc",
//     Money: 25,
//     Hours: 8,
//     Days: 28,
// };

// let persons = [person1, person2];

// for (let i = 0; i < persons.length; i++) {
//     let eachperson = persons[i];
//     console.log(eachperson.Money * eachperson.Hours * eachperson.Days);
// }

// CÁCH 1
// for (let i = 0; i < persons.length; i++) {
//     let x = (person1.Money * person1.Hours * person1.Days);
//     let y = (person2.Money * person2.Hours * person2.Days);
//     console.log(x+y)
// }

// CÁCH 2
// let x = 0;
// for (let i = 0; i < persons.length; i++) {
//     let eachperson = persons[i];
//     let salary = eachperson.Money * eachperson.Hours * eachperson.Days;
//     x += salary;
// }
// console.log(x);



// let words = {
//     hc: "học",
//     ng: "người",
//     eny: "em người yêu",
//     ns: "nói"
// }
// let x = prompt("Enter your word?");
// console.log("It means", words[x])
// nguồn[nội dung người dùng nhập]