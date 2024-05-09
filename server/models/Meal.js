const mongoose = require('mongoose');

const { Schema } = mongoose;

const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{
        ingredientName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        calories: Number,
        proteins: Number,
        carbohydrates: Number,
        fats: Number,
        fibers: Number,
        sugars: Number,
        vitamins: [{
            name: String,
            amount: Number
        }],
        minerals: [{
            name: String,
            amount: Number
        }]
    }],
    totalCalories: {
        type: Number,
        required: true
    },
    totalProteins: Number,
    totalCarbohydrates: Number,
    totalFats: Number,
    mealTime: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
