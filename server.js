const express=require('express');//requiere expres
 var app= express() // trae los recursos y los guarda en esta variable
 const server = app.listen(3000,encender);  //creo el servidor desde el puerto 3000
 function encender(){
     console.log('servidor encendido');
 }

 app.use(express.static('public')); //de la funcion uso la funcion y uutilizas express static