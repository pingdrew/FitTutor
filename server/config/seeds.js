const mongoose = require('mongoose');
const { Person, Review, Message, Meal, Exercise, Workout, Conversation } = require('./models');  // Adjust the path as needed to your models

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {  // Change yourDatabaseName to your actual database name
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const main = async () => {
  try {
    await db.dropDatabase();

    // Sample Persons
    const persons = await Person.create([
      { username: 'JohnDoe', email: 'john@example.com', password: 'password123', role: 'User' },
      { username: 'JaneDoe', email: 'jane@example.com', password: 'password123', role: 'Admin' }
    ]);

    // Sample Reviews
    const reviews = await Review.create([
      { sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Great experience!', rating: 5, timeStamp: new Date() }
    ]);

    // Sample Messages
    const messages = await Message.create([
      { conversationId: null, sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Hello, Jane!', timeStamp: new Date(), readStatus: false }
    ]);

    // Sample Meals
    const meals = await Meal.create([
      { conversationId: null, sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Lunch Meal', timeStamp: new Date(), readStatus: true }
    ]);

    // Sample Exercises
    const exercises = await Exercise.create([
      { name: 'Push-ups', type: { _id: null, name: 'Strength' }, targetedMuscles: ['Chest', 'Shoulders', 'Triceps'], equipmentNeeded: 'None', description: 'Do 20 push-ups.', difficultyLevel: 'Medium' }
    ]);

    // Sample Workouts
    const workouts = await Workout.create([
      { name: 'Morning Routine', exercises: [exercises[0]._id], duration: 15, intensityLevel: 'High', targetAudience: 'Beginners', workoutType: { _id: null, name: 'Home Workout' }, description: 'A quick workout to start the day' }
    ]);

    // Sample Conversations
    const conversations = await Conversation.create([
      { participants: [persons[0]._id, persons[1]._id], lastMessage: messages[0]._id, lastUpdated: new Date() }
    ]);

    console.log('Database seeded!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    db.close();
  }
};

main();
