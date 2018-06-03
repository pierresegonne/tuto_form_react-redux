import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store';

import FormPage from '../containers/FormContainer';

import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <FormPage />
  </Provider>
);

export default App;
