import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const Todo = ({ onClick, text, id, completed }) => (
  <Li
    onClick={() => {
      onClick(id);
    }}
    completed={completed}
  >
    {text}
  </Li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: string.isRequired,
};

export default Todo;
