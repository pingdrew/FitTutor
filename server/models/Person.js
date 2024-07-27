const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  age: { type: Number },
  about: { type: String },
  role: { type: String },
  specializations: [String],
  certifications: [String],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  conversations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' }],
}, { timestamps: true });

personSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

personSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
