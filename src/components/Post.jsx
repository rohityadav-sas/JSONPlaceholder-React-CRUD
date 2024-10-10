import Button from "./Button";
import deletePost from "../api/deletePost";
import { Crud } from "../context/CrudProvider";
import { useContext, useEffect } from "react";

export default function Post({ id, titles, body }) {
    let { posts, setPosts, title, setTitle, setBody, editMode, setEditMode, setPostToEdit, titleRef } = useContext(Crud);

    async function removePost(id) {
        setPosts(posts.filter(post => post.id !== id));
        await deletePost(id);
    }

    async function editPost(id) {
        posts.map(post => {
            if (post.id === id) {
                setTitle(post.title);
                setBody(post.body);
                setTimeout(() => {
                    titleRef.current.select();
                }, 10);
                setEditMode(true);
                setPostToEdit(post.id);
            }
        });
    }

    return (
        <div className="
      flex flex-col justify-evenly gap-4
      w-full h-auto sm:h-80
      relative rounded-[20px] p-7 border-2 border-[#c3c6ce] transition duration-300 ease-out overflow-visible hover:border-[#008bf8] hover:shadow-outline-blue group
    ">
            <h1><span className="font-bold text-lg text-warning">Title:</span> {titles}</h1>
            <p className="text-justify"><span className="font-bold text-lg text-warning">Body:</span> {body}</p>
            <span className="text-2xl text-center font-bold text-warning">{id}</span>
            <div className="flex gap-4 opacity-0 absolute top-full left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-500 ">
                <Button color="bg-success" value="EDIT" onClick={() => editPost(id)} />
                <Button color="bg-error" value="DELETE" onClick={() => removePost(id)} />
            </div>
        </div>
    );
}
