import React from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';

const links = [
    { title: 'Главная', to: "/"},
    { title: 'О нас', to: "/about"},
    { title: 'Контакты', to: "/contacts"},
    { title: 'Блог', to: "/blog"},
    { title: 'Добавить пост', to: "/add-post"},
];

export const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                {links.map((link) => {
                    return <li key={link.title}><Link to={link.to}>{link.title}</Link></li>
                })}
            </ul>
        </nav>
    )
}
