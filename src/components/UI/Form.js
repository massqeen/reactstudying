import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const onFormSubmit = (e) => {
    onSubmit(e, input);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={input} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
