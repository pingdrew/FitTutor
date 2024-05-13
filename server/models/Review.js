const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  reviewer_Id: { type: Schema.Types.ObjectId, ref: 'User' }, // Refers to the user who wrote the review
  reviewedItem_Id: { type: Schema.Types.ObjectId, refPath: 'onModel' }, // Generic reference to the item being reviewed
  onModel: { type: String, required: true, enum: ['Person', 'Exercise', 'Workout', 'Meal'] }, // Specifies the model of the reviewed item
  messageContent: String, // The content of the review
  timeStamp: { type: Date, default: Date.now }, // The time when the review was posted
  rating: { type: Number, min: 0, max: 5 } // The rating given in the review, from 0 to 5
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
