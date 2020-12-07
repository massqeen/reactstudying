import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 30%;
  justify-content: space-between;
`;

const Todo = ({ onTodoClick, onButtonClick, text, id, completed }) => (
  <Wrapper>
    <Li
      onClick={() => {
        onTodoClick(id);
      }}
      completed={completed}
    >
      {text}
    </Li>
    <button
      onClick={() => {
        onButtonClick(id);
      }}
    >
      X
    </button>
  </Wrapper>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: string.isRequired,
};

export default Todo;
