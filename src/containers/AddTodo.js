import { useDispatch } from 'react-redux';
import addTodo from '../redux/actions/addTodo';
import Form from '../components/UI/Form';

const AddTodo = () => {
  const dispatch = useDispatch();
  const submitHandler = (e, inputValue) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    dispatch(addTodo(inputValue));
  };

  return <Form onSubmit={submitHandler} />;
};

export default AddTodo;
