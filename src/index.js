import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';
import { Provider } from 'react-redux';
import { createAPI } from 'services/api';
import { fetchQuestsAction } from 'store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

(store.dispatch)(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer/>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
