import React from 'react';
import HomeComponent from './components/Home';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <HomeComponent/>
    </Provider>
  );
}

export default App;
