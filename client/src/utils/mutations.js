import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      person {
        _id
        username
      }
    }
  }
`;

export const ADD_PERSON = gql`
  mutation addPerson($username: String!, $email: String!, $password: String!) {
    addPerson(username: $username, email: $email, password: $password) {
      token
      person {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $name: String!
    $type: String!
    $targetedMuscles: [String!]!
    $equipmentNeeded: String
    $description: String!
    $difficultyLevel: String
    $photo: String
    $video: String
  ) {
    addExercise(
      name: $name
      type: $type
      targetedMuscles: $targetedMuscles
      equipmentNeeded: $equipmentNeeded
      description: $description
      difficultyLevel: $difficultyLevel
      photo: $photo
      video: $video
    ) {
      _id
      name
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addWorkout(
    $name: String!
    $exercises: [ID!]!
    $duration: Int!
    $intensityLevel: String
    $targetAudience: String
    $workoutType: String
    $description: String!
    $photo: String
    $video: String
  ) {
    addWorkout(
      name: $name
      exercises: $exercises
      duration: $duration
      intensityLevel: $intensityLevel
      targetAudience: $targetAudience
      workoutType: $workoutType
      description: $description
      photo: $photo
      video: $video
    ) {
      _id
      name
    }
  }
`;

export const ADD_INGREDIENT = gql`
  mutation addIngredient(
    $ingredientName: String!
    $unit: String!
    $quantity: Float!
    $calories: Float
    $proteins: Float
    $carbohydrates: Float
    $fats: Float
    $fibers: Float
    $sugars: Float
    $vitamins: [String]
    $minerals: [String]
  ) {
    addIngredient(
      ingredientName: $ingredientName
      unit: $unit
      quantity: $quantity
      calories: $calories
      proteins: $proteins
      carbohydrates: $carbohydrates
      fats: $fats
      fibers: $fibers
      sugars: $sugars
      vitamins: $vitamins
      minerals: $minerals
    ) {
      _id
      ingredientName
    }
  }
`;

export const ADD_MEAL = gql`
  mutation addMeal(
    $name: String!
    $description: String!
    $ingredients: [ID!]!
    $totalCalories: Float
    $totalProteins: Float
    $totalCarbohydrates: Float
    $totalFats: Float
    $mealTime: Date
  ) {
    addMeal(
      name: $name
      description: $description
      ingredients: $ingredients
      totalCalories: $totalCalories
      totalProteins: $totalProteins
      totalCarbohydrates: $totalCarbohydrates
      totalFats: $totalFats
      mealTime: $mealTime
    ) {
      _id
      name
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(
    $reviewer_Id: ID!
    $reviewedItem_Id: ID!
    $onModel: String!
    $messageContent: String
    $timeStamp: Date
    $rating: Float
  ) {
    addReview(
      review: {
        reviewer_Id: $reviewer_Id
        reviewedItem_Id: $reviewedItem_Id
        onModel: $onModel
        messageContent: $messageContent
        timeStamp: $timeStamp
        rating: $rating
      }
    ) {
      _id
      messageContent
      rating
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $conversationId: ID
    $sender_Id: ID!
    $receiver_Id: ID!
    $messageContent: String!
    $timeStamp: Date!
  ) {
    sendMessage(
      messageInput: {
        conversationId: $conversationId
        sender_Id: $sender_Id
        receiver_Id: $receiver_Id
        messageContent: $messageContent
        timeStamp: $timeStamp
      }
    ) {
      _id
      messageContent
    }
  }
`;
