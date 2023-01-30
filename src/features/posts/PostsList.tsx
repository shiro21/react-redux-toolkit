import styles from "./PostsList.module.scss";

import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { AddPostForm } from "./AddPostForm";
import { PostAuth } from "./PostAuth";
import { Time } from "./Time";
import { ReactionButton } from "./ReactionButton";

export const PostsList = () => {

    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <section key={post.id} className={styles.posts_wrap}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuth userId={post.userId} />
                <Time timestamp={post.date} />
            </p>
            <ReactionButton post={post} />
        </section>
    ));

    return (
        <article className={styles.posts_list_wrap}>
            <h2>Posts</h2>
            <AddPostForm />
            <div className={styles.posts_list}>
                {renderedPosts}
            </div>
        </article>
    );
};