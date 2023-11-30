import {Router,Request,Response}from 'express';
import {getRepository}from 'typeorm';
import {Product} from '../entity/Product';

const router= Router();
const productRepository= getRepository(Product);

router.post('/products', async(req:Request, res:Response)=>{
    try{
        const { description, price, quantity } = req.body;
    if (!description || !price || !quantity) {
      return res.status(400).json({ message: 'Invalid inputs' });
    }

    const product = productRepository.create({
        description,
        price,
        quantity,
    });

    await productRepository.save(product);

    return res.status(201).json({message:'Produto registrado'});
    }
    catch(error){

        console.log(error);
        return res.status(500).json({message:'Erro interno do servidor'}) ;

    }
});
router.get('/products/:id', async (req:Request,res,Response)=>{
    // Implementar lógica para obter produto por ID

});
router.get('/products/description/:description', async(req:Request,res:Response)=>{

    // Implementar lógica para obter produtos por descrição
});

export default router