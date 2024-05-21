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
      reviewer {
        _id
        username
      }
      reviewedItem_Id
      onModel
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
      sender {
        _id
        username
      }
      receiver {
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
      name
      description
      ingredients {
        _id
        ingredientName
      }
      calories
      proteins
      carbohydrates
      fats
      fibers
      sugars
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
  query GetExerciseTypeById($id: ID!) {
    exerciseTypeById(_id: $id) {
      _id
      name
    }
  }
`;

export const GET_ALL_INGREDIENTS = gql`
  query GetAllIngredients {
    allIngredients {
      _id
      ingredientName
      unit
      quantity
      calories
      proteins
      carbohydrates
      fats
      fibers
      sugars
      vitamins
      minerals
    }
  }
`;

export const GET_INGREDIENT_BY_ID = gql`
  query GetIngredientById($id: ID!) {
    ingredientById(_id: $id) {
      _id
      ingredientName
      unit
      quantity
      calories
      proteins
      carbohydrates
      fats
      fibers
      sugars
      vitamins
      minerals
    }
  }
`;

export const GET_MEAL_BY_ID = gql`
  query GetMealById($id: ID!) {
    mealById(_id: $id) {
      _id
      name
      description
      ingredients {
        _id
        ingredientName
      }
      calories
      proteins
      carbohydrates
      fats
      fibers
      sugars
    }
  }
`;

export const GET_MESSAGE_BY_ID = gql`
  query GetMessageById($id: ID!) {
    messageById(_id: $id) {
      _id
      messageContent
      timeStamp
      readStatus
      attachments
    }
  }
`;

export const GET_PERSON_BY_ID = gql`
  query GetPersonById($id: ID!) {
    personById(_id: $id) {
      _id
      username
      email
      phone
      age
      about
      role
      specializations
      certifications
    }
  }
`;

export const GET_REVIEW_BY_ID = gql`
  query GetReviewById($id: ID!) {
    reviewById(_id: $id) {
      id
      reviewer {
        _id
        username
      }
      reviewedItem_Id
      onModel
      messageContent
      timeStamp
      rating
    }
  }
`;

export const GET_WORKOUT_BY_ID = gql`
  query GetWorkoutById($id: ID!) {
    workoutById(_id: $id) {
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
      photo
      video
      reviews {
        _id
        messageContent
        timeStamp
        rating
      }
    }
  }
`;

export const GET_ALL_WORKOUT_TYPES = gql`
  query GetAllWorkoutTypes {
    allWorkoutTypes {
      _id
      name
    }
  }
`;

export const GET_WORKOUT_TYPE_BY_ID = gql`
  query GetWorkoutTypeById($id: ID!) {
    workoutTypeById(_id: $id) {
      _id
      name
    }
  }
`;