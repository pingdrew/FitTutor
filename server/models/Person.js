const { Schema, model } = require('mongoose');

const personSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: String,
  age: Number,
  about: String,
  role: String,
  specializations: [String],
  certifications: [String],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  conversations: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

module.exports = model('Person', personSchema);
