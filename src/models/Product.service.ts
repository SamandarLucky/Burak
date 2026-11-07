import { ObjectId } from "mongoose";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
class ProductService {
    [x: string]: any;
    static createNewProduct(data: ProductInput) {
        throw new Error("Method not implemented.");
    }
    private readonly productModel;
    memberModel: any;

    constructor() {
        this.productModel = ProductModel;
    }
/* SPA */
//DEFINE
public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = {productStatus: ProductStatus.PROCESS};

    if(inquiry.productCollection) 
        match.productCollection = inquiry.productCollection;
    if(inquiry.search) {
        match.productName = {$regex: new RegExp(inquiry.search, "i")};
    }
    const sort: T = 
    inquiry.order === "productPrice" 
    ? {[inquiry.order]: 1} //dynamic key hosil qiladi array emas
    : {[inquiry.order]: -1};

    const result = await this.productModel.aggregate([
        {$match: match},
        {$sort: sort},
        {$skip: (inquiry.page * 1 - 1) * inquiry.limit},
        {$limit: inquiry.limit * 1},
    ]).exec();
    if(!result) new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
}

public async getProduct(
    memberId: ObjectId | null, 
    id: string
): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel.findOne(
        {
        _id: productId,
        productStatus: ProductStatus.PROCESS,
        }
    ).exec();
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    //TO DO: If authentificated user => first => view creation

    return result.toObject() as Product;
}


/* SSR */
public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result.map((product) => product.toObject()) as Product[];
}

public async createNewProduct(input: ProductInput) {
    try {
        const product = await this.productModel.create(input);
        return product;
    } catch (err) {
        console.error("Error, model:createNewProduct:", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
}

public async updateChosenProduct(id: string, input: ProductUpdateInput): Promise<Product> {
    // string => ObjectId

    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findOneAndUpdate({_id: id}, input, {new: true}).exec();
    if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result.toObject();
}

}



export default ProductService;