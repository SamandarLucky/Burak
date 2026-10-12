import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
class ProductService {
    static createNewProduct(data: ProductInput) {
        throw new Error("Method not implemented.");
    }
    private readonly productModel;
    memberModel: any;

    constructor() {
        this.productModel = ProductModel;
    }
/* SPA */






/* SSR */

public async createNewProduct(input: ProductInput) {
    try {
        const product = await this.productModel.create(input);
        return product;
    } catch (err) {
        console.error("Error, model:createNewProduct:", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
}
}


export default ProductService;