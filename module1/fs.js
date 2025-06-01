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
const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"})
console.log("task-3")

console.log(data)
console.log("task-4")