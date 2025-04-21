import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    const result = await Product.find({});
    res.send(result);
}

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product);
    const result = await newProduct.save();
    res.send(result);
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product ID"})
    }
    const result = await Product.findByIdAndUpdate(id, product, {new: true});
    res.send(result);
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product ID"})
    }
    const result = await Product.findByIdAndDelete(id);
    res.send(result);
}