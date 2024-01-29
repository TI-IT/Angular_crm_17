const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Поле должно быть заполнено']
    },
    vendorCode: {
        type: String,
    },
    imageSrc: {
        type: String,
        default: '',
    },
    drawingImageSrc: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
    },
    currency: {
        type: String,
        default: 'руб.',
    },
    description: {
        type: String,
    },
    unit: {
        type: String,
    },
    catalog: {
        type: String,
    },
    category: {
        type: String,
    },
    Subcategories: {
        type: String,
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
}, {autoCreate: true});

module.exports = mongoose.model('products', productsSchema)