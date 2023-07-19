import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif</h1>
            <button onClick={onAddCategory}>Agregar</button>
            <AddCategory onNewCategory={event => onAddCategory(event)}></AddCategory>
            {
                categories.map(category =>
                    (<GifGrid key={category} category={category}></GifGrid>)
                )
            }
        </>
    )
}
