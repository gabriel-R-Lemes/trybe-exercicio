// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import App from './App';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

const renderWithReduxWithThunk = (
  component,
  {
    initialState,
    store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk)
    ),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  // Utilizaremos o seletor `getByText` para retornar o nó correspondente a uma consulta de texto
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Tests if the pages render the button, and increment after one click', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('Tests if the pages render the button, and increment after one click, but with different initial value', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(buttonAdicionar).toBeInTheDocument();
    
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});