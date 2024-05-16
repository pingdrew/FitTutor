const { Person, Exercise, Workout, Ingredient, Meal, Review, Message, Conversation, ExerciseType, WorkoutType } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    allPersons: async () => Person.find({}),
    personById: async (_, { _id }) => Person.findById(_id),
    allReviews: async () => Review.find({}),
    reviewById: async (_, { _id }) => Review.findById(_id),
    allMessages: async () => Message.find({}),
    messageById: async (_, { _id }) => Message.findById(_id),
    allMeals: async () => Meal.find({}),
    mealById: async (_, { _id }) => Meal.findById(_id),
    allIngredients: async () => Ingredient.find({}),
    ingredientById: async (_, { _id }) => Ingredient.findById(_id),
    allWorkouts: async () => Workout.find({}),
    workoutById: async (_, { _id }) => Workout.findById(_id),
    allExercises: async () => Exercise.find({}),
    exerciseById: async (_, { _id }) => Exercise.findById(_id),
    allConversations: async () => Conversation.find({}).populate('participants lastMessage'),
    conversationById: async (_, { _id }) => Conversation.findById(_id).populate('participants lastMessage'),
    allExerciseTypes: async () => ExerciseType.find({}),
    exerciseTypeById: async (_, { _id }) => ExerciseType.findById(_id),
    allWorkoutTypes: async () => WorkoutType.find({}),
    workoutTypeById: async (_, { _id }) => WorkoutType.findById(_id),
    getAllResults: async () => {
      const exercises = await Exercise.find({});
      const workouts = await Workout.find({});
      const ingredients = await Ingredient.find({});
      const meals = await Meal.find({});
      return {
        exercises,
        workouts,
        ingredients,
        meals,
      };
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const person = await Person.findOne({ email });
      if (!person) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await bcrypt.compare(password, person.password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(person);
      return { token, person };
    },
    addPerson: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const person = await Person.create({ username, email, password: hashedPassword });
      const token = signToken(person);
      return { token, person };
    },
    updatePerson: async (_, { _id, email, password }) => {
      const updates = { email };
      if (password) {
        updates.password = await bcrypt.hash(password, 10);
      }
      return Person.findByIdAndUpdate(_id, updates, { new: true });
    },
    deletePerson: async (_, { _id }) => {
      await Person.findByIdAndDelete(_id);
      return { success: true, message: "Person deleted successfully" };
    },
    addReview: async (_, { review }) => Review.create(review),
    updateReview: async (_, { id, review }) => Review.findByIdAndUpdate(id, review, { new: true }),
    deleteReview: async (_, { id }) => {
      await Review.findByIdAndRemove(id);
      return { success: true, message: "Review deleted successfully" };
    },
    sendMessage: async (_, { messageInput }) => Message.create(messageInput),
    updateMessage: async (_, { _id, readStatus }) => Message.findByIdAndUpdate(_id, { readStatus }, { new: true }),
    deleteMessage: async (_, { _id }) => {
      await Message.findByIdAndDelete(_id);
      return { success: true, message: "Message deleted successfully" };
    },
    addMeal: async (_, { meal }) => Meal.create(meal),
    updateMeal: async (_, { _id, meal }) => Meal.findByIdAndUpdate(_id, meal, { new: true }),
    deleteMeal: async (_, { _id }) => {
      await Meal.findByIdAndDelete(_id);
      return { success: true, message: "Meal deleted successfully" };
    },
    addIngredient: async (_, { ingredient }) => Ingredient.create(ingredient),
    updateIngredient: async (_, { _id, ingredient }) => Ingredient.findByIdAndUpdate(_id, ingredient, { new: true }),
    deleteIngredient: async (_, { _id }) => {
      await Ingredient.findByIdAndDelete(_id);
      return { success: true, message: "Ingredient deleted successfully" };
    },
    createConversation: async (_, { participants }) => Conversation.create({ participants }),
    updateConversation: async (_, { _id, lastMessage }) => Conversation.findByIdAndUpdate(_id, { lastMessage, lastUpdated: new Date() }, { new: true }),
    deleteConversation: async (_, { _id }) => {
      await Conversation.findByIdAndDelete(_id);
      return { success: true, message: "Conversation deleted successfully" };
    },
    addExerciseType: async (_, { name }) => ExerciseType.create({ name }),
    updateExerciseType: async (_, { _id, name }) => ExerciseType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteExerciseType: async (_, { _id }) => {
      await ExerciseType.findByIdAndDelete(_id);
      return { success: true, message: "Exercise type deleted successfully" };
    },
    addWorkoutType: async (_, { name }) => WorkoutType.create({ name }),
    updateWorkoutType: async (_, { _id, name }) => WorkoutType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteWorkoutType: async (_, { _id }) => {
      await WorkoutType.findByIdAndDelete(_id);
      return { success: true, message: "Workout type deleted successfully" };
    },
  },
};

module.exports = resolvers;
