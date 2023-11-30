import express, { Express ,Router,Request,Response} from "express";
import { createConnection } from "typeorm";
import productRoutes from './routes/productRoutes';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';



import {Product} from './entity/Product'
import { error } from "console";

const app =express();
const port=3000;

app.use(express.json());

//Configuração TypeORM
createConnection().then(()=>{
    console.log('Conectado ao banco de dados');
}).catch(error=> console.log(error));


// Defina sua entidade de produto   

//src/entidade/Product.ts
//Implemente seus endpoints

//src/rotas/productRoutes.ts

app.listen(port,()=>{
    console.log('O servidor está sendo executado na porta ${port}');

    
});
app.use('/api', productRoutes);
