import { gql } from '@apollo/client';

export const GET_ALL_EXERCISES = gql`
  query getAllExercises {
    allExercises {
      _id
      name
      description
      targetedMuscles
      equipmentNeeded
      difficultyLevel
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_ALL_WORKOUTS = gql`
  query getAllWorkouts {
    allWorkouts {
      _id
      name
      description
      duration
      intensityLevel
      targetAudience
      exercises {
        _id
        name
      }
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_ALL_MEALS = gql`
  query getAllMeals {
    allMeals {
      _id
      name
      description
      totalCalories
      totalProteins
      totalCarbohydrates
      totalFats
      ingredients {
        _id
        ingredientName
      }
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_ALL_PERSONS = gql`
  query getAllPersons {
    allPersons {
      _id
      username
    }
  }
`;

export const GET_ALL_CONVERSATIONS = gql`
  query getAllConversations {
    allConversations {
      _id
      participants {
        _id
        username
      }
      lastMessage {
        _id
        messageContent
      }
    }
  }
`;

export const GET_MEAL_BY_ID = gql`
  query getMealById($id: ID!) {
    mealById(_id: $id) {
      _id
      name
      description
      totalCalories
      totalProteins
      totalCarbohydrates
      totalFats
      ingredients {
        _id
        ingredientName
      }
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_EXERCISE_BY_ID = gql`
  query getExerciseById($id: ID!) {
    exerciseById(_id: $id) {
      _id
      name
      description
      targetedMuscles
      equipmentNeeded
      difficultyLevel
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_WORKOUT_BY_ID = gql`
  query getWorkoutById($id: ID!) {
    workoutById(_id: $id) {
      _id
      name
      description
      duration
      intensityLevel
      targetAudience
      exercises {
        _id
        name
      }
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
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
      }
      reviews {
        _id
        messageContent
        rating
      }
    }
  }
`;

export const GET_ALL_GEAR = gql`
  query getAllGear {
    allGear {
      _id
      name
      description
      price
    }
  }
`;
