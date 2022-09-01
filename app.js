var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        // Datatypes
        var i = 10;
        var a = "hello";
        var b = true;
        var c = 10.10;
        // array
        var data = ['anil', 'jeyo', 'merio', 10];
        data.push('peter');
        data.push(100);
        data[3] = ('rohan');
        //define for similer datatypes
        var data2 = ['anil', 'jeyo', 'merio'];
        // Define typed object
        var users = {
            name: 'bruce',
            age: 30,
            address: 'USA'
        };
        //users.name = 200;
        console.log(users);
        users.name = "peter";
        var users3 = {
            name: 'bruce',
            age: 30,
            address: 'USA'
        };
        console.warn(users);
        var users2 = {
            name: 'bruce',
            age: 30,
            address: 'USA'
        };
        users2.name = 100;
        console.warn(users2);
        //Union types in TS
        var data3 = "anil";
        data3 = 30;
        data3 = true;
        console.log(data3);
        var users4 = {
            name: 'Anil Sidhu',
            age: 30,
            getName: function () {
                return "anil sidhu";
            }
        };
        console.warn(i);
        console.log("Test function working");
    };
    return App;
}());
// function in TS
function Cals(a, b) {
    return b ? a + b : a;
}
console.log(Cals(100, 50));
var a1 = new App();
a1.test();
