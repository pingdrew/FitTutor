const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  sender_Id: { type: Schema.Types.ObjectId, ref: 'Person' },
  receiver_Id: { type: Schema.Types.ObjectId, ref: 'Person' },
  messageContent: String,
  timeStamp: { type: Date, default: Date.now },
  rating: Number
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
