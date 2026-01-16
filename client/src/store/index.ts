import { configureStore } from "@reduxjs/toolkit";
import { containerReducer } from "./reducers/container.reducer";
// ...

export const store = configureStore({
  reducer: {
    containers: containerReducer,
    // groups: commentsReducer,
    // images: usersReducer,
    // stats: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
