var mysql = require('mysql');
const bodyParser = require('body-parser')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "netflix"
  
  });

const express = require('express');
const app = express();
app.use(bodyParser.json())
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    if(con.connect)
    {
        con.query("select * from information",(err,row,fields)=>
        {
            res.json(row)
        })

    }
})

app.get('/:email', (req, res) => {
     const {email} = (req.params);
        console.log(email);
        console.log(`SELECT * FROM information WHERE email = '${email}'`);
        con.query(`SELECT * FROM information WHERE email = '${email}'`,(err,row,fields)=>
        {
            res.json(row)
        })
})

// app.get('/:id', (req, res) => {
//     const {id} = (req.params);
//     console.log("id here");
//    if(con.connect)
//    {
//        console.log("id here");
//        con.query(`select * from information where id = ${id}`,(err,row,fields)=>
//        {
//            res.json(row)
//        })
//    }
// })


app.post('/add', (req, res) => {
    const {email,password} = (req.body);
    // console.log(body);
   if(con.connect)
   {
       con.query(`INSERT INTO information ( email, password, standard, basic, premium) VALUES ('${email}','${password}',0,1,0) ` ,(err,row,fields)=>
       {
           if(err)
           {
               throw err;
           }
           res.send(row)
       })
   }
})
app.put('/sub',(req,res)=>
{
    const {email,basic,stand,prem} = req.body;
    var sql = `UPDATE information SET standard=${stand},basic=${basic},premium=${prem}  WHERE email = '${email}'`;
    con.query(sql, function (err, rows, fields) {
        if (!err)
            res.send('DONE')
        else
            throw res.send('not done');
        
        })
})

app.put('/dp',(req,res)=>
{
    const {email,source} = req.body;
    var sql = `UPDATE information SET profile=${source}  WHERE email = '${email}'`;
    con.query(sql, function (err, rows, fields) {
        if (!err)
            res.send('Profile Updated')
        else
            throw res.send('not done');
        
        })
})
app.put('/data',(req,res)=>
{
    const {email,source,password,userName} = req.body;
    var sql = `UPDATE information SET profile=${source},  userName = '${userName}',  password= '${password}'  WHERE email = '${email}'`;
    con.query(sql, function (err, rows, fields) {
        if (!err)
            res.send('Profile Data Updated')
        else
            throw res.send('not done');
        
        })
})
app.put('/User',(req,res)=>
{
    const {email,source,password,userName} = req.body;
    var sql = `UPDATE information SET profile='${source}',  userName = '${userName}',  password= '${password}'  WHERE email = '${email}'`;
    console.log(sql);
    console.log("in put");

    con.query(sql, function (err, rows, fields) {
        if (!err)
            res.send('Profile Data Updated')
        else
            throw res.send('not done');
        
        })
})



app.listen(4000, () => {
    console.log("started the server");
}
)