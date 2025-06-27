// import { type Action, type PayloadAction, type UnknownAction, createSlice } from '@reduxjs/toolkit';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Category {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}

export interface CategoriesState {
  readonly categories: Category[];
  readonly isLoading: boolean;
}
export type CategoryMap = {
  [key: string]: CategoryItem[];
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

// User-defined type guard
// type Alien = {
//   fly: () => {};
// };

// type Human = {
//   speak: () => {};
// };

// function isHuman(entity: Human | Alien): entity is Human {
//   return (entity as Human).speak !== undefined;
// }

// const Josh

// if (isHuman(Josh)) {
//   Josh.speak()
// }

// intersection type

// type Human = {
//   name: string;
// };

// type Alien = {
//   fly: () => void;
// };

// type Hybrid = Human & Alien;

// const Josh: Hybrid = {
//   name: 'josh',
//   fly: () => {},
// };

// return type

// type Human = {
//   name: string;
// };
// type MyFunc = () => Human;

// type MyReturn = ReturnType<MyFunc>;

//

// type Matchable<AC extends () => UnknownAction> = AC & {
//   type: ReturnType<AC>['type'];
//   match(action: UnknownAction): action is ReturnType<AC>;
// };

// export function withMatcher<AC extends () => UnknownAction & { type: string }>(
//   actionCreator: AC,
// ): Matchable<AC>;

// export function withMatcher<AC extends (...args: any[]) => UnknownAction & { type: string }>(
//   actionCreator: AC,
// ): Matchable<AC>;

// export function withMatcher(actionCreator: Function) {
//   const type = actionCreator().type;
//   return Object.assign(actionCreator, {
//     type,
//     match(action: UnknownAction) {
//       return action.type === type;
//     },
//   });
// }

//
