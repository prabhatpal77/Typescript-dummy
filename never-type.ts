// When a function does not return any value then it will be never type. It will happen in error condition 
function tryReturn(){
    return true
}
console.log(tryReturn());

//OR
function apiError(msg, code){
    throw{message:msg, apicode:code}
}
console.log(apiError("Server side error", 500))