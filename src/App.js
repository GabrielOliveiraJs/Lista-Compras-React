import './reset.css'
import { useState } from 'react'
import Form from './components/Form/Index'
import Sheet from './components/Sheet/Index'
import list from './db/db.json'

function App() {
  const [itens, setItens] = useState(list)

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
