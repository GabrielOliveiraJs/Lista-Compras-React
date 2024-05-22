import { MdOutlinePlaylistAdd } from "react-icons/md"
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline } from "react-icons/md"
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Input from '../Input/Index'
import SpanButton from "../SpanButton/Index"
import './Form.css'

const Form = ({ createdItem }) => {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleClickSpanButton = (type) => {
    if (type === 'add') {
      setQuantity(quantity + 1)
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }
  }

  const saveItem = (e) => {
    e.preventDefault()
    createdItem({
      id: uuidv4(),
      itemName,
      quantity
    })
    setItemName('')
    setQuantity(1)
  }

  return (
    <form className='form' onSubmit={saveItem}>

      <Input
        type='text'
        width='300px'
        padding='2px 10px'
        required={true}
        inputValue={itemName}
        changedValue={value => setItemName(value)}
      />

      <div className='qty-container'>

        <SpanButton
          className="icons"
          hoverClass='hover-add'
          onClick={() => handleClickSpanButton('add')}
        >
          <MdAddCircleOutline />
        </SpanButton>

        <Input
          type='number'
          width='60px'
          textAlign='center'
          inputValue={quantity}
          changedValue={value => setQuantity(value)}
        />

        <SpanButton
          className="icons"
          hoverClass='hover-add'
          onClick={() => handleClickSpanButton('remove')}
        >
          <MdOutlineRemoveCircleOutline />
        </SpanButton>

      </div>

      <button className="btn">
        <MdOutlinePlaylistAdd />
      </button>

    </form>
  )
}

export default Form