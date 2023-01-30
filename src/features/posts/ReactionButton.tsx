
// Control + Command + Space = 👍, 😮, 🧡, 🚀, 🧋 

import { useDispatch } from "react-redux";
import { PostsProps } from "../../api/interface";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "🧡",
    rocket: "🚀",
    coffee: "🧋"
}

export const ReactionButton = ({ post }: { post: PostsProps }) => {
    console.log("POST", post)

    const dispatch = useDispatch();

    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji], index) => {

        return (
            <button key={name} type="button" onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name}))}>
                {emoji} 
                {Object.values(post.reactions)[index]}
            </button>
        );
    })
    return (
        <div>{reactionButton}</div>
    );
}