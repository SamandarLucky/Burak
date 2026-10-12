import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Request, Response } from "express";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productController: T  = {};
const productService = new ProductService;
/* SPA */


/* SSR */
productController.getAllProducts = async(req: Request, res: Response) => {
    try {
    console.log('getAllProducts');
    res.render("products");
    } catch(err) {
        console.log('Error, getAllProducts:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async(req: AdminRequest, res: Response) => {
    try {
    console.log('createNewProduct');
    if(!req.files?.length) 
        throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {        //req ichida files typeni biz korsatdik
        return ele.path;
    });

    await productService.createNewProduct(data);
    res.send(`<script> alert("Sucessful creation!"); window.location.replace('/admin/product/all) </script>`);


    } catch(err) {
        console.log('Error, createNewProduct:', err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/product/all) </script>`);

    }
};

productController.updateChosenProduct = async(req: Request, res: Response) => {
    try {
    console.log('updateChosenProduct');
    const id = req.params.id;
    if (typeof id !== "string") {
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
        }
    const result = await productService.updateChosenProduct(id, req.body);

    res.status(HttpCode.OK).json({data: result});
    } catch(err) {
        console.log('Error, updateChosenProduct:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default productController;