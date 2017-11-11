import React from 'react';
import ReactDOM from 'react-dom';
import restaurant from './restaurant';
import { creatRestaurant } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = creatRestaurant(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <dvdStore/>
    </Provider>
    ,
    document.getElementById('root')
);
