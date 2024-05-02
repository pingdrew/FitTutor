const { Schema, model } = require('mongoose');

const conversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', conversationSchema);
