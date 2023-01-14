import { legacy_createStore as createStore, compose}  from 'redux';
import initialState from '../db/initialState';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const saveState = (state:any) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};

const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return initialState;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state : any, action: any) => {
    switch (action.type) {
        case 'ADD_PLAYER1':
            return { ...state, player1: action.newPlayer1}
        case 'ADD_PLAYER2':
            return { ...state, player2: action.newPlayer2}
        case 'ADD_PLAYER1ARMY': 
            return { ...state, player1SelectedArmy: action.player1Army}
        case 'ADD_PLAYER2ARMY':
            return { ...state, player2SelectedArmy: action.player2Army}
        case 'SET_MISSION_PLAYER1': 
            return { ...state, 
                player1SelectedMissions: [...state.player1SelectedMissions.slice(0, action.pos),
                    action.selectedMission,
                    ...state.player1SelectedMissions.slice(action.pos+1)]
                }
        case 'DELETE_MISSION_PLAYER1': 
            return { ...state, 
                player1SelectedMissions: [...state.player1SelectedMissions.slice(0, action.pos),
                'placeholder',
                ...state.player1SelectedMissions.slice(action.pos+1)]
                }
        case 'SET_MISSION_PLAYER2': 
            return { ...state, 
                player2SelectedMissions: [...state.player2SelectedMissions.slice(0, action.pos),
                action.selectedMission,
                ...state.player2SelectedMissions.slice(action.pos+1)]
                }
        case 'DELETE_MISSION_PLAYER2':
            return { ...state, 
                player2SelectedMissions:[...state.player2SelectedMissions.slice(0, action.pos),
                    'placeholder',
                    ...state.player2SelectedMissions.slice(action.pos+1)]
                }
        case 'RESET': 
            return { ...initialState }
            }
        return state;
        };

const oldState = loadState();

const store = createStore(
  reducer,
  oldState,
  composeEnhancers()
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;