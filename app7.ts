// Symbol in TS
let s1 = Symbol("d1");
console.log(s1);
let data = {
    [s1]:"Some Data"}
console.warn(data[s1])
class Demo{
    demoF1(){
        return "Some Data"
    }
}
let d1 = new Demo();
console.log(d1.demoF1())