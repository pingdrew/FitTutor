import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Me {
    me {
      _id
      username
      email
      phone
      age
      about
      role
      specializations
      certifications
      friends {
        _id
        username
        email
      }
      reviews {
        _id
        messageContent
        timeStamp
        rating
      }
    }
  }
`;

export const GET_ALL_PERSONS = gql`
  query GetAllPersons {
    allPersons {
      _id
      username
      email
      phone
      age
      about
      role
    }
  }
`;

export const GET_ALL_REVIEWS = gql`
  query GetAllReviews {
    allReviews {
      _id
      messageContent
      timeStamp
      rating
      sender_Id {
        _id
        username
      }
      receiver_Id {
        _id
        username
      }
    }
  }
`;

export const GET_ALL_MESSAGES = gql`
  query GetAllMessages {
    allMessages {
      _id
      messageContent
      timeStamp
      readStatus
      attachments
      sender_Id {
        _id
        username
      }
      receiver_Id {
        _id
        username
      }
    }
  }
`;

export const GET_ALL_CONVERSATIONS = gql`
  query GetAllConversations {
    allConversations {
      _id
      lastUpdated
      participants {
        _id
        username
      }
      lastMessage {
        _id
        messageContent
        timeStamp
        readStatus
        attachments
      }
    }
  }
`;

export const GET_ALL_MEALS = gql`
  query GetAllMeals {
    allMeals {
      _id
      messageContent
      timeStamp
      readStatus
      sender_Id {
        _id
        username
      }
      receiver_Id {
        _id
        username
      }
    }
  }
`;

export const GET_ALL_WORKOUTS = gql`
  query GetAllWorkouts {
    allWorkouts {
      _id
      name
      duration
      intensityLevel
      targetAudience
      workoutType {
        _id
        name
      }
      description
      exercises {
        _id
        name
      }
    }
  }
`;

export const GET_ALL_EXERCISES = gql`
  query GetAllExercises {
    allExercises {
      _id
      name
      type {
        _id
        name
      }
      targetedMuscles
      equipmentNeeded
      description
      difficultyLevel
      photo
      video
    }
  }
`;

export const GET_ALL_EXERCISE_TYPES = gql`
  query GetAllExerciseTypes {
    allExerciseTypes {
      _id
      name
    }
  }
`;

export const GET_EXERCISE_TYPE_BY_ID = gql`
  query GetExerciseTypeById($_id: ID!) {
    exerciseTypeById(_id: $_id) {
      _id
      name
    }
  }
`;

// Ingredient Queries
export const GET_ALL_INGREDIENTS = gql`
  query GetAllIngredients {
    allIngredients {
      _id
      name
      description
      nutrients {
        name
        amount
      }
    }
  }
`;

export const GET_INGREDIENT_BY_ID = gql`
  query GetIngredientById($_id: ID!) {
    ingredientById(_id: $_id) {
      _id
      name
      description
      nutrients {
        name
        amount
      }
    }
  }
`;

// Meal Queries
export const GET_MEAL_BY_ID = gql`
  query GetMealById($_id: ID!) {
    mealById(_id: $_id) {
      _id
      name
      ingredients {
        _id
        name
      }
    }
  }
`;

// Message Queries
export const GET_MESSAGE_BY_ID = gql`
  query GetMessageById($_id: ID!) {
    messageById(_id: $_id) {
      _id
      messageContent
      timeStamp
      readStatus
      attachments
    }
  }
`;

// Person Queries
export const GET_PERSON_BY_ID = gql`
  query GetPersonById($_id: ID!) {
    personById(_id: $_id) {
      _id
      username
      email
      phone
      age
      about
      role
    }
  }
`;

// Review Queries
export const GET_REVIEW_BY_ID = gql`
  query GetReviewById($_id: ID!) {
    reviewById(_id: $_id) {
      _id
      messageContent
      timeStamp
      rating
    }
  }
`;

// Workout Queries
export const GET_WORKOUT_BY_ID = gql`
  query GetWorkoutById($_id: ID!) {
    workoutById(_id: $_id) {
      _id
      name
      duration
      intensityLevel
      targetAudience
      workoutType {
        _id
        name
      }
      description
    }
  }
`;

// WorkoutType Queries
export const GET_ALL_WORKOUT_TYPES = gql`
  query GetAllWorkoutTypes {
    allWorkoutTypes {
      _id
      name
    }
  }
`;

export const GET_WORKOUT_TYPE_BY_ID = gql`
  query GetWorkoutTypeById($_id: ID!) {
    workoutTypeById(_id: $_id) {
      _id
      name
    }
  }
`;