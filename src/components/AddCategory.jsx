import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}
