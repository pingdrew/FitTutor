const { Person, Review, Message, Meal, Exercise, Workout, Conversation } = require('./models');

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
    allWorkouts: () => Workout.find({}),
    workoutById: (_, { _id }) => Workout.findById(_id),
    allExercises: () => Exercise.find({}),
    exerciseById: (_, { _id }) => Exercise.findById(_id),
    allConversations: () => Conversation.find({}).populate('participants lastMessage'),
    conversationById: (_, { _id }) => Conversation.findById(_id).populate('participants lastMessage'),
  },
  Mutation: {
    addPerson: (_, { username, email, password }) => new Person({ username, email, password }).save(),
    updatePerson: (_, { _id, email, password }) => Person.findByIdAndUpdate(_id, { email, password }, { new: true }),
    deletePerson: async (_, { _id }) => {
      await Person.findByIdAndDelete(_id);
      return { success: true, message: "Person deleted successfully" };
    },
    addReview: (_, { sender_Id, receiver_Id, messageContent, rating }) => new Review({ sender_Id, receiver_Id, messageContent, rating }).save(),
    updateReview: (_, { _id, messageContent, rating }) => Review.findByIdAndUpdate(_id, { messageContent, rating }, { new: true }),
    deleteReview: async (_, { _id }) => {
      await Review.findByIdAndDelete(_id);
      return { success: true, message: "Review deleted successfully" };
    },
    sendMessage: (_, { sender_Id, receiver_Id, messageContent }) => new Message({ sender_Id, receiver_Id, messageContent }).save(),
    updateMessage: (_, { _id, readStatus }) => Message.findByIdAndUpdate(_id, { readStatus }, { new: true }),
    deleteMessage: async (_, { _id }) => {
      await Message.findByIdAndDelete(_id);
      return { success: true, message: "Message deleted successfully" };
    },
    addMeal: (_, { sender_Id, receiver_Id, messageContent }) => new Meal({ sender_Id, receiver_Id, messageContent }).save(),
    updateMeal: (_, { _id, messageContent }) => Meal.findByIdAndUpdate(_id, { messageContent }, { new: true }),
    deleteMeal: async (_, { _id }) => {
      await Meal.findByIdAndDelete(_id);
      return { success: true, message: "Meal deleted successfully" };
    },
    createConversation: (_, { participants }) => new Conversation({ participants }).save(),
    updateConversation: (_, { _id, lastMessage }) => Conversation.findByIdAndUpdate(_id, { lastMessage, lastUpdated: new Date() }, { new: true }),
    deleteConversation: async (_, { _id }) => {
      await Conversation.findByIdAndDelete(_id);
      return { success: true, message: "Conversation deleted successfully" };
    },
  }
};

module.exports = resolvers;
