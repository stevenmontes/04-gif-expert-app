import { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif</h1>
            <button onClick={onAddCategory}>Agregar</button>
            <AddCategory onNewCategory={event => onAddCategory(event)}></AddCategory>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}
