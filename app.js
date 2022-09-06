//Invocamos variables express, dotenv, cookie-parser
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();

//seteamos el motor de las plantillas
app.set("view engine", "ejs");

//Seteamos la carpeta app para los archivos estaticos
app.use(express.static("public"));

//procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//seteamos las variabes de entorno
dotenv.config({path: "./env/.env"});

//para poder setear las cookies
app.use(cookieParser());

//Llamar al router
app.use("/", require("./routes/router"))

app.listen(3000, ()=>{
    console.log("SERVER UP running in http://localhost:3000");
})