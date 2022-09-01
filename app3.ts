//Inheritance in TS
class Parent{
    name4:
    setName(name4){
        this.name4=name4
    }
}
class Child extends Parent{
    getName():string{
        return this.name4
    }
}
let c1 = new Child();
c1.setName("Bruce")
console.log(c1.getName())