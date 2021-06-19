/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = (key, initial) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return initial;
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: getLocalStorage('loggedIn', false),
    username: getLocalStorage('username', null),
    favorites: []
  },
  reducers: {
    setUser: {
      reducer: (state, action) => {
        state.loggedIn = true;
        state.username = action.payload;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            addToLocalStorage: [
              { key: 'loggedIn', value: true },
              { key: 'username', value: payload }
            ]
          }
        };
      }
    },
    logOut: {
      reducer: (state) => {
        state.loggedIn = false;
      },
      prepare(payload) {
        return {
          payload,
          meta: 'clearLocalStorage'
        };
      }
    },
    setFavorites: (state, action) => {
      state.favorites = [...action.payload];
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (pokemon) => pokemon !== action.payload
      );
    }
  }
});

export const { setUser, logOut, setFavorites, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
