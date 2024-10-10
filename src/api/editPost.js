import api from "./!api";

export default async function editPost(id, title, body) {
    const response = await api.put(`/posts/${id}`, { title, body });
    return response.data;
}