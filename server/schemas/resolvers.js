const { AuthenticationError } = require('apollo-server-express');
console.log(__dirname);
const { Person, Review, Message, Meal, Ingredient, Exercise, ExerciseType, Workout, WorkoutType, Conversation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    allPersons: () => Person.find({}),
    personById: (_, { _id }) => Person.findById(_id),
    allReviews: () => Review.find({}),
    reviewById: (_, { _id }) => Review.findById(_id),
    allMessages: () => Message.find({}),
    messageById: (_, { _id }) => Message.findById(_id),
    allMeals: () => Meal.find({}),
    mealById: (_, { _id }) => Meal.findById(_id),
    allIngredients: () => Ingredient.find({}),
    ingredientById: (_, { _id }) => Ingredient.findById(_id),
    allWorkouts: () => Workout.find({}),
    workoutById: (_, { _id }) => Workout.findById(_id),
    allExercises: () => Exercise.find({}),
    exerciseById: (_, { _id }) => Exercise.findById(_id),
    allConversations: () => Conversation.find({}).populate('participants lastMessage'),
    conversationById: (_, { _id }) => Conversation.findById(_id).populate('participants lastMessage'),
    allExerciseTypes: () => ExerciseType.find({}),
    exerciseTypeById: (_, { _id }) => ExerciseType.findById(_id),
    allWorkoutTypes: () => WorkoutType.find({}),
    workoutTypeById: (_, { _id }) => WorkoutType.findById(_id),
  },
  Mutation: {
    addPerson: (_, { username, email, password }) => new Person({ username, email, password }).save(),
    updatePerson: (_, { _id, email, password }) => Person.findByIdAndUpdate(_id, { email, password }, { new: true }),
    deletePerson: async (_, { _id }) => {
      await Person.findByIdAndDelete(_id);
      return { success: true, message: "Person deleted successfully" };
    },
    addReview: async (_, { review }) => new Review(review).save(),
    updateReview: async (_, { id, review }) => Review.findByIdAndUpdate(id, review, { new: true }),
    deleteReview: async (_, { id }) => {
      await Review.findByIdAndRemove(id);
      return { success: true, message: "Review deleted successfully" };
    },
    sendMessage: (_, { sender_Id, receiver_Id, messageContent }) => new Message({ sender_Id, receiver_Id, messageContent }).save(),
    updateMessage: (_, { _id, readStatus }) => Message.findByIdAndUpdate(_id, { readStatus }, { new: true }),
    deleteMessage: async (_, { _id }) => {
      await Message.findByIdAndDelete(_id);
      return { success: true, message: "Message deleted successfully" };
    },
    addMeal: (_, { meal }) => new Meal(meal).save(),
    updateMeal: (_, { _id, meal }) => Meal.findByIdAndUpdate(_id, meal, { new: true }),
    deleteMeal: async (_, { _id }) => {
      await Meal.findByIdAndDelete(_id);
      return { success: true, message: "Meal deleted successfully" };
    },
    addIngredient: (_, { ingredient }) => new Ingredient(ingredient).save(),
    updateIngredient: (_, { _id, ingredient }) => Ingredient.findByIdAndUpdate(_id, ingredient, { new: true }),
    deleteIngredient: async (_, { _id }) => {
      await Ingredient.findByIdAndDelete(_id);
      return { success: true, message: "Ingredient deleted successfully" };
    },
    createConversation: (_, { participants }) => new Conversation({ participants }).save(),
    updateConversation: (_, { _id, lastMessage }) => Conversation.findByIdAndUpdate(_id, { lastMessage, lastUpdated: new Date() }, { new: true }),
    deleteConversation: async (_, { _id }) => {
      await Conversation.findByIdAndDelete(_id);
      return { success: true, message: "Conversation deleted successfully" };
    },
    addExerciseType: (_, { name }) => new ExerciseType({ name }).save(),
    updateExerciseType: (_, { _id, name }) => ExerciseType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteExerciseType: async (_, { _id }) => {
      await ExerciseType.findByIdAndDelete(_id);
      return { success: true, message: "Exercise type deleted successfully" };
    },
    addWorkoutType: (_, { name }) => new WorkoutType({ name }).save(),
    updateWorkoutType: (_, { _id, name }) => WorkoutType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteWorkoutType: async (_, { _id }) => {
      await WorkoutType.findByIdAndDelete(_id);
      return { success: true, message: "Workout type deleted successfully" };
    },
  }
};

module.exports = resolvers;
