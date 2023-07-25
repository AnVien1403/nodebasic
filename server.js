const http=require('http');
const server=http.createServer((req,res) => {
    console.log("run request")
    res.setheader('content-type','text/html');
    res.write('<h3>Hello world</h3>');
    res.write('<h2>from Hoang Vien </h2>');
    res.end();
})
server.listen(3000,'localhost',()=>{
    console.log('Nodejs server is running on port :3000')
})
