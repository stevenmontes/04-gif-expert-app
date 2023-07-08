import { useState } from 'react';
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories(['Mario', ...categories]);
    }

    return (
        <>
            <h1>Gif</h1>
            <button onClick={onAddCategory}>Agregar</button>
            <AddCategory></AddCategory>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}
