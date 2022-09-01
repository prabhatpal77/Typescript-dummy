// Namespace in TS
// Namespace is a block of code. Interrelated codes exists inside the namespace

/// <reference path="./utils.ts" />
namespace UsersUtils{
    export class Users extends Parent implements userType{
        getName(){
            return this.name
        }
    }
}
let u1 = new UsersUtils.Users();
u1.setName("tony"
console.warn(u1.getName())