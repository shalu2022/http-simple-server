const http = require('http');

const server = http.createServer((req, res)=>{
const url = req.url
if(url==='/users'){
    res.setHeader('Content-Type', 'text/html')
    res.write("<ul><li>User 1</li><li>User 2</li></ul>")
    return res.end()
}
if(url === '/create-user'){
    const result = []
    req.on('data', (chunk)=>{
        result.push(chunk)
    })
    req.on('end', (err)=>{
        const dataRecived = Buffer.concat(result).toString()
        const parsedData = dataRecived.split("=")[1]
        console.log("data", parsedData)
    })
  
}
    res.write("<h1>Welcome to the Page</h1>")
    res.write("<form action='/create-user'  method='POST' ><input name='username'type='text'><button type='submit'>Submit</button></form>")
    return res.end()
})


server.listen(3000, (req, res)=>{
    console.log("server is listening at PORT, 3000")
})