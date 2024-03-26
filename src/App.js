import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import Form from './components/Form/Index';
import Sheet from './components/Sheet/Index';
import './reset.css';

function App() {
  const [itens, setItens] = useState([
    { id: uuidv4(), itemName: 'Pães', quantity: 2 },
    { id: uuidv4(), itemName: 'ovos', quantity: 12 },
    { id: uuidv4(), itemName: 'leite', quantity: 4 },
    { id: uuidv4(), itemName: 'margarina', quantity: 1 },
    { id: uuidv4(), itemName: 'café', quantity: 1 }
  ])

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
  );
}

export default App;
