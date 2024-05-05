const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
  lastUpdated: { type: Date, default: Date.now }
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
