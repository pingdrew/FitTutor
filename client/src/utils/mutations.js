import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      person {
        _id
        username
        email
      }
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation DeletePerson($_id: ID!) {
    deletePerson(_id: $_id) {
      success
      message
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($_id: ID!, $email: String, $password: String, $phone: String, $age: Int, $about: String, $role: String) {
    updatePerson(_id: $_id, email: $email, password: $password, phone: $phone, age: $age, about: $about, role: $role) {
      success
      message
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($reviewInput: ReviewInput!) {
    addReview(review: $reviewInput) {
      _id
      messageContent
      rating
      timeStamp
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation UpdateReview($reviewInput: ReviewInput!, $_id: ID!) {
    updateReview(review: $reviewInput, _id: $_id) {
      success
      message
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($_id: ID!) {
    deleteReview(_id: $_id) {
      success
      message
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($messageInput: MessageInput!) {
    sendMessage(message: $messageInput) {
      _id
      messageContent
      timeStamp
      readStatus
    }
  }
`;

export const UPDATE_MESSAGE = gql`
  mutation UpdateMessage($_id: ID!, $readStatus: Boolean) {
    updateMessage(_id: $_id, readStatus: $readStatus) {
      success
      message
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DeleteMessage($_id: ID!) {
    deleteMessage(_id: $_id) {
      success
      message
    }
  }
`;

export const CREATE_CONVERSATION = gql`
  mutation CreateConversation($participants: [ID!]!) {
    createConversation(participants: $participants) {
      _id
      participants {
        _id
        username
      }
    }
  }
`;

export const UPDATE_CONVERSATION = gql`
  mutation UpdateConversation($_id: ID!, $lastMessage: ID!) {
    updateConversation(_id: $_id, lastMessage: $lastMessage) {
      success
      message
    }
  }
`;

export const DELETE_CONVERSATION = gql`
  mutation DeleteConversation($_id: ID!) {
    deleteConversation(_id: $_id) {
      success
      message
    }
  }
`;

export const ADD_MEAL = gql`
  mutation AddMeal($mealInput: MealInput!) {
    addMeal(meal: $mealInput) {
      _id
      messageContent
      timeStamp
    }
  }
`;

export const UPDATE_MEAL = gql`
  mutation UpdateMeal($_id: ID!, $mealInput: MealInput!) {
    updateMeal(_id: $_id, meal: $mealInput) {
      success
      message
    }
  }
`;

export const DELETE_MEAL = gql`
  mutation DeleteMeal($_id: ID!) {
    deleteMeal(_id: $_id) {
      success
      message
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation CreateWorkout($workoutInput: WorkoutInput!) {
    createWorkout(workout: $workoutInput) {
      _id
      name
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation UpdateWorkout($_id: ID!, $workoutInput: WorkoutInput!) {
    updateWorkout(_id: $_id, workout: $workoutInput) {
      success
      message
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation DeleteWorkout($_id: ID!) {
    deleteWorkout(_id: $_id) {
      success
      message
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation AddExercise($exerciseInput: ExerciseInput!) {
    addExercise(exercise: $exerciseInput) {
      _id
      name
    }
  }
`;

export const UPDATE_EXERCISE = gql`
  mutation UpdateExercise($_id: ID!, $exerciseInput: ExerciseInput!) {
    updateExercise(_id: $_id, exercise: $exerciseInput) {
      success
      message
    }
  }
`;

export const DELETE_EXERCISE = gql`
  mutation DeleteExercise($_id: ID!) {
    deleteExercise(_id: $_id) {
      success
      message
    }
  }
`;

// Adding missing mutations for Ingredients and ExerciseTypes
export const ADD_EXERCISE_TYPE = gql`
  mutation AddExerciseType($name: String!) {
    addExerciseType(name: $name) {
      _id
      name
    }
  }
`;

export const UPDATE_EXERCISE_TYPE = gql`
  mutation UpdateExerciseType($_id: ID!, $name: String!) {
    updateExerciseType(_id: $_id, name: $name) {
      success
      message
    }
  }
`;

export const DELETE_EXERCISE_TYPE = gql`
  mutation DeleteExerciseType($_id: ID!) {
    deleteExerciseType(_id: $_id) {
      success
      message
    }
  }
`;

export const ADD_INGREDIENT = gql`
  mutation AddIngredient($name: String!, $description: String, $calories: Int, $nutrients: [NutrientInput]) {
    addIngredient(name: $name, description: $description, calories: $calories, nutrients: $nutrients) {
      _id
      name
    }
  }
`;

export const UPDATE_INGREDIENT = gql`
  mutation UpdateIngredient($_id: ID!, $name: String, $description: String, $calories: Int, $nutrients: [NutrientInput]) {
    updateIngredient(_id: $_id, name: $name, description: $description, calories: $calories, nutrients: $nutrients) {
      success
      message
    }
  }
`;

export const DELETE_INGREDIENT = gql`
  mutation DeleteIngredient($_id: ID!) {
    deleteIngredient(_id: $_id) {
      success
      message
    }
  }
`;
