import styles from "./PostsList.module.scss";

import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

import { postAdded } from "./postsSlice";

export const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [userId, setUserId] = useState<string>("");

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const onAuthChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title.length > 1 && content.length > 5) {
            dispatch(postAdded(title, content, userId))

            setTitle("");
            setContent("");
        }
    }

    // Button Disabled
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    // User Selector
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.name}>
            {user.name}
        </option>
    ));

    return (
        <section className={styles.new_porsts_wrap}>
            <h2>새로운 포스트 생성하기</h2>
            <form>
                {/* 이름 */}
                <select id="postAuth" value={userId} onChange={onAuthChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                {/* 제목 */}
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                {/* 내용 */}
                <label htmlFor="postContent">Content: </label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />

                {/* 전송 */}
                <button disabled={!canSave} type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    );
};