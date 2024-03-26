import SheetItem from '../SheetItem/Index'
import './Sheet.css'

const Sheet = (props) => {

    const deleteItem = (id) => {
        props.deleteSelectedItem(id)
    } 

    return (
        <ul className='sheet'>
            {
                props.listOfItens.map(item =>
                    <SheetItem id={item.id} text={item.itemName} quantity={item.quantity} deleteItem={deleteItem} />
                )
            }
        </ul>
    )
}

export default Sheet