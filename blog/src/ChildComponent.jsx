import React from 'react'

export const ChildComponent = (props) => {
console.log("🚀 ~ file: ChildComponent.jsx ~ line 4 ~ ChildComponent ~ props", props)
    return (
        <div>
            <h3>Название: {props.title}</h3>
            <p>Описание: {props.description}</p>
            <p>Цена: <b>{props.price}</b></p>
        </div>
    )
}
