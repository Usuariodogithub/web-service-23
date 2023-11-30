"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
//Configuração TypeORM
(0, typeorm_1.createConnection)().then(() => {
    console.log('Conectado ao banco de dados');
}).catch(error => console.log(error));
// Defina sua entidade de produto   
//src/entidade/Product.ts
//Implemente seus endpoints
//src/rotas/productRoutes.ts
app.listen(port, () => {
    console.log('O servidor está sendo executado na porta ${port}');
});
app.use('/api', productRoutes_1.default);
