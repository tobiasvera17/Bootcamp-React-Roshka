import { createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage';

const initialState = { token:null } //estado inicial

const rootReducer = (state = initialState, action) => {
    if (action.type === "setToken") {
        return {
            ...state,
            token: action.payload
        }
    }
    if (action.type === "nullToken") {
        return {
            ...state,
            token: null
        }
    }
    return state
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//store
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor } 