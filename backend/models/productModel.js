import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        
    },
    images: {
        type:Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    bestseller: {
        type: Boolean,
    },
    date: {
        type: Number,
        required: true
    }
});

const Product = mongoose.models.product || mongoose.model('Product', productSchema);
export default Product;