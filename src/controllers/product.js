import product from "../models/product";

export const getAll = async (req,res) => {
    try {
        const getProduct = await product.find();
        res.json(getProduct);
    } catch (error) {
        res.status(400).json({
            message: "Không lấy được danh sách sản phẩm"
        })
    }
}

export const create = async (req,res) => {
    try {
        const products = await new product(req.body).save();
        console.log(req.body);
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc san pham"
        })
    }
}