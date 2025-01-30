// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  let myObj = {
    name: "Shivam Kushwaha",
    Address: "Civil Line Rewa M.P"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailwindCSS</h1>
      <Card username = "Shivam Singh" someObj = {myObj}/>
      <Card username = "Abhay Shukla" />
      <Card />
    </>
  )
}

export default App
