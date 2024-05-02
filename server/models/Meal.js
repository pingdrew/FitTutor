const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
  conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' }, // Assuming this is similar to 'Message'
  sender_Id: { type: Schema.Types.ObjectId, ref: 'Person' },
  receiver_Id: { type: Schema.Types.ObjectId, ref: 'Person' },
  messageContent: String,
  timeStamp: { type: Date, default: Date.now },
  readStatus: Boolean,
  attachments: [String]
});

module.exports = model('Meal', mealSchema);
