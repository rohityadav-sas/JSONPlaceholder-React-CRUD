import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import addPost from "../api/addPost";
import { Crud } from "../context/CrudProvider";

export default function AddPost() {
    let { posts, setPosts,
        title, setTitle,
        body, setBody,
        editMode, setEditMode,
        postToEdit, setPostToEdit,
        titleRef, bodyRef
    } = useContext(Crud);

    const appendPost = async (e) => {
        e.preventDefault();
        if (!title || !body) {
            if (!body) bodyRef.current.focus();
            if (!title) titleRef.current.focus();
            return;
        }
        let newPost = await addPost(title, body);
        setPosts([...posts, newPost]);
        setTitle("");
        setBody("");
    }



    const editPost = async (e) => {
        e.preventDefault();
        let updatedPosts = posts.map(post =>
            post.id === postToEdit
                ? { ...post, title, body }
                : post
        );
        setPosts(updatedPosts);
        setTitle("");
        setBody("");
        setEditMode(false);
        setPostToEdit(null);
    }

    return (
        <form className="
        border-2 m-auto p-4 py-6 rounded-xl bg-primary items-center
        flex flex-col justify-evenly sm:flex-row gap-4 sm:gap-8 w-full sm:w-3/4 lg:w-1/2"
        >
            <Input placeholder="Title" value={title} onChange={setTitle} ref={titleRef} />
            <Input placeholder="Body" value={body} onChange={setBody} ref={bodyRef} />
            <Button color="bg-success" value={editMode ? "EDIT" : "ADD"} onClick={editMode ? editPost : appendPost} />
        </form>
    );
}
