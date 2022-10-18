const app = require('express')();

app.get('/',(req,res)=> {
    res.end(`<h1>hellow this is a demo project of NODEJS</h1>`);
})
app.listen(8000);
console.log('server is running fine');
