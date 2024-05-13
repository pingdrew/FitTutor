const db = require('./connection');
const { Person, Review, Message, Meal, Exercise, ExerciseType, Workout, WorkoutType, Conversation } = require('../models');
// console.log('Meal seeding complete!');

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
  console.log('Database Dropped!');


  // Sample Persons
  const persons = await Person.insertMany([
    { username: 'drew', email: 'drew@gmail.com', password: 'nothappenin', role: 'Admin' },
    { username: 'JaneDoe', email: 'jane@example.com', password: 'password123', role: 'User' }
  ]);
  console.log('Person seeding complete!');

  // Sample Reviews
  const reviews = await Review.insertMany([
    { sender_Id: persons[0]._id, receiver_Id: persons[1]._id, onModel: 'Exercise', messageContent: 'Great experience!', rating: 5, timeStamp: new Date() }
  ]);
  console.log('Review seeding complete!');

  // Sample Messages
  const messages = await Message.insertMany([
    { conversationId: null, sender_Id: persons[0]._id, receiver_Id: persons[1]._id, messageContent: 'Hello, Jane!', timeStamp: new Date(), readStatus: false }
  ]);
  console.log('Message seeding complete!');
  
  // Sample Conversations
  const conversations = await Conversation.create([
    { participants: [persons[0]._id, persons[1]._id], lastMessage: messages[0]._id, lastUpdated: new Date() }
  ]);
  console.log('Conversation seeding complete!');

  // Sample Workout Types
  const workoutTypes = await WorkoutType.insertMany([
    { name: 'Home Workout' },
    { name: 'Gym Session' },
    { name: 'Yoga Session' },
    { name: 'Outdoor Activity' }
  ]);
  console.log('WorkoutType seeding complete!');

  // Sample Workouts
  const workouts = await Workout.insertMany([
    { name: 'Morning Routine', exercises: [], duration: 30, intensityLevel: 'High', targetAudience: 'Beginners', workoutType: workoutTypes[0]._id, description: 'A quick workout to start the day' },
    { name: 'Evening Unwind', exercises: [], duration: 15, intensityLevel: 'Low', targetAudience: 'All levels', workoutType: workoutTypes[2]._id, description: 'Relaxing yoga to end the day' }
  ]);
  console.log('Workout seeding complete!');


  // Exercise Types

  const exerciseTypes = await ExerciseType.insertMany([
    {name: "Strength Training - Free Weights"},
    {name: "Strength Training - Machine Weights"},
    {name: "Strength Training - Bodyweight"},
    {name: "Strength Training - Resistance Bands"},
    {name: "Strength Training - Isometrics"},
    {name: "Cardiovascular - Running"},
    {name: "Cardiovascular - Cycling"},
    {name: "Cardiovascular - Swimming"},
    {name: "Cardiovascular - Aerobics"},
    {name: "Cardiovascular - Rowing"},
    {name: "Flexibility - Stretching"},
    {name: "Flexibility - Yoga"},
    {name: "Flexibility - Pilates"},
    {name: "Flexibility - Dynamic Stretching"},
    {name: "Flexibility - Ballistic Stretching"},
    {name: "Balance and Stability - Core Training"},
    {name: "Balance and Stability - Balance Boards"},
    {name: "Balance and Stability - Pilates"},
    {name: "Balance and Stability - Tai Chi"},
    {name: "HIIT - Sprinting"},
    {name: "HIIT - Tabata"},
    {name: "HIIT - Circuit Training"},
    {name: "Sports-Specific Training - Basketball Drills"},
    {name: "Sports-Specific Training - Soccer Drills"},
    {name: "Sports-Specific Training - Tennis Drills"},
    {name: "Sports-Specific Training - Golf Swing Practice"},
    {name: "Rehabilitative - Physical Therapy"},
    {name: "Rehabilitative - Post-operative"},
    {name: "Rehabilitative - Back Pain Strengthening"},
    {name: "Rehabilitative - Joint Mobility"},
    {name: "Dance - Ballet"},
    {name: "Dance - Hip Hop"},
    {name: "Dance - Contemporary"},
    {name: "Dance - Ballroom"},
    {name: "Functional Training - CrossFit"},
    {name: "Functional Training - Boot Camp"},
    {name: "Outdoor Activities - Hiking"},
    {name: "Outdoor Activities - Rock Climbing"},
    {name: "Outdoor Activities - Paddle Sports"},
    {name: "Outdoor Activities - Skiing"}
  ]);

  // Exercises
  const exercises = await Exercise.insertMany([
    {
      name: "Bench Press",
      type: exerciseTypes[0], // Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Chest", "Triceps", "Shoulders"],
      equipmentNeeded: "Barbell, Bench",
      description: "Lie back on a bench holding a barbell in the rack above you with a shoulder-width, overhand grip. Lift the bar off the rack and position it above your chest with arms fully extended. Lower the bar straight down, pause, and then press the bar back up to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Leg Press",
      type: exerciseTypes[1], // Reference to "Strength Training - Machine Weights"
      targetedMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
      equipmentNeeded: "Leg Press Machine",
      description: "Sit down on a leg press machine with your feet on the platform about shoulder width apart. Lower the platform until your knees are bent at about 90 degrees, then press back to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Planks",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Core"],
      equipmentNeeded: "None",
      description: "Start in a forearm plank position with your elbows on the floor directly underneath your shoulders and your legs extended behind you. Keep your body straight from head to heels.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Resistance Band Chest Press",
      type: exerciseTypes[3], // Reference to "Strength Training - Resistance Bands"
      targetedMuscles: ["Chest", "Triceps"],
      equipmentNeeded: "Resistance Bands",
      description: "Attach the resistance bands to a stable object behind you. Hold the ends of the bands, step forward to create tension, and press your hands forward and then back towards your chest.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Sprinting",
      type: exerciseTypes[19], // Reference to "HIIT - Sprinting"
      targetedMuscles: ["Legs"],
      equipmentNeeded: "Track or Open Space",
      description: "Run at full speed over a short distance, such as 100 meters.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Squats",
      type: exerciseTypes[0], // Again, Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
      equipmentNeeded: "Barbell",
      description: "Stand with feet a little wider than shoulder-width apart, hips stacked over knees, and knees over ankles. Roll the shoulders back and down away from the ears. Extend arms out straight so they are parallel with the ground, palms facing down. Initiate the movement by inhaling and unlocking the hips, slightly bringing them back. Keep sending hips backward as the knees begin to bend. While the butt starts to stick out, make sure the chest and shoulders stay upright, and the back stays straight. Keep the head facing forward with eyes straight ahead for a neutral spine. The best squats are the deepest ones your mobility allows. Optimal squat depth would be your hips sinking below the knees (hamstrings covering calves).",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Deadlifts",
      type: exerciseTypes[0], // Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Back", "Glutes", "Hamstrings"],
      equipmentNeeded: "Barbell",
      description: "Bend at your hips and knees and grab the bar with an overhand grip, your hands just beyond shoulder width. Without allowing your lower back to round, pull your torso back and up, thrust your hips forward, and stand up with the barbell. Squeeze your glutes as you perform the movement. Lower the bar to the floor, keeping it as close to your body as possible.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Shoulder Press",
      type: exerciseTypes[0], // Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Shoulders", "Triceps"],
      equipmentNeeded: "Dumbbells or Barbell",
      description: "Sit or stand with your back straight and hold a dumbbell in each hand at the level of your shoulders, palms facing forward. Extend your arms above your head until they're fully extended. Lower the dumbbells back down to shoulder level.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Bicep Curls",
      type: exerciseTypes[0], // Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Biceps"],
      equipmentNeeded: "Dumbbells",
      description: "Stand up straight with a dumbbell in each hand at arm's length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Tricep Extensions",
      type: exerciseTypes[0], // Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Triceps"],
      equipmentNeeded: "Dumbbell or Barbell",
      description: "Stand with a dumbbell held by both hands. Your feet should be about shoulder-width apart. The resistance should be resting on the palms of your hands with your thumbs around it. The palm of the hand should be facing inward. Slowly lower the resistance in an arc behind your head while your upper arms remain stationary, inhale as you perform this step. Go back to the starting position by using the triceps to raise the dumbbell.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Chest Press Machine",
      type: exerciseTypes[1], // Reference to "Strength Training - Machine Weights"
      targetedMuscles: ["Chest", "Triceps"],
      equipmentNeeded: "Chest Press Machine",
      description: "Adjust the seat so the handles are at chest level. Sit with your back against the pad and push the handles forward until your arms are fully extended, then return slowly to the starting position.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Lat Pulldown",
      type: exerciseTypes[1], // Reference to "Strength Training - Machine Weights"
      targetedMuscles: ["Latissimus Dorsi", "Biceps", "Upper Back"],
      equipmentNeeded: "Lat Pulldown Machine",
      description: "Sit down at a lat pulldown station and grab the bar with an overhand grip that's just beyond shoulder width. Without moving your torso, pull the bar down to your chest as you squeeze your shoulder blades together. Pause, then slowly return the bar to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Cable Crossover",
      type: exerciseTypes[1], // Reference to "Strength Training - Machine Weights"
      targetedMuscles: ["Chest"],
      equipmentNeeded: "Cable Machine",
      description: "Stand in the middle of a cable station with the cables set high. Grasp the handles and step forward to create tension. Bring your hands together in front of your chest, flexing your pecs as you go. Slowly return to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Pec Deck",
      type: exerciseTypes[1], // Reference to "Strength Training - Machine Weights"
      targetedMuscles: ["Chest"],
      equipmentNeeded: "Pec Deck Machine",
      description: "Sit on the machine with your back flat on the pad. Place your arms on the platforms. Push the platforms together slowly as you squeeze your chest in the middle. Return to the starting position until your chest muscles are fully stretched.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Push-Ups",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Chest", "Triceps", "Shoulders"],
      equipmentNeeded: "None",
      description: "Start in a plank position, lower your body until your chest nearly touches the floor, push back up.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Pull-Ups",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Latissimus Dorsi", "Biceps", "Upper Back"],
      equipmentNeeded: "Pull-Up Bar",
      description: "Grasp a pull-up bar with an overhand grip, hands shoulder-width apart. Pull your body up until your chin is over the bar, then lower yourself back down to the full extended position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Bodyweight Squats",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
      equipmentNeeded: "None",
      description: "Stand with feet shoulder-width apart. Bend your knees and lower your hips as if sitting in a chair, while keeping your chest up and your back straight. Return to the starting position.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Lunges",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Quadriceps", "Glutes"],
      equipmentNeeded: "None",
      description: "Step forward with one leg, lowering your hips until both knees are bent at about a 90-degree angle. Make sure your front knee is directly above your ankle, not pushed out too far, and make sure your other knee doesn't touch the floor. Keep the weight in your heels as you push back up to the starting position.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Band Pull Aparts",
      type: exerciseTypes[3], // Reference to "Strength Training - Resistance Bands"
      targetedMuscles: ["Shoulders", "Upper Back"],
      equipmentNeeded: "Resistance Band",
      description: "Hold a resistance band in front of you with both hands, arms fully extended. Keeping your arms straight, pull the band apart and bring it toward your chest by moving your arms out to the sides. Slowly return to the starting position.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Band Bicep Curls",
      type: exerciseTypes[3], // Reference to "Strength Training - Resistance Bands"
      targetedMuscles: ["Biceps"],
      equipmentNeeded: "Resistance Band",
      description: "Stand on a resistance band with your feet shoulder-width apart. Hold each end with your arms at your sides and palms facing forward. Curl your hands up toward your shoulders, keeping your elbows close to your body. Slowly lower your hands back to the starting position.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Band Tricep Extensions",
      type: exerciseTypes[3], // Reference to "Strength Training - Resistance Bands"
      targetedMuscles: ["Triceps"],
      equipmentNeeded: "Resistance Band",
      description: "Attach a resistance band to a high anchor point. Facing away from the anchor, grasp the band with both hands above your head. Extend your arms to raise your hands above your head fully. Slowly return to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Resistance Band Squats",
      type: exerciseTypes[3], // Reference to "Strength Training - Resistance Bands"
      targetedMuscles: ["Quadriceps", "Glutes"],
      equipmentNeeded: "Resistance Band",
      description: "Stand on a resistance band with your feet slightly wider than shoulder-width apart. Hold the ends of the band up at your shoulders. Squat down while keeping your chest up and your knees behind your toes. Press back up to the starting position.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Plank Holds",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Core"],
      equipmentNeeded: "None",
      description: "Get into a forearm plank position. Ensure your elbows are below your shoulders and your body is in a straight line from head to heels. Hold this position for as long as possible while maintaining good form.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Wall Sit",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Quadriceps"],
      equipmentNeeded: "None",
      description: "Slide your back down a wall until your thighs are parallel to the ground. Ensure your knees are directly above your ankles and keep your back straight against the wall. Hold this position for as long as you can.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Isometric Squats",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Quadriceps", "Glutes"],
      equipmentNeeded: "None",
      description: "Lower into a squat position and hold halfway down, keeping the knees behind the toes and chest upright. Hold this position for several seconds before standing back up.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Isometric Push-Ups",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Chest", "Triceps", "Shoulders"],
      equipmentNeeded: "None",
      description: "Get into a push-up position and lower yourself to halfway. Hold this position for several seconds before pushing back up to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Isometric Bicep Hold",
      type: exerciseTypes[0], // Reference to "Strength Training - Free Weights"
      targetedMuscles: ["Biceps"],
      equipmentNeeded: "Dumbbells",
      description: "Hold a dumbbell in each hand with your elbows at a 90-degree angle. Maintain this position, keeping your biceps engaged without moving for several seconds.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Long-Distance Running",
      type: exerciseTypes[5], // Reference to "Cardiovascular - Running"
      targetedMuscles: ["Cardiovascular System"],
      equipmentNeeded: "Track, Road, Trail",
      description: "Run at a steady pace over a long distance, typically 5 km or more, focusing on maintaining a consistent speed and efficient breathing.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Interval Running",
      type: exerciseTypes[5], // Reference to "Cardiovascular - Running"
      targetedMuscles: ["Cardiovascular System", "Legs"],
      equipmentNeeded: "Track or Open Space",
      description: "Alternate between running at a fast pace for a set distance or time and walking or jogging at a slower pace for recovery.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Hill Sprints",
      type: exerciseTypes[5], // Reference to "Cardiovascular - Running"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Hill",
      description: "Sprint up a hill as fast as possible, then walk or jog back down for recovery, repeating several times.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Treadmill Running",
      type: exerciseTypes[5], // Reference to "Cardiovascular - Running"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Treadmill",
      description: "Run on a treadmill at various speeds and inclines, suitable for all weather conditions and controlled training.",
      difficultyLevel: "Beginner to Advanced"
    },
    {
      name: "Road Cycling",
      type: exerciseTypes[6], // Reference to "Cardiovascular - Cycling"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Road Bike",
      description: "Cycle on paved roads, focusing on distance and speed. Suitable for endurance training and competitive cycling.",
      difficultyLevel: "Intermediate to Advanced"
    },
    {
      name: "Mountain Biking",
      type: exerciseTypes[6], // Reference to "Cardiovascular - Cycling"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Mountain Bike",
      description: "Ride on off-road trails, often over rough terrain, requiring technical biking skills and a high level of physical fitness.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Indoor Cycling Classes",
      type: exerciseTypes[6], // Reference to "Cardiovascular - Cycling"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Stationary Bike",
      description: "Participate in a group fitness class on stationary bikes, led by an instructor who guides the session with varying speeds and resistance levels.",
      difficultyLevel: "Beginner to Intermediate"
    },
    {
      name: "Stationary Bike Intervals",
      type: exerciseTypes[6], // Reference to "Cardiovascular - Cycling"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Stationary Bike",
      description: "Perform intervals on a stationary bike, alternating between high-intensity sprints and low-intensity recovery periods.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Recumbent Bike",
      type: exerciseTypes[6], // Reference to "Cardiovascular - Cycling"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Recumbent Bike",
      description: "Cycle on a recumbent bike, which provides back support and a different leg angle, suitable for those with certain health conditions or preferences for comfort.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Hamstring Stretch",
      type: exerciseTypes[10], // Reference to "Flexibility - Stretching"
      targetedMuscles: ["Hamstrings"],
      equipmentNeeded: "None",
      description: "Sit on the ground with one leg extended straight ahead and the other tucked in. Reach forward towards the toes of the extended leg, holding the stretch without bouncing.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Quadriceps Stretch",
      type: exerciseTypes[10], // Reference to "Flexibility - Stretching"
      targetedMuscles: ["Quadriceps"],
      equipmentNeeded: "None",
      description: "Stand on one leg, pull your other leg behind you with the same hand, pushing your hips forward while pulling your heel towards your buttock.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Calf Stretch",
      type: exerciseTypes[10], // Reference to "Flexibility - Stretching"
      targetedMuscles: ["Calves"],
      equipmentNeeded: "None or Wall",
      description: "Place your hands on a wall and extend one leg back, keeping it straight and pressing the heel into the ground. The other leg should be bent at the knee in front of you.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Shoulder Stretch",
      type: exerciseTypes[10], // Reference to "Flexibility - Stretching"
      targetedMuscles: ["Shoulders"],
      equipmentNeeded: "None",
      description: "Reach one arm across your body and use the other arm to pull the elbow of the extended arm towards your chest.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Tricep Stretch",
      type: exerciseTypes[10], // Reference to "Flexibility - Stretching"
      targetedMuscles: ["Triceps"],
      equipmentNeeded: "None",
      description: "Raise one arm overhead, bend the elbow to touch the opposite shoulder blade, and use the other hand to gently pull the elbow.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Downward Dog",
      type: exerciseTypes[11], // Reference to "Flexibility - Yoga"
      targetedMuscles: ["Hamstrings", "Calves", "Back"],
      equipmentNeeded: "Yoga Mat",
      description: "Start on your hands and knees, with your wrists under your shoulders and knees under your hips. Lift your hips up and back, pushing your heels towards the floor. Straighten your legs and arms to form an inverted V shape.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Warrior Poses",
      type: exerciseTypes[11], // Reference to "Flexibility - Yoga"
      targetedMuscles: ["Legs", "Core", "Arms"],
      equipmentNeeded: "Yoga Mat",
      description: "Step one foot back and bend the front knee to a 90-degree angle, keeping the back leg straight. Extend your arms out to the sides and gaze over your front hand.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Tree Pose",
      type: exerciseTypes[11], // Reference to "Flexibility - Yoga"
      targetedMuscles: ["Legs", "Core"],
      equipmentNeeded: "None",
      description: "Stand on one leg, place the sole of your other foot on your inner thigh, maintaining balance while keeping your hips facing forward. Bring your hands into prayer position in front of your chest.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Cobra Pose",
      type: exerciseTypes[11], // Reference to "Flexibility - Yoga"
      targetedMuscles: ["Back", "Shoulders", "Chest"],
      equipmentNeeded: "Yoga Mat",
      description: "Lie on your stomach with your hands under your shoulders. Push through your hands to lift your chest off the floor, extending your back.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Child’s Pose",
      type: exerciseTypes[11], // Reference to "Flexibility - Yoga"
      targetedMuscles: ["Back", "Shoulders"],
      equipmentNeeded: "Yoga Mat",
      description: "Sit back on your heels with your knees wide apart, bend forward to lay your torso between your thighs, and stretch your arms forward on the floor.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Single-Leg Plank",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Core", "Glutes"],
      equipmentNeeded: "None",
      description: "Perform a standard plank, then lift one leg off the ground and hold. Maintain a straight line from head to heels.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Swiss Ball Plank",
      type: exerciseTypes[16], // Reference to "Balance and Stability - Core Training"
      targetedMuscles: ["Core"],
      equipmentNeeded: "Swiss Ball",
      description: "Place your forearms on a Swiss ball and extend your legs behind you, forming a straight line from head to heels.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Balance Board Plank",
      type: exerciseTypes[16], // Reference to "Balance and Stability - Core Training"
      targetedMuscles: ["Core"],
      equipmentNeeded: "Balance Board",
      description: "Perform a plank with your forearms on a balance board, maintaining stability and a straight body line.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Side Planks",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Obliques", "Core"],
      equipmentNeeded: "None",
      description: "Lie on one side with your legs straight. Prop yourself up with your forearm so your body forms a diagonal line. Rest your other hand on your hip.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Stability Ball Rollouts",
      type: exerciseTypes[16], // Reference to "Balance and Stability - Core Training"
      targetedMuscles: ["Core", "Shoulders"],
      equipmentNeeded: "Stability Ball",
      description: "Kneel on the floor and place your forearms on a stability ball. Slowly roll the ball forward, extending your body as straight as possible, then pull back to the starting position.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Sprint Intervals",
      type: exerciseTypes[19], // Reference to "HIIT - Sprinting"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Track or Open Space",
      description: "Alternate between sprinting at maximum effort for 20-30 seconds and resting or jogging for 1-2 minutes.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Hill Repeats",
      type: exerciseTypes[19], // Reference to "HIIT - Sprinting"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Hill",
      description: "Sprint up a hill, then walk or jog back down for recovery, repeating the process several times.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Speed Drills",
      type: exerciseTypes[22], // Reference to "Sports-Specific Training - Basketball Drills"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Cones, Track",
      description: "Set up cones for drills that require quick changes of direction, sprinting from one cone to another as fast as possible.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Tabata Sprints",
      type: exerciseTypes[19], // Reference to "HIIT - Sprinting"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Track or Open Space",
      description: "Perform 20 seconds of all-out sprints followed by 10 seconds of rest, repeating for 4 minutes (8 cycles).",
      difficultyLevel: "Advanced"
    },
    {
      name: "Shuttle Runs",
      type: exerciseTypes[19], // Reference to "HIIT - Sprinting"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Cones, Track",
      description: "Set up two cones about 25 yards apart. Sprint from one cone to the other and back, repeating several times for intervals.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Dribbling Drills",
      type: exerciseTypes[22], // Reference to "Sports-Specific Training - Basketball Drills"
      targetedMuscles: ["Arms", "Cardiovascular System"],
      equipmentNeeded: "Basketball, Court",
      description: "Practice dribbling the basketball with alternating hands, focusing on speed and control. Include changes in direction and speed to simulate game situations.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Shooting Drills",
      type: exerciseTypes[22], // Reference to "Sports-Specific Training - Basketball Drills"
      targetedMuscles: ["Arms", "Legs"],
      equipmentNeeded: "Basketball, Hoop",
      description: "Perform various shooting exercises from different positions on the court. Practice free throws, three-pointers, and jump shots, focusing on form and accuracy.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Defensive Stance Drills",
      type: exerciseTypes[22], // Reference to "Sports-Specific Training - Basketball Drills"
      targetedMuscles: ["Legs", "Core"],
      equipmentNeeded: "None",
      description: "Work on maintaining a proper defensive stance. Practice lateral movements, staying low, and quick footwork to simulate guarding an opponent.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Layup Drills",
      type: exerciseTypes[22], // Reference to "Sports-Specific Training - Basketball Drills"
      targetedMuscles: ["Legs", "Core", "Arms"],
      equipmentNeeded: "Basketball, Hoop",
      description: "Practice layups from various angles and speeds. Focus on the approach, jump, and shot execution while using both the left and right hands.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Passing Drills",
      type: exerciseTypes[23], // Reference to "Sports-Specific Training - Soccer Drills"
      targetedMuscles: ["Arms", "Core"],
      equipmentNeeded: "Basketball, Court",
      description: "Perform various passing techniques, including chest passes, bounce passes, and overhead passes. Practice accuracy and timing with a partner or against a wall.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Passing Patterns",
      type: exerciseTypes[23], // Reference to "Sports-Specific Training - Soccer Drills"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Soccer Ball, Cones",
      description: "Set up cones in various patterns and practice passing the ball accurately through the cones. Work on both short and long passes using different parts of the foot.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Dribbling Courses",
      type: exerciseTypes[23], // Reference to "Sports-Specific Training - Soccer Drills"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Soccer Ball, Cones",
      description: "Set up a course of cones and practice dribbling the ball through the cones with speed and control. Focus on close ball handling skills and quick changes in direction.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Shooting Practice",
      type: exerciseTypes[23], // Reference to "Sports-Specific Training - Soccer Drills"
      targetedMuscles: ["Legs"],
      equipmentNeeded: "Soccer Ball, Goal",
      description: "Practice shooting from various distances and angles. Focus on accuracy and power, using both feet and different techniques such as volleys, headers, and ground shots.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Defensive Moves",
      type: exerciseTypes[23], // Reference to "Sports-Specific Training - Soccer Drills"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "None",
      description: "Practice various defensive techniques, including tackling, intercepting, and marking. Work on positioning, footwork, and anticipation.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Goalkeeping Drills",
      type: exerciseTypes[23], // Reference to "Sports-Specific Training - Soccer Drills"
      targetedMuscles: ["Arms", "Legs", "Core"],
      equipmentNeeded: "Soccer Ball, Goal",
      description: "Practice different goalkeeping skills such as diving, catching, and throwing. Work on reflexes, positioning, and distribution.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Freestyle Stroke",
      type: exerciseTypes[7], // Reference to "Cardiovascular - Swimming"
      targetedMuscles: ["Arms", "Legs", "Core"],
      equipmentNeeded: "Swimming Pool",
      description: "Also known as the front crawl, this stroke involves alternating arm movements with a flutter kick and rhythmic breathing to the side or front.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Breaststroke",
      type: exerciseTypes[7], // Reference to "Cardiovascular - Swimming"
      targetedMuscles: ["Chest", "Arms", "Legs"],
      equipmentNeeded: "Swimming Pool",
      description: "Swim with your arms performing a half-circle motion while your legs perform a frog kick. Breathing is timed with the arm strokes.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Butterfly Stroke",
      type: exerciseTypes[7], // Reference to "Cardiovascular - Swimming"
      targetedMuscles: ["Upper Body", "Core"],
      equipmentNeeded: "Swimming Pool",
      description: "This stroke uses a dolphin kick and simultaneous overhead arm motion, requiring good timing and strength.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Backstroke",
      type: exerciseTypes[7], // Reference to "Cardiovascular - Swimming"
      targetedMuscles: ["Back", "Arms", "Legs"],
      equipmentNeeded: "Swimming Pool",
      description: "Float on your back, alternating arm strokes with a flutter kick, looking upwards and using the water line as a guide.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Pool Laps",
      type: exerciseTypes[7], // Reference to "Cardiovascular - Swimming"
      targetedMuscles: ["Full Body"],
      equipmentNeeded: "Swimming Pool",
      description: "Swim laps in the pool using any of the strokes to improve endurance and strength.",
      difficultyLevel: "Varies"
    },
    {
      name: "Step Aerobics",
      type: exerciseTypes[8], // Reference to "Cardiovascular - Aerobics"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Aerobic Step",
      description: "Perform choreographed routines by stepping up and down on a raised platform to the beat of music, which improves coordination and burns calories.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Dance Aerobics",
      type: exerciseTypes[8], // Reference to "Cardiovascular - Aerobics"
      targetedMuscles: ["Full Body"],
      equipmentNeeded: "None",
      description: "Engage in dance movements and routines that elevate heart rate and provide a full body workout, often set to upbeat music.",
      difficultyLevel: "Varies"
    },
    {
      name: "Water Aerobics",
      type: exerciseTypes[8], // Reference to "Cardiovascular - Aerobics"
      targetedMuscles: ["Full Body"],
      equipmentNeeded: "Swimming Pool",
      description: "Perform aerobic exercises in shallow water typically in a pool. The water resistance adds intensity while minimizing joint stress.",
      difficultyLevel: "Beginner to Intermediate"
    },
    {
      name: "Boxercise",
      type: exerciseTypes[8], // Reference to "Cardiovascular - Aerobics"
      targetedMuscles: ["Arms", "Legs", "Core"],
      equipmentNeeded: "Boxing Gloves, Punching Bag (optional)",
      description: "This involves boxing-inspired exercises without actual fighting, focusing on punches, jabs, kicks, and fitness drills.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Jump Rope",
      type: exerciseTypes[8], // Reference to "Cardiovascular - Aerobics"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Jump Rope",
      description: "Use a jump rope to perform a series of jumps and tricks that increase heart rate and improve agility and coordination.",
      difficultyLevel: "Beginner to Advanced"
    },
    {
      name: "The Hundred",
      type: exerciseTypes[12], // Reference to "Flexibility - Pilates"
      targetedMuscles: ["Core", "Shoulders"],
      equipmentNeeded: "Pilates Mat",
      description: "Lie on your back, lift your legs to a tabletop position, and raise your head and shoulders off the mat. Pump your arms up and down in small motions at your sides for 100 counts while breathing deeply.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Pilates Roll Up",
      type: exerciseTypes[12], // Reference to "Flexibility - Pilates"
      targetedMuscles: ["Core"],
      equipmentNeeded: "Pilates Mat",
      description: "Lie flat on your back with your arms extended overhead. Slowly curl your body up off the mat into a seated 'C' position, reaching towards your toes, then slowly uncurl back to the starting position.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Leg Circles",
      type: exerciseTypes[12], // Reference to "Flexibility - Pilates"
      targetedMuscles: ["Hip Flexors", "Core"],
      equipmentNeeded: "Pilates Mat",
      description: "Lie on your back with one leg extended straight up to the ceiling. Circle the leg clockwise and then counterclockwise while keeping your hips still.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Pilates Teaser",
      type: exerciseTypes[12], // Reference to "Flexibility - Pilates"
      targetedMuscles: ["Core"],
      equipmentNeeded: "Pilates Mat",
      description: "Lie on your back and extend your legs to a 45-degree angle. Simultaneously lift your arms and upper body to meet your legs at the top, forming a V shape with your body.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Saw",
      type: exerciseTypes[12], // Reference to "Flexibility - Pilates"
      targetedMuscles: ["Core", "Obliques"],
      equipmentNeeded: "Pilates Mat",
      description: "Sit with your legs spread wide and arms extended to the sides. Twist your torso and reach one hand towards the opposite foot, then switch sides.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Arm Circles",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Shoulders"],
      equipmentNeeded: "None",
      description: "Extend your arms parallel to the ground and rotate them in small circles, gradually increasing the size of the circles. Perform in both forward and backward motions.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Leg Swings",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Legs", "Hip Flexors"],
      equipmentNeeded: "None",
      description: "Stand on one leg and swing the other leg forward and backward, increasing the range of motion gradually. Switch legs after a set number of repetitions.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Torso Twists",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Core", "Obliques"],
      equipmentNeeded: "None",
      description: "Stand with your feet shoulder-width apart and twist your torso to the left and right, letting your arms swing loosely at your sides.",
      difficultyLevel: "Beginner"
    },
    {
      name: "Lunge With A Twist",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Legs", "Core"],
      equipmentNeeded: "None",
      description: "Step forward into a lunge position and rotate your torso and arms toward the leg that is in front. Return to the starting position and repeat on the opposite side.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "High Kicks",
      type: exerciseTypes[2], // Reference to "Strength Training - Bodyweight"
      targetedMuscles: ["Hamstrings", "Hip Flexors"],
      equipmentNeeded: "None",
      description: "Perform high kicks with one leg at a time, aiming to reach as high as possible with each kick. Alternate legs to improve flexibility and dynamic leg strength.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Board Squats",
      type: exerciseTypes[17], // Reference to "Balance and Stability - Balance Boards"
      targetedMuscles: ["Legs", "Core"],
      equipmentNeeded: "Balance Board",
      description: "Stand on a balance board and perform squats. Maintain balance as you squat down and rise back up, focusing on keeping the board stable.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Balance Board Lunges",
      type: exerciseTypes[17], // Reference to "Balance and Stability - Balance Boards"
      targetedMuscles: ["Legs", "Core"],
      equipmentNeeded: "Balance Board",
      description: "Perform lunges while standing on a balance board. Step forward with one foot onto the board, lower your hips to drop your back knee toward the floor, and push back up to the starting position.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Balance Board Push-Ups",
      type: exerciseTypes[17], // Reference to "Balance and Stability - Balance Boards"
      targetedMuscles: ["Chest", "Arms", "Core"],
      equipmentNeeded: "Balance Board",
      description: "Place your hands on a balance board and extend your legs behind you into a push-up position. Perform push-ups while maintaining your balance on the board.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Balance Board Plank",
      type: exerciseTypes[17], // Reference to "Balance and Stability - Balance Boards"
      targetedMuscles: ["Core"],
      equipmentNeeded: "Balance Board",
      description: "Place your forearms on the balance board and extend your legs behind you. Hold a plank position while balancing on the board.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Balance Board Wobble",
      type: exerciseTypes[17], // Reference to "Balance and Stability - Balance Boards"
      targetedMuscles: ["Core", "Legs"],
      equipmentNeeded: "Balance Board",
      description: "Stand on the balance board and shift your weight side to side, front to back, to create a wobbling motion. Maintain your balance without letting the edges of the board touch the ground.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Tabata Push-Ups",
      type: exerciseTypes[20], // Reference to "HIIT - Tabata"
      targetedMuscles: ["Chest", "Arms", "Core"],
      equipmentNeeded: "None",
      description: "Perform push-ups at a high intensity for 20 seconds followed by 10 seconds of rest. Repeat for 8 rounds.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Tabata Squats",
      type: exerciseTypes[20], // Reference to "HIIT - Tabata"
      targetedMuscles: ["Legs"],
      equipmentNeeded: "None",
      description: "Do squats as quickly as possible for 20 seconds, then rest for 10 seconds. Repeat this sequence for 8 rounds.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Tabata Burpees",
      type: exerciseTypes[20], // Reference to "HIIT - Tabata"
      targetedMuscles: ["Full Body"],
      equipmentNeeded: "None",
      description: "Perform burpees at maximum effort for 20 seconds, rest for 10 seconds, and repeat for a total of 8 rounds.",
      difficultyLevel: "Advanced"
    },
    {
      name: "Tabata Lunges",
      type: exerciseTypes[20], // Reference to "HIIT - Tabata"
      targetedMuscles: ["Legs", "Core"],
      equipmentNeeded: "None",
      description: "Execute lunges at a high intensity for 20 seconds, followed by 10 seconds of rest. Continue this pattern for 8 rounds.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Tabata Planks",
      type: exerciseTypes[20], // Reference to "HIIT - Tabata"
      targetedMuscles: ["Core"],
      equipmentNeeded: "None",
      description: "Hold a plank position for 20 seconds, then rest for 10 seconds. Repeat for 8 rounds.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Forehand Drills",
      type: exerciseTypes[24], // Reference to "Sports-Specific Training - Tennis Drills"
      targetedMuscles: ["Arms", "Legs", "Core"],
      equipmentNeeded: "Tennis Racquet, Tennis Balls, Court",
      description: "Practice forehand shots repeatedly using a variety of feeds to improve accuracy, power, and spin. Focus on footwork and racket handling.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Backhand Drills",
      type: exerciseTypes[24], // Reference to "Sports-Specific Training - Tennis Drills"
      targetedMuscles: ["Arms", "Legs", "Core"],
      equipmentNeeded: "Tennis Racquet, Tennis Balls, Court",
      description: "Perform multiple backhand shots focusing on form and consistency. Work on both single-handed and double-handed backhands.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Serving Practice",
      type: exerciseTypes[24], // Reference to "Sports-Specific Training - Tennis Drills"
      targetedMuscles: ["Shoulders", "Core", "Legs"],
      equipmentNeeded: "Tennis Racquet, Tennis Balls, Court",
      description: "Practice serving with different speeds and spins. Aim for accuracy by targeting specific areas of the service box.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Volley Drills",
      type: exerciseTypes[24], // Reference to "Sports-Specific Training - Tennis Drills"
      targetedMuscles: ["Arms", "Legs", "Core"],
      equipmentNeeded: "Tennis Racquet, Tennis Balls, Net, Court",
      description: "Practice volleying at the net with a partner. Focus on quick reflexes, racket control, and placement.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Footwork Drills",
      type: exerciseTypes[24], // Reference to "Sports-Specific Training - Tennis Drills"
      targetedMuscles: ["Legs", "Cardiovascular System"],
      equipmentNeeded: "Cones, Ladder, Tennis Court",
      description: "Perform drills that enhance agility and speed on the court. Use agility ladders and cones to create patterns that mimic on-court movement.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Driving Range",
      type: exerciseTypes[25], // Reference to "Sports-Specific Training - Golf Swing Practice"
      targetedMuscles: ["Arms", "Shoulders", "Back", "Core"],
      equipmentNeeded: "Golf Clubs, Golf Balls, Driving Range",
      description: "Practice driving with a focus on improving distance and accuracy. Work on stance, grip, and swing mechanics.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Putting Drills",
      type: exerciseTypes[25], // Reference to "Sports-Specific Training - Golf Swing Practice"
      targetedMuscles: ["Arms", "Core"],
      equipmentNeeded: "Golf Putter, Golf Balls, Putting Green",
      description: "Perform various putting exercises to improve accuracy and control. Practice from different distances and slopes.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Chipping Practice",
      type: exerciseTypes[25], // Reference to "Sports-Specific Training - Golf Swing Practice"
      targetedMuscles: ["Arms", "Core"],
      equipmentNeeded: "Golf Clubs, Golf Balls, Practice Green",
      description: "Practice chipping from various lies around the green. Focus on shot selection, trajectory, and landing spots to improve short game.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Sand Trap Shots",
      type: exerciseTypes[25], // Reference to "Sports-Specific Training - Golf Swing Practice"
      targetedMuscles: ["Arms", "Shoulders", "Core"],
      equipmentNeeded: "Sand Wedge, Golf Balls, Sand Bunker",
      description: "Practice hitting out of sand traps. Focus on the technique for different types of sand shots to ensure ball control and recovery.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Swing Analysis",
      type: exerciseTypes[25], // Reference to "Sports-Specific Training - Golf Swing Practice"
      targetedMuscles: ["Arms", "Legs", "Core", "Back"],
      equipmentNeeded: "Golf Clubs, Video Equipment or Swing Analyzer",
      description: "Analyze your swing with video or specialized equipment to identify and correct inefficiencies for improved performance.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Rotator Cuff Exercises",
      type: exerciseTypes[27], // Reference to "Rehabilitative - Physical Therapy"
      targetedMuscles: ["Shoulders"],
      equipmentNeeded: "Resistance Bands, Dumbbells",
      description: "Perform exercises that strengthen the rotator cuff muscles, such as internal and external rotations with resistance bands or light dumbbells, to improve shoulder stability and reduce injury risk.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Knee Rehabilitation Exercises",
      type: exerciseTypes[27], // Reference to "Rehabilitative - Physical Therapy"
      targetedMuscles: ["Knees", "Legs"],
      equipmentNeeded: "None, Stability Ball",
      description: "Engage in exercises that focus on strengthening the muscles around the knee, including squats, leg presses, and leg extensions, using body weight or light resistance to enhance knee stability.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Ankle Stabilization Drills",
      type: exerciseTypes[27], // Reference to "Rehabilitative - Physical Therapy"
      targetedMuscles: ["Ankles"],
      equipmentNeeded: "Balance Board, Resistance Bands",
      description: "Perform drills that improve ankle stability and strength, such as standing on one foot, using a balance board, or performing resisted ankle movements with a band.",
      difficultyLevel: "Intermediate"
    },
    {
      name: "Hip Mobility Drills",
      type: exerciseTypes[27], // Reference to "Rehabilitative - Physical Therapy"
      targetedMuscles: ["Hips"],
      equipmentNeeded: "None",
      description: "Execute mobility exercises aimed at increasing hip flexibility and strength, such as leg swings, hip rotations, and bridging.",
      difficultyLevel: "Intermediate"
    }
  ]);
  console.log('Exercise seeding complete!');
  
  console.log('Database seeded successfully!');
  process.exit(0);
});
