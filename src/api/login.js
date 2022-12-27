import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    axios
      .post('/api/login', data)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          history.push('/dashboard');
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred');
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
