import express from "express";
const app = express ();
app.use(express.json());

app.get('/sumar',(req,res)=> { // tenias rec en lugar de req
  
    const num1= req.body.num1;
    const num2= req.body.num2;

    const result = num1 + num2;

    return res.status(200).json({result})


})

app.get('/resta',(req,res)=> { // tenias rec en lugar de req
  
    const num1= req.body.num1;
    const num2= req.body.num2;

    const result = num1 - num2;

    return res.status(200).json({result})


})

app.get('/multiplicar',(req,res)=> { // tenias rec en lugar de req
  
    const num1= req.body.num1;
    const num2= req.body.num2;

    const result = num1 * num2;

    return res.status(200).json({result})


})

app.get('/dividir',(req,res)=> { // tenias rec en lugar de req
  
    const num1= req.body.num1;
    const num2= req.body.num2;

    const result = num1 / num2;

    return res.status(200).json({result})


})


app.listen(4000,()=> {
    console.log("conexion exitosa");
})

