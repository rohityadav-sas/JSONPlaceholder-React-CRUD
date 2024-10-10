import api from "./!api";

export default async function deletePost(id) {
    let response = await api.delete(`/posts/${id}`);
    return response.data;
}