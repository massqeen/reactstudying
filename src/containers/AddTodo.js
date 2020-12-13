import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTodo from '../redux/actions/addTodo';
import Form from '../components/UI/Form';

const AddTodo = ({ dispatch }) => {
  const submitHandler = (e, inputValue) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    dispatch(addTodo(inputValue));
  };

  return <Form onSubmit={submitHandler} />;
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
