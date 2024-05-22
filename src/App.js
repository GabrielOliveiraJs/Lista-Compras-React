import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Form from './components/Form/Index'
import Sheet from './components/Sheet/Index'
import './reset.css'
import list from './db/db.json'


function App() {
  const [itens, setItens] = useState(list)

  // function deleteItem(id) {
  //   setItens(itens.filter(item => item.id !== id))
  // }
  // deleteItem(itens[0].id)
  // console.log('Item 0: ' + itens[0].id)

  const newItemCreated = (item) => {
    setItens([...itens, item])
  }

  const deleteSelectedItem = (id) => {
      setItens(itens.filter(item => item.id !== id))
  }

  return (
    <div className='main-container'>
      <Form createdItem={item => newItemCreated(item)} />
      <Sheet listOfItens = {itens} deleteSelectedItem={deleteSelectedItem} />
    </div>
  )
}

export default App;
