const EventEmitter= require("node:events");

class SchoolBell extends EventEmitter{}

const schoolBell = new SchoolBell();


schoolBell.on("ring",()=>{
    console.log("yahoo!! class Sesh")
})
schoolBell.on("ring",()=>{
    console.log("Dhet arekta class ase!!")
})
schoolBell.on("broken",()=>{
    console.log("Oh no!! class ki r ses hobe na?")
})


schoolBell.emit("ring");
schoolBell.emit("broken");