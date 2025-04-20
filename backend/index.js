import express from "express"
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();

const app = express();
app.use(express.json());


app.post("/api/products", async (req, res)=>{
    const product = req.body;
    const newProduct = new Product(product);
    const result = await newProduct.save();
    res.send(result);
})




app.get("/", (req, res) => { 
    res.send("Server is ready !")
})

const port = 5000;
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on ${port}`);
})


