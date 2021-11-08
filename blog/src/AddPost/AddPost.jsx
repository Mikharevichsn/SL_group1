import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

export const AddPost = () => {
    const navigate  = useNavigate();
    const [formData, setFormData] = useState({ title: '', author: ''});

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await fetch('/posts',
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data) navigate('/blog');
        } catch(err) {
            console.log('error = ', err);
        }
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>
                    Название статьи
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(event) => {
                            setFormData({ ...formData, title: event.target.value});
                        }}
                    />
                </label>
                <label>
                    Автор
                    <input
                        type="text"
                        value={formData.author}
                        onChange={(event) => {
                            setFormData({ ...formData, author: event.target.value});
                        }}
                    />
                </label>
                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}
