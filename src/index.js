const express =require("express"); 
const mongoose =require("mongoose")
require("dotenv").config();

//se asignan las variable a utilizar
const app =express();
//se declara por sa acaso es un hosting no local
const port = process.env.PORT || 9000;

//routes
app.get('/', (req,res)=>{
    res.send('Bienvenidos a la Nueva Api')
});

//se crea la conexion a la base de datos Mongo DB

    

//se hace que escuche  por el puerto y se muestra un mensaje en consola
app.listen(port,()=>console.log("El servidor esta activo",port));