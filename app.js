require('dotenv').config();

const express=require('express')
const app=express();
const port=process.env.PORT || 3000;
const expressLayout=require('express-ejs-layouts')
const path=require('path')
const mongoosDb=require('./server/config/db')
const {flash} =require('express-flash-message')
const session=require('express-session')

// Session setup
app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true
}));
//connect to database
mongoosDb()

//express session

app.use(session(
    {
        secret:'secret',
        resave:false,
        saveUninitialized:true,
        cookie:{
            maxAge:1000* 60 * 60 * 24 * 7 // 1 week
        }
    }
));


//flash messages



app.use(express.urlencoded({extended: false}));
app.use(express.json());

//static files
app.use(express.static('public'));

//Templating Engine

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine','ejs');

//Routes

app.use('/',require('./server/routes/customer'));
app.use('/',require('./server/routes/client'));

app.get('*',(req,res)=>{
    const local={
        title:'Home Page',
        description:'This is the crud-user management system'
    };
    res.status(404).render(path.join(__dirname,'views','error','404'),{local})
})
app.listen(port,()=>{
    console.log('The server is running on port',port);
});