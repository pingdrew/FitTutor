const db = require('./connection');
const { Person, Review, Message, Meal, Exercise, ExerciseType, Workout, WorkoutType, Conversation } = require('../models');

db.once('open', async () => {
  // Delete all documents in all collections
  await Promise.all([
    Person.deleteMany(),
    Review.deleteMany(),
    Message.deleteMany(),
    Meal.deleteMany(),
    Exercise.deleteMany(),
    ExerciseType.deleteMany(),
    Workout.deleteMany(),
    WorkoutType.deleteMany(),
    Conversation.deleteMany()
  ]);

  // Sample Persons
  const persons = await Person.insertMany([
    { username: 'JohnDoe', email: 'john@example.com', password: 'password123', role: 'User' },
    { username: 'JaneDoe', email: 'jane@example.com', password: 'password123', role: 'Admin' }
  ]);

  // Sample Reviews
  const reviews = await Review.insertMany([
    { sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Great experience!', rating: 5, timeStamp: new Date() }
  ]);

  // Sample Messages
  const messages = await Message.insertMany([
    { conversationId: null, sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Hello, Jane!', timeStamp: new Date(), readStatus: false }
  ]);

  // Sample Meals
  const meals = await Meal.insertMany([
    { conversationId: null, sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Lunch Meal', timeStamp: new Date(), readStatus: true }
  ]);

  // Sample Exercises
  const exercises = await Exercise.insertMany([
    // Your exercise data here
  ]);

  // Sample Workouts
  const workouts = await Workout.create([
    { name: 'Morning Routine', exercises: [exercises[0]._id], duration: 15, intensityLevel: 'High', targetAudience: 'Beginners', workoutType: { _id: null, name: 'Home Workout' }, description: 'A quick workout to start the day' }
  ]);

  // Sample Conversations
  const conversations = await Conversation.create([
    { participants: [persons[0]._id, persons[1]._id], lastMessage: messages[0]._id, lastUpdated: new Date() }
  ]);
});