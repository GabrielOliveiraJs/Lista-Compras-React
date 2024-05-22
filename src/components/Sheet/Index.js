import SheetItem from '../SheetItem/Index'
import './Sheet.css'

const Sheet = ({ listOfItens, deleteSelectedItem }) => {

    const deleteItem = (id) => {
        deleteSelectedItem(id)
    }

    return (
        <ul className='sheet'>
            {
                listOfItens.map(item =>
                    <SheetItem
                        key={item.id}
                        id={item.id}
                        text={item.itemName}
                        quantity={item.quantity}
                        deleteItem={deleteItem}
                    />
                )
            }
        </ul>
    )
}

export default Sheet