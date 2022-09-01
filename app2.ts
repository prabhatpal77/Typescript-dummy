
// class in typescript
class App2{
    name:string = "anil sidhu";
    constructor(name:string){
        this.name=name
    }
    getName():string{
        return this.name
    }
}
let a2 = new App2("peter");
console.log(a2.getName())
