import styles from "./PostsList.module.scss";

import { useSelector } from "react-redux";
// import { PostsListProps } from "../../api/interface";
import { seletAllPosts } from "./postsSlice";
import { AddPostForm } from "./AddPostForm";

export const PostsList = () => {

    // 아래처럼 사용도 가능합니다.
    // const posts = useSelector((state: PostsListProps) => state.posts);
    const posts = useSelector(seletAllPosts);

    const renderedPosts = posts.map(post => (
        <section key={post.id} className={styles.posts_wrap}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </section>
    ))
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