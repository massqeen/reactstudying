import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const App = () => (
  <>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
);

export default App;
