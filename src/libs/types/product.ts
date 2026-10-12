import { ProductCollection, ProductSize, ProductStatus, ProductVolume } from "../enums/product.enum";
import { Types } from "mongoose";

export interface Product {
    _id: Types.ObjectId;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
    
}
export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
    
}

export interface ProductUpdateInput {
    _id: Types.ObjectId;
    productStatus?: ProductStatus;
    productCollection?: ProductCollection;
    productName?: string;
    productPrice?: number;
    productCount?: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
    
}
