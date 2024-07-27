import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PERSON } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [addPerson, { error }] = useMutation(ADD_PERSON);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addPerson({
        variables: { ...formState },
      });

      Auth.login(data.addPerson.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            name="username"
            type="text"
            id="username"
            value={formState.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
        {error && <div>Sign up failed</div>}
      </div>
    </main>
  );
};

export default Signup;
