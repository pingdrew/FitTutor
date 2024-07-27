const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Person = require('../models/Person');
const Review = require('../models/Review');
const Message = require('../models/Message');
const Meal = require('../models/Meal');
const Ingredient = require('../models/Ingredient');
const Exercise = require('../models/Exercise');
const ExerciseType = require('../models/ExerciseType');
const Workout = require('../models/Workout');
const WorkoutType = require('../models/WorkoutType');
const Conversation = require('../models/Conversation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    me: async (_, __, { req }) => {
      if (!req.isAuth) {
        throw new AuthenticationError('You must be logged in');
      }
      return Person.findById(req.userId);
    },
    allPersons: async () => Person.find(),
    personById: async (_, { _id }) => Person.findById(_id),
    allReviews: async () => Review.find(),
    reviewById: async (_, { _id }) => Review.findById(_id),
    allMessages: async () => Message.find(),
    messageById: async (_, { _id }) => Message.findById(_id),
    allMeals: async () => Meal.find(),
    mealById: async (_, { _id }) => Meal.findById(_id),
    allIngredients: async () => Ingredient.find(),
    ingredientById: async (_, { _id }) => Ingredient.findById(_id),
    allWorkouts: async () => Workout.find(),
    workoutById: async (_, { _id }) => Workout.findById(_id),
    allExercises: async () => Exercise.find(),
    exerciseById: async (_, { _id }) => Exercise.findById(_id),
    allConversations: async () => Conversation.find(),
    conversationById: async (_, { _id }) => Conversation.findById(_id),
    allExerciseTypes: async () => ExerciseType.find(),
    exerciseTypeById: async (_, { _id }) => ExerciseType.findById(_id),
    allWorkoutTypes: async () => WorkoutType.find(),
    workoutTypeById: async (_, { _id }) => WorkoutType.findById(_id),
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const person = await Person.findOne({ email });
      if (!person) {
        throw new UserInputError('User not found');
      }
      const isPasswordValid = await bcrypt.compare(password, person.password);
      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid password');
      }
      const token = jwt.sign({ userId: person._id }, 'your_secret_key', { expiresIn: '1h' });
      return { token, person };
    },
    addPerson: async (_, { username, email, password }) => {
      const existingPerson = await Person.findOne({ email });
      if (existingPerson) {
        throw new UserInputError('Email already registered');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newPerson = new Person({ username, email, password: hashedPassword });
      await newPerson.save();
      const token = jwt.sign({ userId: newPerson._id }, 'your_secret_key', { expiresIn: '1h' });
      return { token, person: newPerson };
    },
    updatePerson: async (_, { _id, email, password, phone, age, about, role }) => {
      const person = await Person.findById(_id);
      if (!person) {
        throw new UserInputError('User not found');
      }
      if (email) person.email = email;
      if (password) person.password = await bcrypt.hash(password, 12);
      if (phone) person.phone = phone;
      if (age) person.age = age;
      if (about) person.about = about;
      if (role) person.role = role;
      await person.save();
      return person;
    },
    deletePerson: async (_, { _id }) => {
      await Person.findByIdAndDelete(_id);
      return { success: true, message: 'User deleted' };
    },
    addReview: async (_, { review }) => {
      const newReview = new Review(review);
      await newReview.save();
      return newReview;
    },
    updateReview: async (_, { id, review }) => {
      const updatedReview = await Review.findByIdAndUpdate(id, review, { new: true });
      return updatedReview;
    },
    deleteReview: async (_, { id }) => {
      await Review.findByIdAndDelete(id);
      return { success: true, message: 'Review deleted' };
    },
    sendMessage: async (_, { messageInput }) => {
      const newMessage = new Message(messageInput);
      await newMessage.save();
      return newMessage;
    },
    updateMessage: async (_, { _id, readStatus }) => {
      const message = await Message.findById(_id);
      if (!message) {
        throw new UserInputError('Message not found');
      }
      message.readStatus = readStatus;
      await message.save();
      return message;
    },
    deleteMessage: async (_, { _id }) => {
      await Message.findByIdAndDelete(_id);
      return { success: true, message: 'Message deleted' };
    },
    addMeal: async (_, { meal }) => {
      const newMeal = new Meal(meal);
      await newMeal.save();
      return newMeal;
    },
    updateMeal: async (_, { _id, meal }) => {
      const updatedMeal = await Meal.findByIdAndUpdate(_id, meal, { new: true });
      return updatedMeal;
    },
    deleteMeal: async (_, { _id }) => {
      await Meal.findByIdAndDelete(_id);
      return { success: true, message: 'Meal deleted' };
    },
    addIngredient: async (_, { ingredient }) => {
      const newIngredient = new Ingredient(ingredient);
      await newIngredient.save();
      return newIngredient;
    },
    updateIngredient: async (_, { _id, ingredient }) => {
      const updatedIngredient = await Ingredient.findByIdAndUpdate(_id, ingredient, { new: true });
      return updatedIngredient;
    },
    deleteIngredient: async (_, { _id }) => {
      await Ingredient.findByIdAndDelete(_id);
      return { success: true, message: 'Ingredient deleted' };
    },
    createConversation: async (_, { participants }) => {
      const newConversation = new Conversation({ participants });
      await newConversation.save();
      return newConversation;
    },
    updateConversation: async (_, { _id, lastMessage }) => {
      const conversation = await Conversation.findById(_id);
      if (!conversation) {
        throw new UserInputError('Conversation not found');
      }
      conversation.lastMessage = lastMessage;
      conversation.lastUpdated = Date.now();
      await conversation.save();
      return conversation;
    },
    deleteConversation: async (_, { _id }) => {
      await Conversation.findByIdAndDelete(_id);
      return { success: true, message: 'Conversation deleted' };
    },
    addExerciseType: async (_, { name }) => {
      const newExerciseType = new ExerciseType({ name });
      await newExerciseType.save();
      return newExerciseType;
    },
    updateExerciseType: async (_, { _id, name }) => {
      const updatedExerciseType = await ExerciseType.findByIdAndUpdate(_id, { name }, { new: true });
      return updatedExerciseType;
    },
    deleteExerciseType: async (_, { _id }) => {
      await ExerciseType.findByIdAndDelete(_id);
      return { success: true, message: 'Exercise type deleted' };
    },
    addWorkoutType: async (_, { name }) => {
      const newWorkoutType = new WorkoutType({ name });
      await newWorkoutType.save();
      return newWorkoutType;
    },
    updateWorkoutType: async (_, { _id, name }) => {
      const updatedWorkoutType = await WorkoutType.findByIdAndUpdate(_id, { name }, { new: true });
      return updatedWorkoutType;
    },
    deleteWorkoutType: async (_, { _id }) => {
      await WorkoutType.findByIdAndDelete(_id);
      return { success: true, message: 'Workout type deleted' };
    },
  },
};

module.exports = resolvers;
