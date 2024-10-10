import api from './!api';

export default async function getPosts() {
    const response = await api.get('/posts');
    return response.data;
}