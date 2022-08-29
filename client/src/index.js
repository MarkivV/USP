import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {getPosts} from "./redux/features/posts/postsSlice";
import {getUsers} from "./redux/features/users/usersSlice";
const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(reducers, compose(applyMiddleware(thunk)))
store.dispatch(getUsers())
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

