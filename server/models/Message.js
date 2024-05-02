const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' }, // Ensure a 'Conversation' schema exists if referenced
  sender_Id: { type: Schema.Types.ObjectId, ref: 'Person' },
  receiver_Id: { type: Schema.Types.ObjectId, ref: 'Person' },
  messageContent: String,
  timeStamp: { type: Date, default: Date.now },
  readStatus: Boolean,
  attachments: [String]
});

module.exports = model('Message', messageSchema);
