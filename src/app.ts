class App{
    test(){
        // Datatypes
        var i:number = 10;
        let a:string = "hello";
        let b:boolean = true;
        let c:number = 10.10; 
        // array
        let data=['anil','jeyo','merio',10]
        data.push('peter')
        data.push(100)
        data[3]=('rohan')
        //define for similer datatypes
        let data2:string[]=['anil','jeyo','merio']
        // Define typed object
        let users = {
            name:'bruce',
            age:30,
            address:'USA'
        }
        //users.name = 200;
        console.log(users)
        users.name="peter"

        // define the custom type for object
        interface usersTyped{
            name:string,
            age:number,
            address:string //write any for any datatype
        }
        let users3:usersTyped={
            name:'bruce',
            age:30,
            address:'USA'

        }
        console.warn(users)
        let users2:any={
            name:'bruce',
            age:30,
            address:'USA'
        }
        users2.name = 100
        console.warn(users2);

        //Union types in TS
        let data3:string|number|boolean = "anil"
        data3 = 30;
        data3 = true;
        console.log(data3);

        // Interface in TS
        interface userType{
            name:string,
            age:number,
            getName:()=>string
        }
        let users4:userType={
            name:'Anil Sidhu',
            age:30,
            getName:function(){
                return "anil sidhu"
            }
        }
        console.warn(i);
        console.log("Test function working")
    }
}
// function in TS
function Cals(a:number, b?:number):number
{
    return b?a+b:a;
}
console.log(Cals(100,50))
let a1 = new App();
a1.test()