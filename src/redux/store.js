import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";


const persistedBalanceReducer = persistReducer({
    key: "user-balance",
    storage,
    whitelist: [ "value"],
}, balanceReducer);

const persistedLocaleReducer = persistReducer({
    key: "app-lang",
    storage,
    whitelist: [ "lang"],
}, localeReducer);

export const store = configureStore({
    reducer: {
        balance: persistedBalanceReducer,
        locale: persistedLocaleReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "balance/deposit":
//             return {
//                 ...state,
//                 balance: {
//                     value: state.balance.value + action.payload,
//                 }
//             };
        
//         case "balance/withdraw":
//             return {
//                 ...state,
//                 balance: {
//                     value: state.balance.value - action.payload,
//                 }
//             };
        
//         case "locale/changeLang": 
//             return {
//                 ...state,
//                 locale: {
//                     lang: action.payload,
//                 }
//             }
//         default:
//             return state;
//     }
    
// };
