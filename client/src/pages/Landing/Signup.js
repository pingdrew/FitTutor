import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

function Signup() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [signUp, { error }] = useMutation(SIGN_UP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signUp({
        variables: formState
      });
      const token = data.signUp.token;
      Auth.login(token);
    } catch (e) {
      console.error("Signup error:", e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container">
      <Link to="/"><button>Back</button></Link>

      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="text"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        {error && (
          <div>
            <p className="error-text">Error signing up. Please try again.</p>
          </div>
        )}
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
