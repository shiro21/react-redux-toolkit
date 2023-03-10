
// Control + Command + Space = ๐, ๐ฎ, ๐งก, ๐, ๐ง 

import { useDispatch } from "react-redux";
import { PostsProps } from "../../api/interface";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: "๐",
    wow: "๐ฎ",
    heart: "๐งก",
    rocket: "๐",
    coffee: "๐ง"
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