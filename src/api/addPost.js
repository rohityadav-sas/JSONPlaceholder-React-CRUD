import api from "./!api";

export default async function addPost(title, body) {
    const response = await api.post('/posts', { title, body });
    return response.data;
}