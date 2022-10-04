import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 10,
  currentCategory: 'Breakfast',
  recipes: [],
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload.category;
    },
    addRecipes: (state, action) => {
      state.recipes = action.payload.recipes;
    },
    clearRecipes: state => {
      state.recipes = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setCurrentCategory,
  addRecipes,
  clearRecipes,
} = recipeSlice.actions;

//Current category selector
export const selectCurrentCategory = state => state.recipe.currentCategory;

export default recipeSlice.reducer;
