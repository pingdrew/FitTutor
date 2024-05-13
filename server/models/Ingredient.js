const mongoose = require('mongoose');

const { Schema } = mongoose;

// Main Ingredient schema
const ingredientSchema = new Schema({
    ingredientName: {
        type: String,
        required: true
    },
    unit: {
      type: String,
      required: true
    },
    quantity: Number,
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
    fibers: Number,
    sugars: Number,
    vitamins: [String],
    minerals: [String]
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
