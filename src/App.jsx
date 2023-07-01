import { useState,useRef,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Components/Products'
import Form from './Components/Form'
import Viewproducts from './Components/Viewproducts'

function App() {

  
  const [list, setList] = useState(
    [
      { name: "iphone", price: 100 },
      { name: "iphone2", price: 1000 },
      { name: "iphone3", price: 10000 },
      { name: "iphone4", price: 100000 },
      { name: "iphone5", price: 1000000 },
      { name: "iphone6", price: 10000000 },
      { name: "iphone7", price: 10000000 },
    ]
  )
    const SetList=(name , price)=>{
        setList([...list,{ name: name, price: price }]);
    }

  return (
    <>
    <h1>Add in List</h1>
   {/* <Form name=function></Form>*/ }
     <Form func={SetList} />
    {
      list.map(item=>{
        return <Products key={item.name} name={item.name} price ={item.price}/>
      })
    } 
    
   
    </>
  )
}

export default App


