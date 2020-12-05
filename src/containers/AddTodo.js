import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import Form from '../components/UI/Form';

const AddTodo = ({ dispatch }) => {
  const submitHandler = (e, input) => {
    e.preventDefault();

    if (!input.value.trim()) {
      return;
    }

    dispatch(addTodo(input.value));
    input.value = '';
  };

  return <Form onSubmit={submitHandler} />;
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
