import { legacy_createStore as createStore, compose}  from 'redux';
import initialState from '../db/initialState';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state : any, action: any) => {
    if(action.type === 'ADD_PLAYER1') return { ...state, player1: action.newPlayer1}
    if(action.type === 'ADD_PLAYER2') return { ...state, player2: action.newPlayer2}
    if(action.type === 'ADD_PLAYER1ARMY') return { ...state, player1SelectedArmy: action.player1Army}
    if(action.type === 'ADD_PLAYER2ARMY') return { ...state, player2SelectedArmy: action.player2Army}
    return state; 
};

const store = createStore(
  reducer,
  initialState,
  composeEnhancers()
);

export default store;