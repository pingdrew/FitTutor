const { AuthenticationError } = require('apollo-server-express');
const {
  Person, Review, Message, Meal, Ingredient, Exercise, ExerciseType, Workout, WorkoutType, Conversation
} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      console.log("Context:", context);
      if (context.person) {
        try {
          const user = await Person.findById(context.person._id).populate('reviews conversations friends');
          console.log("User found:", user);
          return user;
        } catch (error) {
          console.error("Error fetching user:", error);
          throw new Error("Error fetching user");
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    allPersons: async () => {
      const persons = await Person.find().populate('reviews conversations friends');
      return persons;
    },
    personById: async (_, { _id }) => {
      const person = await Person.findById(_id).populate('reviews conversations favorites friends');
      return person;
    },
    allReviews: async () => {
      const reviews = await Review.find().populate('reviewer');
      return reviews;
    },
    reviewById: async (_, { _id }) => {
      const review = await Review.findById(_id).populate('reviewer');
      return review;
    },
    allMessages: async () => {
      const messages = await Message.find().populate('conversation sender receiver');
      return messages;
    },
    messageById: async (_, { _id }) => {
      const message = await Message.findById(_id).populate('conversation sender receiver');
      return message;
    },
    allMeals: async () => {
      const meals = await Meal.find().populate('ingredients reviews');
      return meals;
    },
    mealById: async (_, { _id }) => {
      const meal = await Meal.findById(_id).populate('ingredients reviews');
      return meal;
    },
    allIngredients: async () => {
      const ingredients = await Ingredient.find().populate('reviews');
      return ingredients;
    },
    ingredientById: async (_, { _id }) => {
      const ingredient = await Ingredient.findById(_id).populate('reviews');
      return ingredient;
    },
    allWorkouts: async () => {
      const workouts = await Workout.find().populate('exercises workoutType reviews');
      return workouts;
    },
    workoutById: async (_, { _id }) => {
      const workout = await Workout.findById(_id).populate('exercises workoutType reviews');
      return workout;
    },
    allExercises: async () => {
      const exercises = await Exercise.find().populate('type reviews');
      return exercises;
    },
    exerciseById: async (_, { _id }) => {
      const exercise = await Exercise.findById(_id).populate('type reviews');
      return exercise;
    },
    allConversations: async () => {
      const conversations = await Conversation.find().populate('participants lastMessage');
      return conversations;
    },
    conversationById: async (_, { _id }) => {
      const conversation = await Conversation.findById(_id).populate('participants lastMessage');
      return conversation;
    },
    allExerciseTypes: async () => {
      const exerciseTypes = await ExerciseType.find();
      return exerciseTypes;
    },
    exerciseTypeById: async (_, { _id }) => {
      const exerciseType = await ExerciseType.findById(_id);
      return exerciseType;
    },
    allWorkoutTypes: async () => {
      const workoutTypes = await WorkoutType.find();
      return workoutTypes;
    },
    workoutTypeById: async (_, { _id }) => {
      const workoutType = await WorkoutType.findById(_id);
      return workoutType;
    },
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
    updatePerson: async (_, { _id, email, password, phone, age, about, role }) =>
      Person.findByIdAndUpdate(_id, { email, password, phone, age, about, role }, { new: true }),
    deletePerson: async (_, { _id }) =>
      Person.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Person deleted successfully' })),
    addReview: async (_, { review }) => new Review(review).save(),
    updateReview: async (_, { id, review }) =>
      Review.findByIdAndUpdate(id, review, { new: true }),
    deleteReview: async (_, { id }) =>
      Review.findByIdAndRemove(id).then(() => ({ success: true, message: 'Review deleted successfully' })),
    sendMessage: async (_, { messageInput }) => new Message(messageInput).save(),
    updateMessage: async (_, { _id, readStatus }) =>
      Message.findByIdAndUpdate(_id, { readStatus }, { new: true }),
    deleteMessage: async (_, { _id }) =>
      Message.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Message deleted successfully' })),
    addMeal: async (_, { meal }) => new Meal(meal).save(),
    updateMeal: async (_, { _id, meal }) =>
      Meal.findByIdAndUpdate(_id, meal, { new: true }),
    deleteMeal: async (_, { _id }) =>
      Meal.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Meal deleted successfully' })),
    addIngredient: async (_, { ingredient }) => new Ingredient(ingredient).save(),
    updateIngredient: async (_, { _id, ingredient }) =>
      Ingredient.findByIdAndUpdate(_id, ingredient, { new: true }),
    deleteIngredient: async (_, { _id }) =>
      Ingredient.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Ingredient deleted successfully' })),
    createConversation: async (_, { participants }) => new Conversation({ participants }).save(),
    updateConversation: async (_, { _id, lastMessage }) =>
      Conversation.findByIdAndUpdate(_id, { lastMessage, lastUpdated: new Date() }, { new: true }),
    deleteConversation: async (_, { _id }) =>
      Conversation.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Conversation deleted successfully' })),
    addExerciseType: async (_, { name }) => new ExerciseType({ name }).save(),
    updateExerciseType: async (_, { _id, name }) =>
      ExerciseType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteExerciseType: async (_, { _id }) =>
      ExerciseType.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Exercise type deleted successfully' })),
    addWorkoutType: async (_, { name }) => new WorkoutType({ name }).save(),
    updateWorkoutType: async (_, { _id, name }) =>
      WorkoutType.findByIdAndUpdate(_id, { name }, { new: true }),
    deleteWorkoutType: async (_, { _id }) =>
      WorkoutType.findByIdAndDelete(_id).then(() => ({ success: true, message: 'Workout type deleted successfully' })),
  }
};

module.exports = resolvers;
