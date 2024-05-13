const mongoose = require('mongoose');

const { Schema } = mongoose;

const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
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
