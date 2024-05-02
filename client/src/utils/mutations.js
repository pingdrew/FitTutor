import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
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

export const ADD_REVIEW = gql`
  mutation AddReview($sender_Id: ID!, $receiver_Id: ID!, $messageContent: String!, $rating: Int!) {
    addReview(sender_Id: $sender_Id, receiver_Id: $receiver_Id, messageContent: $messageContent, rating: $rating) {
      _id
      messageContent
      rating
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation UpdateReview($_id: ID!, $messageContent: String, $rating: Int) {
    updateReview(_id: $_id, messageContent: $messageContent, rating: $rating) {
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
  mutation SendMessage($sender_Id: ID!, $receiver_Id: ID!, $messageContent: String!) {
    sendMessage(sender_Id: $sender_Id, receiver_Id: $receiver_Id, messageContent: $messageContent) {
      _id
      messageContent
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
  mutation AddMeal($sender_Id: ID!, $receiver_Id: ID!, $messageContent: String!) {
    addMeal(sender_Id: $sender_Id, receiver_Id: $receiver_Id, messageContent: $messageContent) {
      _id
      messageContent
    }
  }
`;

export const UPDATE_MEAL = gql`
  mutation UpdateMeal($_id: ID!, $messageContent: String) {
    updateMeal(_id: $_id, messageContent: $messageContent) {
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
  mutation CreateWorkout($name: String!, $duration: Int!, $intensityLevel: String!, $targetAudience: String!, $workoutTypeId: ID!, $description: String!, $exerciseIds: [ID!]) {
    createWorkout(name: $name, duration: $duration, intensityLevel: $intensityLevel, targetAudience: $targetAudience, workoutTypeId: $workoutTypeId, description: $description, exerciseIds: $exerciseIds) {
      _id
      name
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation UpdateWorkout($_id: ID!, $name: String, $duration: Int, $intensityLevel: String, $targetAudience: String, $description: String) {
    updateWorkout(_id: $_id, name: $name, duration: $duration, intensityLevel: $intensityLevel, targetAudience: $targetAudience, description: $description) {
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
