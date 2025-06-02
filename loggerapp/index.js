const path = require("path")
const fs = require("fs");
const { log } = require("console");
const inputArguments = process.argv.slice(2)

const timeStamp = new Date().toISOString();


const text = inputArguments.join(" ");

if(!text){
    console.log("Please Provide message log")
    console.log("example: Hello world")
    process.exit(1)
}

const message = `${text} ${timeStamp} \n`
console.log(message)

const filePath = path.join(__dirname, "log.txt")
console.log(filePath)

fs.appendFile(filePath, message, {encoding: "utf-8"}, ()=>{
    console.log("Log successfully added ")
})