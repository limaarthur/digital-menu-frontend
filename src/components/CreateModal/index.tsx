import { useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import './modal.css';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}
const Input = ({ label, value, updateValue }: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            imgUrl
        }

        mutate(foodData)
    }

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={imgUrl} updateValue={setImgUrl}/>
                </form>
                <button onClick={submit} className="btn-secondary">Postar</button>
            </div>
        </div>
    )
}