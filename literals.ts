// Literals in TS
// Apply the value rather the apply types to a variable oe parameter,

// let Data:string|number = "Hello",
// let Data:"abc"|123 = "abc"

function combine(a:number|string, b:number|string, type:"as-number"|"as-string"){
    if (type === "as-number"){
        return (+a)+(+b)
    }
    else{
        return a.toString()+b.toString();
    }
}
console.log(combine(10,20,"as-number"))
console.log(combine("anil","sidhu","as-string"))
let type:"as-number"|"as-string"="as-string";