import { useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import SpanButton from '../SpanButton/Index'
import './SheetItem.css'

const SheetItem = ({ id, text, quantity, deleteItem }) => {
    const [isChecked, setIsChecked] = useState(false)

    const checkItem = () => {
        if (isChecked === false) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }

    const getItem = (id) => {
        deleteItem(id)
    }

    return (
        <li key={id} className='sheet-item'>
            <input className='checkbox' type="checkbox" onClick={checkItem} />
            <p className='text' style={{ textDecoration: `${isChecked ? 'line-through' : 'none'}` }}>{text}</p>
            <p className='quantity' style={{ textDecoration: `${isChecked ? 'line-through' : 'none'}` }}>{quantity}</p>
            
            <SpanButton hoverClass='hover-remove' onClick={() => getItem(id)}>
                <FaDeleteLeft />
            </SpanButton>
        </li>
    )
}

export default SheetItem