/*
1 synchronous
* file read / I/O intensive task -> simple thread -> not go thread Pool

2. asynchronous
*read > single thread -> event loop -> Thread pool -> task Completion
*/

const fs = require("fs");

console.log("task-1")

const text = "Change Hello world"
fs.writeFileSync("./hello.txt", text)
console.log("task-2")
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" })
console.log("task-3")

console.log(data)
console.log("---------------------------")


// Asynchronous

let text1 = "node js";

fs.writeFile("./hello-world.txt", text1 , {encoding: "utf-8"}, (err)=>{
    if(err){
        console.log(err, "err from writeFile")
    }
})

fs.readFile("./hello-world.txt", { encoding: "utf-8" }, (err, data1)=> {
    if(err) {
        console.log("Something is Error", err)
        return

    }
    text1 = data1;

    console.log(text1)

})

console.log(text1)
console.log("task2")


