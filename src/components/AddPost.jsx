import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { Crud } from "../context/CrudProvider";
import usePostHandler from "../hooks/usePostHandler";

export default function AddPost() {
    let { posts, setPosts,
        title, setTitle,
        body, setBody,
        editMode, setEditMode,
        postToEdit, setPostToEdit,
        titleRef, bodyRef
    } = useContext(Crud);


    let { appendPost, editPost } = usePostHandler(posts, setPosts,
        title, setTitle,
        body, setBody,
        setEditMode,
        postToEdit, setPostToEdit,
        titleRef, bodyRef);


    return (
        <form className="border-2 m-auto p-4 py-6 rounded-xl bg-primary items-center
        flex flex-col justify-evenly sm:flex-row gap-4 sm:gap-8 w-full sm:w-3/4 lg:w-1/2"
        >
            <Input
                placeholder="Title"
                value={title}
                onChange={setTitle}
                ref={titleRef}
            />
            <Input
                placeholder="Body"
                value={body}
                onChange={setBody}
                ref={bodyRef}
            />
            <Button
                color="bg-success"
                value={editMode ? "EDIT" : "ADD"}
                onClick={editMode ? editPost : appendPost}
            />
        </form>
    );
}
