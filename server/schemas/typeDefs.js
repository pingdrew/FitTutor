const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Person {
    _id: ID!
    username: String!
    email: String!
    password: String!
    phone: String
    age: Int
    about: String
    role: String
    specializations: [String]
    certifications: [String]
    reviews: [Review]
    conversations: [Conversation]
    favorites: [Exercise]
    friends: [Person]
  }

  type Review {
    _id: ID!
    sender_Id: Person
    receiver_Id: Person
    messageContent: String!
    timeStamp: String!
    rating: Int!
  }

  type Message {
    _id: ID!
    conversationId: Conversation!
    sender_Id: Person!
    receiver_Id: Person!
    messageContent: String!
    timeStamp: String!
    readStatus: Boolean
    attachments: [String]
  }

  type Meal {
    _id: ID!
    conversationId: ID
    sender_Id: Person
    receiver_Id: Person
    messageContent: String!
    timeStamp: String!
    readStatus: Boolean
    attachments: [String]
  }

  type ExerciseType {
    _id: ID!
    name: String!
  }

  type Exercise {
    _id: ID!
    name: String!
    type: ExerciseType
    targetedMuscles: [String]
    equipmentNeeded: String
    description: String
    difficultyLevel: String
    photo: [String]
    video: [String]
  }

  type WorkoutType {
    _id: ID!
    name: String!
  }

  type Workout {
    _id: ID!
    name: String!
    exercises: [Exercise]
    duration: Int
    intensityLevel: String
    targetAudience: String
    workoutType: WorkoutType
    description: String
    photo: [String]
    video: [String]
  }

  type Conversation {
    _id: ID!
    participants: [Person]
    lastMessage: Message
    lastUpdated: String
  }

  type MutationResponse {
    success: Boolean!
    message: String!
  }

  type Query {
    allPersons: [Person]
    personById(_id: ID!): Person
    allReviews: [Review]
    reviewById(_id: ID!): Review
    allMessages: [Message]
    messageById(_id: ID!): Message
    allMeals: [Meal]
    mealById(_id: ID!): Meal
    allWorkouts: [Workout]
    workoutById(_id: ID!): Workout
    allExercises: [Exercise]
    exerciseById(_id: ID!): Exercise
    allConversations: [Conversation]
    conversationById(_id: ID!): Conversation
    allExerciseTypes: [ExerciseType]
    exerciseTypeById(_id: ID!): ExerciseType
    allWorkoutTypes: [WorkoutType]
    workoutTypeById(_id: ID!): WorkoutType  
  }

  type Mutation {
    addPerson(username: String!, email: String!, password: String!): Person
    updatePerson(_id: ID!, email: String, password: String): Person
    deletePerson(_id: ID!): MutationResponse

    addReview(sender_Id: ID!, receiver_Id: ID!, messageContent: String!, rating: Int!): Review
    updateReview(_id: ID!, messageContent: String, rating: Int): Review
    deleteReview(_id: ID!): MutationResponse

    sendMessage(sender_Id: ID!, receiver_Id: ID!, messageContent: String!): Message
    updateMessage(_id: ID!, readStatus: Boolean): Message
    deleteMessage(_id: ID!): MutationResponse

    addMeal(sender_Id: ID!, receiver_Id: ID!, messageContent: String!): Meal
    updateMeal(_id: ID!, messageContent: String): Meal
    deleteMeal(_id: ID!): MutationResponse

    createConversation(participants: [ID!]!): Conversation
    updateConversation(_id: ID!, lastMessage: ID!): Conversation
    deleteConversation(_id: ID!): MutationResponse
    addExerciseType(name: String!): ExerciseType
    updateExerciseType(_id: ID!, name: String!): ExerciseType
    deleteExerciseType(_id: ID!): MutationResponse
  
    addWorkoutType(name: String!): WorkoutType
    updateWorkoutType(_id: ID!, name: String!): WorkoutType
    deleteWorkoutType(_id: ID!): MutationResponse  
  }
`;

module.exports = typeDefs;
