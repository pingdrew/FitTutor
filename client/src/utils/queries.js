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

export const GET_PERSON_BY_ID = gql`
  query PersonById($_id: ID!) {
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

