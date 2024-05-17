const { AuthenticationError } = require('apollo-server-express');
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
    login: async (parent, { email, password }) => {
      const person = await Person.findOne({ email });
    
      if (!person) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await person.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(person);
      return { token, person };
    },    
    addPerson: async (_, { username, email, password }) => {
      const person = new Person({ username, email, password });
      await person.save();
      const token = signToken(person);
      return { token, person };
    },
    updatePerson: (_, { _id, email, password, phone, age, about, role }) => 
      Person.findByIdAndUpdate(_id, { email, password, phone, age, about, role }, { new: true }),
    deletePerson: (_, { _id }) => 
      Person.findByIdAndDelete(_id).then(() => ({ success: true, message: "Person deleted successfully" })),
    addReview: (_, { review }) => new Review(review).save(),
    updateReview: (_, { id, review }) => 
      Review.findByIdAndUpdate(id, review, { new: true }),
    deleteReview: (_, { id }) => 
      Review.findByIdAndRemove(id).then(() => ({ success: true, message: "Review deleted successfully" })),
    sendMessage: (_, { messageInput }) => new Message(messageInput).save(),
    updateMessage: (_, { _id, readStatus }) => 
      Message.findByIdAndUpdate(_id, { readStatus }, { new: true }),
    deleteMessage: (_, { _id }) => 
      Message.findByIdAndDelete(_id).then(() => ({ success: true, message: "Message deleted successfully" })),
    addMeal: (_, { meal }) => new Meal(meal).save(),
    updateMeal: (_, { _id, meal }) => 
      Meal.findByIdAndUpdate(_id, meal, { new: true }),
    deleteMeal: (_, { _id }) => 
      Meal.findByIdAndDelete(_id).then(() => ({ success: true, message: "Meal deleted successfully" })),
    addIngredient: (_, { ingredient }) => new Ingredient(ingredient).save(),
    updateIngredient: (_, { _id, ingredient }) => 
      Ingredient.findByIdAndUpdate(_id, ingredient, { new: true }),
    deleteIngredient: (_, { _id }) => 
      Ingredient.findByIdAndDelete(_id).then(() => ({ success: true, message: "Ingredient deleted successfully" })),
    createConversation: (_, { participants }) => new Conversation({ participants }).save(),
    updateConversation: (_, { _id, lastMessage }) => 
      Conversation.findByIdAndUpdate(_id, { lastMessage, lastUpdated: new Date() }, { new: true }),
    deleteConversation: (_, { _id }) => 
      Conversation.findByIdAndDelete(_id).then(() => ({ success: true, message: "Conversation deleted successfully" })),
    addExerciseType: (_, { name }) => new ExerciseType({ name }).save(),
    updateExerciseType: (_, { _id, name }) => 
      ExerciseType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteExerciseType: (_, { _id }) => 
      ExerciseType.findByIdAndDelete(_id).then(() => ({ success: true, message: "Exercise type deleted successfully" })),
    addWorkoutType: (_, { name }) => new WorkoutType({ name }).save(),
    updateWorkoutType: (_, { _id, name }) => 
      WorkoutType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteWorkoutType: (_, { _id }) => 
      WorkoutType.findByIdAndDelete(_id).then(() => ({ success: true, message: "Workout type deleted successfully" })),
  }
};

module.exports = resolvers;
