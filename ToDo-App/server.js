const http = require("http");
const fs = require("fs");
const path = require("path")

const filePath = path.join(__dirname, "./db/todo.json")

const server = http.createServer((req, res) => {


  // GET Todos
  if (req.url === "/todos" && req.method === "GET") {

    const data = fs.readFileSync(filePath, { encoding: "utf8" })
    res.writeHead(200, {
      "content-type": "application/json",
    })
    res.end(data)
  } 

  // Post ToDos  now

  
  else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("ToDo created")
  }

});







// const server = http.createServer((req,res)=>{
//     // console.log(req.url ,"------", req.method)
//     // res.end("Welcome to ToDo App Server")

// //     const data = [
// //   {
// //     "id": 1,
// //     "title": "Complete portfolio website",
// //     "status": "in-progress"
// //   },
// //   {
// //     "id": 2,
// //     "title": "Buy groceries",
// //     "status": "pending"
// //   },
// //   {
// //     "id": 3,
// //     "title": "Read about Node.js",
// //     "status": "completed"
// //   }
// // ]



//     if(req.url === "/todos" && req.method === "GET"){

//         // res.setHeader("content-type", "text/plain")
//         // res.setHeader("email", "kobir@gmail.com")
//         // res.statusCode = 201;

//           res.writeHead(200, {
//             "content-type": "application/json", // "text/html" "text/plain"
//             // "email": "kobir@gmail.com"
//         })


//         res.end(JSON.stringify(data))
//     }else if(req.url === "/todos/create-todo" && req.method === "POST"){
//         res.end("ToDo created")
//     }

// });

server.listen(5000, "127.0.0.1", () => {
  console.log("server listing to port 5000")
})



/**
 * /todos - GET All tods
 * /todos/create-todos- POST Create Todo
 */