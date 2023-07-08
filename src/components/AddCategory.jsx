import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onAddCategory(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}
