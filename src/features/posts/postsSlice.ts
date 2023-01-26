import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { PostsListProps, PostsProps } from "../../api/interface";

const initialState = [
    {
        id: "1",
        title: "제목입니다.",
        content: "Hello World 내용입니다~",
    },
    {
        id: "2",
        title: "Slice TEST !",
        content: "Slice TEST ing~~",
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<PostsProps>) {
                state.push(action.payload);
            },
            prepare(title: string, content: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
});

export const seletAllPosts = (state: PostsListProps) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;