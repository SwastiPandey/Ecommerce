// persistConfig.js
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root', // key for the root of the data in the local storage
  storage,
};

export default persistConfig;
