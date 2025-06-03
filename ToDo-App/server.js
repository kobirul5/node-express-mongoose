const http = require("http");

const server = http.createServer((req,res)=>{
    // console.log(req.url ,"------", req.method)
    // res.end("Welcome to ToDo App Server")

    if(req.url === "/todos" && req.method === "GET"){
        res.end("All Todos")
    }else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("ToDo created")
    }

});

server.listen(5000, "127.0.0.1", ()=>{
    console.log("server listing to port 5000")
})



/**
 * /todos - GET All tods
 * /todos/create-todos- POST Create Todo
 */