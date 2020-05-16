import React from 'react';
import ReactDOM from 'react-dom';   //  前端渲染页面 
import {Provider} from 'react-redux'
import Router from './router';
import {store} from './store'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/lib/integration/react'
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Router />
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);

