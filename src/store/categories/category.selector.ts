import { createSelector } from 'reselect';

import type { RootState } from '../store';
import type { CategoriesState, CategoryMap } from './category.slice';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categories,
);

export const selectCategoriesMap = createSelector([selectCategories], (categories): CategoryMap => {
  return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap);
});

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.isLoading,
);
