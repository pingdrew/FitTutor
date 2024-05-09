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

  // Exercise Types
  const exerciseTypes = await ExerciseType.insertMany([
    { name: 'Cardio' },
    { name: 'Strength' },
    { name: 'Flexibility' }
  ]);

  // Sample Exercises
  const exercises = await Exercise.insertMany([
    { name: 'Running', type: exerciseTypes[0]._id, targetedMuscles: ['Legs'], equipmentNeeded: 'None', description: 'Long-distance running.', difficultyLevel: 'Medium' },
    { name: 'Squats', type: exerciseTypes[1]._id, targetedMuscles: ['Legs', 'Glutes'], equipmentNeeded: 'Dumbbells', description: 'Squats with weights.', difficultyLevel: 'High' },
    { name: 'Yoga Stretch', type: exerciseTypes[2]._id, targetedMuscles: ['Full body'], equipmentNeeded: 'Yoga mat', description: 'Full body stretching routine.', difficultyLevel: 'Low' }
  ]);

  // Sample Workout Types
  const workoutTypes = await WorkoutType.insertMany([
    { name: 'Home Workout' },
    { name: 'Gym Session' },
    { name: 'Yoga Session' },
    { name: 'Outdoor Activity' }
  ]);

  // Sample Workouts
  const workouts = await Workout.insertMany([
    { name: 'Morning Routine', exercises: exercises.map(ex => ex._id), duration: 30, intensityLevel: 'High', targetAudience: 'Beginners', workoutType: workoutTypes[0]._id, description: 'A quick workout to start the day' },
    { name: 'Evening Unwind', exercises: [exercises[2]._id], duration: 15, intensityLevel: 'Low', targetAudience: 'All levels', workoutType: workoutTypes[2]._id, description: 'Relaxing yoga to end the day' }
  ]);

  // Sample Conversations
  const conversations = await Conversation.create([
    { participants: [persons[0]._id, persons[1]._id], lastMessage: messages[0]._id, lastUpdated: new Date() }
  ]);

  console.log('Database seeded successfully!');
  process.exit(0);
});
