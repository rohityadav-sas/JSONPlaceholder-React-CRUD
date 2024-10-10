import { createContext, useState, useRef } from 'react';

export const Crud = createContext();

export const CrudProvider = ({ children }) => {
    let [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [editMode, setEditMode] = useState(false);
    let [postToEdit, setPostToEdit] = useState(null);

    let titleRef = useRef(null);
    let bodyRef = useRef(null);

    return (
        <Crud.Provider value={{
            posts, setPosts,
            isLoading, setIsLoading,
            title, setTitle,
            body, setBody,
            editMode, setEditMode,
            postToEdit, setPostToEdit,
            titleRef, bodyRef
        }}>
            {children}
        </Crud.Provider>
    );
};
