// 툴킷에서 구성 저장소를 가져옵니다.
import { configureStore } from "@reduxjs/toolkit";

// Slice
import counterReducer from "../features/count/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
});