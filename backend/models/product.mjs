import mongoose from 'mongoose';

// make schema for products
const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true }
});

// make model (fyi: models are classes)
const Product = mongoose.model('Product', productSchema);

export default Product;