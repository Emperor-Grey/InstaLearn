import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AuthReducer from './reducers/AuthSlice';
import bannerReducer from './reducers/bannerSlice';
import themeReducer from './reducers/themeSlice';

const config = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
};

const persistedThemeReducer = persistReducer(config, themeReducer);
const persistedBannerReducer = persistReducer(config, bannerReducer);
const persistedAuthReducer = persistReducer(config, AuthReducer);

const store = configureStore({
    reducer: {
        theme: persistedThemeReducer,
        banner: persistedBannerReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export default store;
export const persister = persistStore(store);
