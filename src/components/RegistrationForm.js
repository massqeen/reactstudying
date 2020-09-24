import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
 * Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
 * Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
 */
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  /*
   * Для всех инпутов создаем один обраотчик
   * Различать инпуты будем по атрибуту name
   */
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, email, password } = this.state;

    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
    `);
    console.log(this.props);
    this.props.onSubmit(this.state.login);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
SignUpForm.propTypes = { onSubmit: PropTypes.func };
export default SignUpForm;
