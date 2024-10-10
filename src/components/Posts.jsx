import { useEffect, useContext } from "react";
import getPosts from "../api/getPosts";
import Post from "./Post";
import { Crud } from "../context/CrudProvider";

export default function Posts() {
    let { posts, setPosts } = useContext(Crud);
    async function fetchPosts() {
        const data = await getPosts();
        setPosts(data);
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 sm:p-8">
            {posts.map(post => (
                <Post key={post.id} id={post.id} titles={post.title} body={post.body} />
            ))}
        </div>
    );
}
