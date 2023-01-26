// 툴킷에서 구성 저장소를 가져옵니다.
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/count/counterSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
});