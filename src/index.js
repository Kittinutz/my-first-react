import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LoginPage from './containers/LoginPage';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render((
    <Provider store={store}>
        <LoginPage/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
