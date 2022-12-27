import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          history.push('/dashboard');
        } else {
          alert('Incorrect username or password');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        ref={register({ required: true })}
      />
      {errors.username && <p>This field is required</p>}
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.password && <p>This field is required</p>}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
