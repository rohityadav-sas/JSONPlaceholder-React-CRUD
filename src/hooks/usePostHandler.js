import addPost from '../api/addPost';

export default function usePostHandler(posts, setPosts,
    title, setTitle,
    body, setBody,
    setEditMode,
    postToEdit, setPostToEdit,
    titleRef, bodyRef
) {
    const appendPost = async (e) => {
        e.preventDefault();
        if (!title || !body) {
            if (!body) bodyRef.current.focus();
            if (!title) titleRef.current.focus();
            return;
        }
        let newPost = await addPost(title, body);
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    };

    const editPost = async (e) => {
        e.preventDefault();
        let updatedPosts = posts.map(post =>
            post.id === postToEdit
                ? { ...post, title, body }
                : post
        );
        setPosts(updatedPosts);
        setTitle('');
        setBody('');
        setEditMode(false);
        setPostToEdit(null);
    };

    return { appendPost, editPost };
}
