const express= require('express');
const path=require('path');
const  hbs=require('hbs');
const app=express();

const port=8000;

const static_path=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app
//public static path

app.use(express.static(static_path));


//routing
app.get('/',(req,res)=>{

    res.render('index.hbs');

})

app.get('/about',(req,res)=>{
    res.render('about.hbs');

})

app.get('/wether',(req,res)=>{
    res.render('wether');
})

app.get('*',(req,res)=>{


    res.render('404err',{
        errMsg:'Opps! page is not found'
    });

})



app.listen(port,()=>{

    console.log(`express is running on port ${port}`);
})