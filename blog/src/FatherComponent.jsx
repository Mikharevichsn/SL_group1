import React from 'react'
import { ChildComponent } from './ChildComponent'

export const FatherComponent = () => {
    const goods = [
        {price: 1000, title: 'Название 1', description: 'Описание 1'},
        {price: 2000, title: 'Название 2', description: 'Описание 2'},
        {price: 3000, title: 'Название 3', description: 'Описание 3'},
    ]
    const a = 12000;
    const des = 'Описасние холодильника'
    return (
        <div>
            1111111
            <ChildComponent price={a} title="Холодильник" description={des} />
            <ChildComponent price={15000} title="Телевизор" description="Описание телевизора" />
            {goods.map(el => <ChildComponent price={el.price} title={el.title} description={el.description} />)}
        </div>
    )
}
