import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import jobSlice from './jobSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persist Config
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

// Root Reducer
const rootReducer = combineReducers({
    auth: authSlice,
    job: jobSlice,
});

// Create Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Persistor
const persistor = persistStore(store);

// ✅ Correct Named Exports
export { store, persistor };
