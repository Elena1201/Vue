const axios = require("axios")
axios.get("https://jsonplaceholder.typicode.com/todos/25")
.then(response=> console.log(response.data))
//console.log("hello node");