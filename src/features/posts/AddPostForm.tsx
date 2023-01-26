import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
// nanoid = 임의의 ID를 생성합니다. uuid같은 느낌입니다.
// import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

export const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title.length > 1 && content.length > 5) {
            dispatch(postAdded(title, content))

            setTitle("");
            setContent("");
        }
    }

    return (
        <section>
            <h2>새로운 포스트 생성하기</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                <label htmlFor="postContent">Content: </label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />

                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    );
};