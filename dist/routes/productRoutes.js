"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const Product_1 = require("../entity/Product");
const router = (0, express_1.Router)();
const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
router.post('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, price, quantity } = req.body;
        if (!description || !price || !quantity) {
            return res.status(400).json({ message: 'Invalid inputs' });
        }
        const product = productRepository.create({
            description,
            price,
            quantity,
        });
        yield productRepository.save(product);
        return res.status(201).json({ message: 'Produto registrado' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}));
router.get('/products/:id', (req, res, Response) => __awaiter(void 0, void 0, void 0, function* () {
    // Implementar lógica para obter produto por ID
}));
router.get('/products/description/:description', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Implementar lógica para obter produtos por descrição
}));
exports.default = router;
