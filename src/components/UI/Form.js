import PropTypes from 'prop-types';
const Form = ({ onSubmit }) => {
  let input = null;
  const inputRef = (node) => {
    input = node;
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmit(e, input);
        }}
      >
        <input ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
