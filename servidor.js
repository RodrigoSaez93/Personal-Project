const express =require('express')
const app=express()
const puerto =8080
const server = app.listen(puerto,()=>{

    console.log('servidor encendido en el puerto 8080')    
})
server.on("error" ,error => console.log(`Erorr en servidor ${error}`))


app.get('/autos',(req,res)=>{
    const autos=["Ford", "Renault", "Chevrolet" ,"Fiat"]
    res.json(autos)
})


app.get('/animales',(req,res)=>{
  const animales=["Gato", "Vaca", "Gallo", "Cerdo"]
    res.json(animales)

})
app.get('/perfil',(req,res)=>{
    const perfil= {name: "Juan Perez", email: "juan.perez@gmail.com", age: 22}
    res.json(perfil)
    
})
app.get('/alumnos',(req,res)=>{
    const alumnos= [{name: "Juan"}, {name: "Carlos"}, {name: "Pedro"}]
    res.json(alumnos)
})