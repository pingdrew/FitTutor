import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ADD_PERSON } from '../../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addPerson, { error }] = useMutation(ADD_PERSON);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPerson({
        variables: { ...formState }
      });
      const token = data.addPerson.token;
      Auth.login(token); // Store the token and redirect
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <Link to="/login"><button>Login</button></Link>
      <Link to="/"><button>Back</button></Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Your username"
            name="username"
            type="text"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            autoComplete="email"
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
            autoComplete="current-password"
          />
        </div>
        {error && (
          <div>
            <p className="error-text">Signup failed</p>
          </div>
        )}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
