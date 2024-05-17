const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const personSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
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

// Hash the password before saving the document
personSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});


// Method to compare the password with the hashed password
personSchema.methods.isCorrectPassword = async function(password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
