// constructor and shorthand initialization
class Users{
    name="";
    age = 0;
    email = "";
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        console.log("constructor called");
    }
}
const u1 = new Users("anil",25,'anil@test.com');
//shorthand initialization
constructor(public name, public age, public email){

}

//1. Public
//2. Private
//3. Protected