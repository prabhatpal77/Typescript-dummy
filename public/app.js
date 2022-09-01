"use strict";
class App {
    test() {
        // Datatypes
        var i = 10;
        let a = "hello";
        let b = true;
        let c = 10.10;
        // array
        let data = ['anil', 'jeyo', 'merio', 10];
        data.push('peter');
        data.push(100);
        data[3] = ('rohan');
        //define for similer datatypes
        let data2 = ['anil', 'jeyo', 'merio'];
        // Define typed object
        let users = {
            name: 'bruce',
            age: 30,
            address: 'USA'
        };
        //users.name = 200;
        console.log(users);
        users.name = "peter";
        let users3 = {
            name: 'bruce',
            age: 30,
            address: 'USA'
        };
        console.warn(users);
        let users2 = {
            name: 'bruce',
            age: 30,
            address: 'USA'
        };
        users2.name = 100;
        console.warn(users2);
        //Union types in TS
        let data3 = "anil";
        data3 = 30;
        data3 = true;
        console.log(data3);
        let users4 = {
            name: 'Anil Sidhu',
            age: 30,
            getName: function () {
                return "anil sidhu";
            }
        };
        console.warn(i);
        console.log("Test function working");
    }
}
// function in TS
function Cals(a, b) {
    return b ? a + b : a;
}
console.log(Cals(100, 50));
let a1 = new App();
a1.test();
