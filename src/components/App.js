import React from 'react';
import Layout from './Layout/Layout';
import Counter from './Counter/Counter';
import SignUpForm from './RegistrationForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Dropdown from './Dropdown/Dropdown';

const App = () => (
  <Layout>
    <Counter initialState={10} step={2} />
    <SignUpForm />
    <ColorPicker options={colorPickerOptions} />
    <Dropdown />
  </Layout>
);

export default App;
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
