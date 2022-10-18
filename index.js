const app = require('express')();

app.get('/',(req,res)=> {
    res.end("hellow this is a demo project of NODEJS");
})
app.listen(8000);
console.log('server is running fine');
