import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { PostsListProps, PostsProps, ReactionProps } from "../../api/interface";

const initialState = [
    {
        id: "1",
        title: "제목입니다.",
        content: "Hello World 내용입니다~",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: "2",
        title: "Slice TEST !",
        content: "Slice TEST ing~~",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
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
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action: PayloadAction<ReactionProps>) {
            const { postId, reaction } = action.payload;

            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                switch(reaction) {
                    case "thumbsUp" : existingPost.reactions[reaction]++; break;
                    case "wow" : existingPost.reactions[reaction]++; break;
                    case "heart" : existingPost.reactions[reaction]++; break;
                    case "rocket" : existingPost.reactions[reaction]++; break;
                    case "coffee" : existingPost.reactions[reaction]++; break;
                    default : break;
                }
                // 방법 찾기
                // existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state: PostsListProps) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;