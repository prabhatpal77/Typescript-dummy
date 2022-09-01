// Generics in TS
// When we want to use the function again and again with any datatype the we make it generic
function users<T>(data:T):T{
    return data
}
console.log(users({name:"anil",age:30}).age)